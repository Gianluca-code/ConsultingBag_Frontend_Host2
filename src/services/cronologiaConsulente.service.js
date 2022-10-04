import axios from "axios";
import authHeader from "./auth-header";

const getAllHistory = (username) => {
    return axios.get("http://consultingbag-env.eba-kuhmc76g.us-east-1.elasticbeanstalk.com:5000/api/v1/cronologiaConsulente/getAllByConsulente/" + username, {headers: authHeader()});
};

const getLastTwoHistory = (username) =>{
    return axios.get("http://consultingbag-env.eba-kuhmc76g.us-east-1.elasticbeanstalk.com:5000/api/v1/cronologiaConsulente/getLastByCons/" + username, {headers: authHeader()});
};


const RisolviCodice = (evento) => {
    switch(evento){
        case 1: return "Creato profilo";
        case 2: return "Modificato profilo";
        case 3: return "Creata Nuova Offerta";
        case 4: return "Modificata Offerta con Id ";
        case 5: return "Eliminata Offerta con Id ";
        case 6: return "Rilanciata Asta numero ";
        case 7: return "Bloccata la PIVA ";
        case 8: return "Sbloccata la PIVA ";
        case 9: return "Inserita nuova Esperienza nel CV";
        case 10: return "Rimossa dal CV Esperienza con Id: ";
        default: return "Azione sconosciuta con questa informazione: ";
        
    }
}


export default{
    getAllHistory,
    getLastTwoHistory,
    RisolviCodice
}
