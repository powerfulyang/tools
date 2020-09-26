import { useEffect } from 'react';

const usePageLeave = (onPageLeave: () => void) => {
  useEffect(() => {
    if (!onPageLeave) {
      return () => {};
    }

    const handler = (event: MouseEvent) => {
      const from = event.relatedTarget;
      if (!from) {
        onPageLeave();
      }
    };

    document.addEventListener('mouseout', handler);
    return () => {
      document.removeEventListener('mouseout', handler);
    };
  }, [onPageLeave]);
};

export default usePageLeave;
