import { AxiosResponse } from 'axios';

export interface IAxioxResponse<T> extends AxiosResponse {
  code: number;
  message: string;
  data: T;
}
