import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://consultingbag-env.eba-kuhmc76g.us-east-1.elasticbeanstalk.com:5000/api/v1/cvConsulenti"

const getCvById = (username) => {
    return axios.get(API_URL + "/find/" + username, {headers: authHeader()});
};

const createCv = (username, cv) =>{
    return axios.post(API_URL + "/add/" + username, {
        titoloStudio: cv.titoloStudio,
        materiaTitolo: cv.materiaTitolo,
        dataConseguimentoTitolo: cv.dataConseguimentoTitolo,
        lingue: cv.lingue,
        conoscenze: cv.conoscenze
    }, {headers: authHeader()});
}

const updateCv = (username, cv) =>{
    return axios.put(API_URL + "/editCv/" + username, {
        titoloStudio: cv.titoloStudio,
        materiaTitolo: cv.materiaTitolo,
        dataConseguimentoTitolo: cv.dataConseguimentoTitolo,
        lingue: cv.lingue,
        conoscenze: cv.conoscenze
    }, {headers: authHeader()} );
}


export default{
    updateCv,
    createCv,
    getCvById
}