import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://Consultingbagbackend-env.eba-ehqx28hk.us-east-1.elasticbeanstalk.com:5000/api/test/";
const API_USERS_URL = "http://Consultingbagbackend-env.eba-ehqx28hk.us-east-1.elasticbeanstalk.com:5000/api/v1/users"
const getPublicContent = () => {
  return axios.get(API_URL + "all");
};


const getUserData = (username) => {
  return axios.get(API_USERS_URL + "/" + username, {headers: authHeader()});
};

const updateUser=( username, email, telefono)=>{
  return axios.put(API_USERS_URL + "/editUser", {
    username: username,
    email: email,
    telefono: telefono,
  }, {headers: authHeader()});
}


const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};
const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};
const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};
export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  getUserData,
  updateUser
};