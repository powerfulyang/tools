import { useEffect, useState } from 'react';
import useEffectOnce from './useEffectOnce';

const useKeyboardJs = (combination: string | string[]) => {
  const [state, set] = useState<[boolean, null | KeyboardEvent]>([false, null]);
  const [keyboardJs, setKeyboardJs] = useState<any>(null);

  useEffectOnce(() => {
    // @ts-ignore
    import('keyboardjs').then((k) => setKeyboardJs(k.default || k));
  });

  useEffect(() => {
    if (!keyboardJs) {
      return () => {};
    }

    const down = (event: KeyboardEvent | null) => set([true, event]);
    const up = (event: KeyboardEvent | null) => set([false, event]);
    keyboardJs.bind(combination, down, up, true);

    return () => {
      keyboardJs.unbind(combination, down, up);
    };
  }, [combination, keyboardJs]);

  return state;
};

export default useKeyboardJs;
