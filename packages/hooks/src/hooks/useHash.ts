import { useCallback } from 'react';
import { useLifecycles } from './useLifecycles';
import { useImmer } from './useImmer';

/**
 * read and write url hash, response to url hash change
 */
export const useHash = () => {
  const [hash, setHash] = useImmer(() => window.location.hash);

  const onHashChange = useCallback(() => {
    setHash(window.location.hash);
  }, [setHash]);

  useLifecycles(
    () => {
      window.addEventListener('hashchange', onHashChange);
    },
    () => {
      window.removeEventListener('hashchange', onHashChange);
    },
  );

  const _setHash = useCallback(
    (newHash: string) => {
      if (newHash !== hash) {
        window.location.hash = newHash;
      }
    },
    [hash],
  );

  return [hash, _setHash] as const;
};
