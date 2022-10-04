import axios from "axios";
//const API_URL = "http://localhost:8080/api/auth/";
const API_URL = "http://consultingbag-env.eba-kuhmc76g.us-east-1.elasticbeanstalk.com:5000/api/auth";
const register = (username, email, password, telefono, role) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
    telefono,
    role
  });
};
const checkCredentials = (username, email, telefono) => {
  return axios.post(API_URL + "checkCredentials", {
    username,
    email,
    telefono,
  });
};
const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};
const logout = () => {
  localStorage.removeItem("user");
};
export default {
  register,
  login,
  logout,
  checkCredentials,
};