import { useEffectOnce } from './useEffectOnce';

export const useMount = (effect: () => void) => {
  useEffectOnce(() => {
    return effect;
  });
};
