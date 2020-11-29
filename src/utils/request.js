import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { Message } from "element-ui";

const instance = axios.create({
  baseURL: "http://182.92.128.115/api",
  headers: {}
});

instance.interceptors.request.use(config => {
  NProgress.start();
  return config;
});

instance.interceptors.response.use(
  response => {
    if (response.data.code === 200) {
      return response.data.data;
    }
    NProgress.done();

    Message.error(response.data.message);
    return Promise.reject(response.data.message);
  },
  error => {
    NProgress.done();
    const message = error.message || "网络错误";
    // console.dir(err);
    Message.error(message);
    return Promise.reject(message);
  }
);

export default instance;
