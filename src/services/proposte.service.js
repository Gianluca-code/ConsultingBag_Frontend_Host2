import axios from "axios";
import authHeader from "./auth-header";


const API_URL = "http://Consultingbagbackend-env.eba-ehqx28hk.us-east-1.elasticbeanstalk.com:5000/api/v1/proposte"


const getAllProposteValide = () =>{
    return axios.get(API_URL + "/getAllValide", {headers: authHeader()});
}

const getPropostaById = (idProposta) => {
    return axios.get(API_URL + "/getById/" + idProposta, {headers: authHeader()});
};

export default{
    getAllProposteValide,
    getPropostaById
}