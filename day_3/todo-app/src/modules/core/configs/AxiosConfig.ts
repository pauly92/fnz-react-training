import axios, { AxiosError, AxiosResponse } from "axios";

export const api = axios.create({
    withCredentials: false,
    baseURL: "http://localhost:5173",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
  }
  });

const errorHandler = (error: AxiosError) => {
    // const statusCode = error.response?.status;
    console.error(error)
    return Promise.reject(error)
  };
  
api.interceptors.response.use(
  // (response: AxiosResponse) => { 
  //   return response.headers["content-type"] === "application/json" ? response : Promise.reject(response);
  // }, 
  undefined,
  (error: AxiosError) => { return errorHandler(error)}
)