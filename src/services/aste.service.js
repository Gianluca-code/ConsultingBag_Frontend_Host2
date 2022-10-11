import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://Consultingbagbackend-env.eba-ehqx28hk.us-east-1.elasticbeanstalk.com:5000/api/v1/aste"

const getAstaById = (idAsta) => {
    return axios.get(API_URL + "/getById/" + idAsta, {headers: authHeader()});
};

const getAsteByAzienda = (username) => {
    return axios.get(API_URL + "/getByAzienda/" + username, {headers: authHeader()});
}

const getAllAste = () =>{
    return axios.get(API_URL + "/getAll", {headers: authHeader()});
}

const createAsta = (asta) =>{
    return axios.post(API_URL + "/create", {
            azienda: asta.azienda,
            dataAperturaAsta: asta.dataAperturaAsta,
            dataChiusuraAsta: asta.dataChiusuraAsta,
            areaProfessionale: asta.areaProfessionale,
            conoscenzeRichieste: asta.conoscenzeRichieste,
            ruoloRichiesto: asta.ruoloRichiesto,
            descrizioneAttivita: asta.descrizioneAttivita,
            documentoInfo: asta.documentoInfo,
            dataInizioLavoro: asta.dataInizioLavoro,
            dataFineLavoro: asta.dataFineLavoro,
            luogo: asta.luogo,
            disponibilitaTempo: asta.disponibilitaTempo,
            numPosizioniCercate: asta.numPosizioniCercate
        }, {headers: authHeader()});
}

const updateAsta = (idAsta, asta) =>{
    return axios.put(API_URL + "/update/" + idAsta, {
        dataAperturaAsta: asta.dataAperturaAsta,
        dataChiusuraAsta: asta.dataChiusuraAsta,
        areaProfessionale: asta.areaProfessionale,
        conoscenzeRichieste: asta.conoscenzeRichieste,
        ruoloRichiesto: asta.ruoloRichiesto,
        descrizioneAttivita: asta.descrizioneAttivita,
        documentoInfo: asta.documentoInfo,
        dataInizioLavoro: asta.dataInizioLavoro,
        dataFineLavoro: asta.dataFineLavoro,
        luogo: asta.luogo,
        disponibilitaTempo: asta.disponibilitaTempo,
        numPosizioniCercate: asta.numPosizioniCercate
    }, {headers: authHeader()} );
}

const deleteAsta = (idAsta) =>{
    return axios.delete(API_URL + "/delete/" + idAsta, {headers: authHeader()});
}


const getNumeroDiAste =(azienda) =>{
    return axios.get(API_URL + "/getNumberOf/"+azienda, {headers: authHeader()});
}



export default{
    getAstaById,
    getAsteByAzienda,
    getAllAste,
    createAsta,
    updateAsta,
    deleteAsta,
    getNumeroDiAste
}