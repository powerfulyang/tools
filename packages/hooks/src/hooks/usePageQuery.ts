import { parse } from 'qs';
import { useEffect } from 'react';
import { useImmer } from './useImmer';

export const usePageQuery = <T = any>() => {
  const [query, setQuery] = useImmer<T>({} as T);
  useEffect(() => {
    const search = new URL(window.location.href).search.replace('?', '');
    if (search) {
      setQuery((parse(search) as unknown) as T);
    }
  }, [setQuery]);
  return query;
};
