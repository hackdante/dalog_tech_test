export interface FetchStateUI<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}