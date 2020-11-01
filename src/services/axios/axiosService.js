import axios from "axios";

import { checkTokenExpration } from "../../Helpers/checkRoleExpration";
import {
  getAccessToken,
  clearAllToken,
  clearAllItem,
} from "../../Helpers/localStorageService";
import history from "../../Helpers/history";
class axiosService {
  constructor() {
    const instance = axios.create();
    instance.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";
       instance.defaults.baseURL = "https://nausocbe.herokuapp.com";
  //  instance.defaults.baseURL = "http://localhost:4000";
    instance.interceptors.response.use(this.handlesuccess, this.handleError);
    instance.interceptors.request.use(
      (config) => {
        const token = getAccessToken();
        // console.log("11111111");

        config.headers.Authorization = token ? token : "";

        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    );
    this.instance = instance;
  }
  handlesuccess = (res) => {
    return res;
  };
  handleError = (error) => {
    if (error.response.status === 403) {
      clearAllItem();
      history.push("/auth/login");
    }
    return Promise.reject(error.response);
  };
  get = (url) => {
    return this.instance.get(url);
  };
  post = (url, data) => {
    return this.instance.post(url, data);
  };
  put = (url, data) => {
    return this.instance.put(url, data);
  };
  delete = (url, data) => {
    return this.instance.delete(url, data);
  };
  patch = (url, data) => {
    return this.instance.patch(url, data);
  };
}
export default new axiosService();
