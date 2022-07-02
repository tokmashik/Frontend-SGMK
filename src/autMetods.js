/**import LoginAPIInstance from "@/aut";
import DefaultInstance from "@/aut";
import { Param } from "@nestjs/common";
import { Axios } from "axios";

export const AuthAPI = {

   @param {string} login
   @param {string} password
   @returns {Promise<import("axios").AxiosResponse<any>>}
 
 
  login(login, password) {
    const url = '/login';
    const data = {login, password};
    return LoginAPIInstance.post(url, data);
  },

   @returns {Promise<import("axios").AxiosResponse<any>>}

  logout () {
    const url = '/logout';
    return DefaultInstance.post(url);
  }
}
**/