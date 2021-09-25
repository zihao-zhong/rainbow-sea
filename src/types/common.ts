import { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface IAxiosRequestConfig extends AxiosRequestConfig {
  loading?: boolean
}


export interface IAxioxResponse<T> extends AxiosResponse {
  code: number;
  message: string;
  data: T;
}
