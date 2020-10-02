import { EffectCallback, useEffect } from 'react';
import { useFixed } from './useFixed';

export const useEffectOnce = (effect: EffectCallback) => {
  const effectRef = useFixed(effect);
  useEffect(effectRef, [effectRef]);
};
