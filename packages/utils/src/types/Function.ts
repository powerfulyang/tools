export type CommonFunction<T = any> = (...args: any[]) => T;
export type PromiseFunction<T = any> = (...args: any[]) => Promise<T>;
export type ConstructorFunction<T = any, P = any> = new (...args: P[]) => T;
export type VoidFunction = (...args: any[]) => void;
