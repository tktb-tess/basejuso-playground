interface Ok<T> {
  success: true;
  value: T;
}

interface Err<E = unknown> {
  success: false;
  error: E;
}

export type Result<T, E = unknown> = Ok<T> | Err<E>;
