import { useRef, useEffect } from 'react';

export interface UseTitleOptions {
  restoreOnUnmount?: boolean;
}
const DEFAULT_USE_TITLE_OPTIONS: UseTitleOptions = {
  restoreOnUnmount: false,
};
function useTitle(title: string, options: UseTitleOptions = DEFAULT_USE_TITLE_OPTIONS) {
  const prevTitleRef = useRef(document.title);
  document.title = title;
  useEffect(() => {
    if (options && options.restoreOnUnmount) {
      return () => {
        document.title = prevTitleRef.current;
      };
    }
    return () => {};
  }, []);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default typeof document !== 'undefined' ? useTitle : (_title: string) => {};
