import { useEffect } from 'react';

export const useLifecycles = (mount: { (): void; (): void }, unmount?: { (): void; (): void }) => {
  useEffect(() => {
    if (mount) {
      mount();
    }
    return () => {
      if (unmount) {
        unmount();
      }
    };
  }, [mount, unmount]);
};
