import { VoidFunction } from '@powerfulyang/utils/src';
import { useEffectOnce } from './useEffectOnce';

export const useMount = (effect: VoidFunction) => {
  useEffectOnce(() => {
    effect();
  });
};
