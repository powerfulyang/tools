import { produce } from 'immer';
import { Dispatch, Reducer, useMemo, useReducer } from 'react';

export function useImmerReducer<S = any, A = any>(
  reducer: Reducer<S, A>,
  initializerArg: any,
  initializer: (args: any) => S,
): [S, Dispatch<A>];

export function useImmerReducer<S = any, A = any>(
  reducer: Reducer<S, A>,
  initializerArg: S,
  initializer?: undefined,
): [S, Dispatch<A>];

export function useImmerReducer(reducer: any, initializerArg: any, initializer?: any) {
  const cachedReducer = useMemo(() => produce(reducer), [reducer]);
  return useReducer(cachedReducer, initializerArg, initializer);
}
