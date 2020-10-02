import { produce } from 'immer';
import { useCallback, useState } from 'react';
import { isObject } from '@powerfulyang/utils/src';

export function useImmer<T = any>(initialValue: T | (() => T)) {
  const [val, updateValue] = useState<T>(initialValue);

  return [
    val,
    useCallback((updater: T | ((args: T) => void)) => {
      if (isObject(updater)) {
        return updateValue(<T>updater);
      }
      return updateValue(produce(<any>updater));
      // updateValue(produce(newState))
      // OR
      // example updater = (state)=> state.property = newVal
      //
      // updateValue(producedUpdater);
      //
      // producedUpdater to be called and get return value
    }, []),
  ] as const;
}
