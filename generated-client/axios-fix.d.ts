import type { AxiosResponse, AxiosRequestConfig, AxiosInstance } from 'axios';

export type AxiosPromise<T = any> = Promise<AxiosResponse<T>>;
export type RawAxiosRequestConfig = AxiosRequestConfig;
export type { AxiosInstance };