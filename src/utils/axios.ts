import axios, { AxiosRequestConfig } from 'axios';
import { ElMessage } from 'element-plus';
import { IAxioxResponse } from '@/types/common';

const instance = axios.create({ 
    baseURL: '/api',
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    },
    timeout: 10000, 
    withCredentials: true,
});

instance.interceptors.request.use(config => {
  // 自定义header，可添加项目token
  config.headers.token = 'token';
  return config;
});

instance.interceptors.response.use((response)=>{
  const res = response.data;
  switch (res.code) {
    case 0:
      return res;
    case 401: // 没登录，或者登录状态过期
      window.location.href = '/';
        break;
    case 403: // 没权限
      window.location.href = '/#/403';
      break;
    case 422: // 用户填写错误
      ElMessage.warning(res.message);
      break;
    default:
      ElMessage.error(res.message);
      break;
  }
},()=>{
  ElMessage.error('网络请求异常，请稍后重试!');
});

export default async function<T>(config: AxiosRequestConfig): Promise<IAxioxResponse<T>> {
  return new Promise<IAxioxResponse<T>>((resolve, reject) => {
    instance(config)
      .then((data) => {
        resolve(data as IAxioxResponse<T>);
      })
      .catch(error => {
        reject(error);
      })
  })
};
