import { useRef } from 'react';

export const useFixed = <T>(val: T): T => {
  const ref = useRef(val);
  return ref.current;
};
