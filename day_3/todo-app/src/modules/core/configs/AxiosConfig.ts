import axios, { AxiosError } from "axios";

export const api = axios.create({
    withCredentials: false,
    baseURL: "http://localhost:5173",
  });

const errorHandler = (error: AxiosError) => {
    // const statusCode = error.response?.status;
    console.error(error)
    return Promise.reject(error)
  }
  
  api.interceptors.response.use(undefined, (error: AxiosError) => {
    return errorHandler(error)
  })