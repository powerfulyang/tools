import { useEffect } from 'react';

const usePageLeave = (onPageLeave: () => void, args = []) => {
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
  }, args);
};

export default usePageLeave;
