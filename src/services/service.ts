/* eslint-disable prettier/prettier */
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosError,
  AxiosResponse,
} from "axios";

import BASE_URL_API from "../constants/service.constant";

const AxiosInstanceApi: AxiosInstance = axios.create({
  baseURL: `${BASE_URL_API}`,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Header": "Origin",
  },
});

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const token = "bearer dsdndofndsjfnodinsaid8237e823idasd7a8dauda8";

  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse) => {
  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  // 404 405
  // 301 302
  // 500
  return Promise.reject(error);
};

AxiosInstanceApi.interceptors.request.use(onRequest, onRequestError);
AxiosInstanceApi.interceptors.response.use(onResponse, onResponseError);

export default AxiosInstanceApi;
