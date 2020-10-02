import { produce } from 'immer';
import { useCallback, useState } from 'react';
import { ReturnTypedFunction, VoidFunction, isFunction } from '@powerfulyang/utils';

export function useImmer<T = any>(initialValue: T | ReturnTypedFunction<never, T>) {
  const [val, updateValue] = useState<T>(initialValue);

  return [
    val,
    useCallback((updater: T | VoidFunction<T>) => {
      if (!isFunction(updater)) {
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
