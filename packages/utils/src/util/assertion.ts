import { Dict } from './types';

export function isNumber(value: any): value is number {
  return typeof value === 'number' && !Number.isNaN(value) && Number.isFinite(value);
}

export const isNotNumber = (value: any) => !isNumber(value);

export function isNumeric(value: any) {
  return value != null && value - parseFloat(value) + 1 >= 0;
}

export function isArray<T>(value: any): value is Array<T> {
  return Array.isArray(value);
}

export const isEmptyArray = (value: any) => isArray(value) && value.length === 0;

export function isFunction(value: any): value is Function {
  return typeof value === 'function';
}

export const isDefined = (value: any) => typeof value !== 'undefined' && value !== undefined;

export const isUndefined = (value: any): value is undefined =>
  typeof value === 'undefined' || value === undefined;

export const isObject = (value: any): value is Dict => {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function') && !isArray(value);
};

export const isEmptyObject = (value: any) => isObject(value) && Object.keys(value).length === 0;

export function isNotEmptyObject(value: any): value is object {
  return value && !isEmptyObject(value);
}

export const isNull = (value: any): value is null => value == null;

// String assertions
export function isString(value: any): value is string {
  return Object.prototype.toString.call(value) === '[object String]';
}

// Empty assertions
export const isEmpty = (value: any) => {
  if (isArray(value)) return isEmptyArray(value);
  if (isObject(value)) return isEmptyObject(value);
  return value == null || value === '';
};

export const __dev__ = process.env.NODE_ENV !== 'production';
export const __prod__ = process.env.NODE_ENV === 'production';
export const isClient = typeof window === 'object';
