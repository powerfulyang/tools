/**
 * P parameters type; R return type;
 */
export type ReturnTypedFunction<P = any, R = any> = (...args: P[]) => R;
/**
 * P constructor parameters type; I instance type;
 */
export type ConstructorFunction<P = any, I = any> = new (...args: P[]) => I;
/**
 * P parameters type;
 */
export type VoidFunction<P = any> = ReturnTypedFunction<P, void>;
