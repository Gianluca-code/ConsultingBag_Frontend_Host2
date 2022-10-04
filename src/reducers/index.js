import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import consulente from "./consulente";
export default combineReducers({
  auth,
  message,
  consulente
});