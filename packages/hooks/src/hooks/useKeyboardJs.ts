import { useEffect, useState } from 'react';
import { useEffectOnce } from '../index';

const useKeyboardJs = (combination: string | string[]) => {
  const [state, set] = useState<[boolean, null | KeyboardEvent]>([false, null]);
  const [keyboardJs, setKeyboardJs] = useState<any>(null);

  useEffectOnce(() => {
    import('keyboardjs').then(setKeyboardJs);
  });

  useEffect(() => {
    if (!keyboardJs) {
      return () => {};
    }

    const down = (event: KeyboardEvent | null) => set([true, event]);
    const up = (event: KeyboardEvent | null) => set([false, event]);
    keyboardJs.bind(combination, down, up);

    return () => {
      keyboardJs.unbind(combination, down, up);
    };
  }, [combination, keyboardJs]);

  return state;
};

export default useKeyboardJs;
