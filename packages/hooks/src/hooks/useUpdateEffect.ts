import { DependencyList, useEffect } from 'react';
import { useMountedState } from './useMountedState';

export const useUpdateEffect = (effect: () => void, deps?: DependencyList) => {
  const isMounted = useMountedState();
  useEffect(() => {
    isMounted() && effect();
  }, [deps, effect, isMounted]);
};
