import { stringify } from 'qs';
import { useCallback, useEffect, useRef } from 'react';
import { Subject } from 'rxjs';
import { ReqOptions } from '../type/ReqOptions';
import { useImmer } from './useImmer';

export class UseRequest {
  static baseUrl: string = '';
}

export const useRequest = <T = any>(reqOptions: ReqOptions<T>) => {
  const defaultResTransform = useCallback((r: Response) => r.json() as Promise<T>, []);
  const [cachedOptions] = useImmer(reqOptions);
  const { url, body, query, runCase = true } = reqOptions;
  const { immediately = true, defaultResponse, resTransform = defaultResTransform } = cachedOptions;
  const [res, setRes] = useImmer(defaultResponse);
  let reqUrl = '';
  if (!url.startsWith('http')) {
    reqUrl = `${UseRequest.baseUrl}${url}`;
  }
  if (query) {
    reqUrl = `${reqUrl}?${stringify(query)}`;
  }
  const isFirstRef = useRef(0);
  useEffect(() => {
    const subject = new Subject();
    if ((immediately || isFirstRef.current > 0) && runCase) {
      const response = fetch(reqUrl);
      response
        .then(resTransform)
        .then((r) => subject.next(r))
        .catch((e) => subject.error(e));
    }
    subject.subscribe(
      (r: T) => {
        setRes(r);
      },
      (e) => {
        setRes(e);
      },
    );
    isFirstRef.current++;
    return () => {
      subject.unsubscribe();
    };
  }, [body, immediately, reqUrl, resTransform, runCase, setRes]);
  return [res] as const;
};
