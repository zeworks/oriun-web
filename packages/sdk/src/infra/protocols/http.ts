export type HttpResponse<T = any> = Promise<{
  data?: T;
  isLoading: boolean;
  error?: any;
}>
