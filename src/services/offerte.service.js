import axios from "axios";
import authHeader from "./auth-header";

//const API_URL = "http://consultingbag-env.eba-kuhmc76g.us-east-1.elasticbeanstalk.com:5000/api/test/";
const API_OFFERTE_URL = "http://Consultingbagbackend-env.eba-ehqx28hk.us-east-1.elasticbeanstalk.com:5000/api/v1/offers"

const getOffertaById = (idOfferta) => {
    return axios.get(API_OFFERTE_URL + "/getById/" + idOfferta, {headers: authHeader()});
};

const getOfferteByConsulente = (username) => {
    return axios.get(API_OFFERTE_URL + "/getByConsulente/" + username, {headers: authHeader()});
}

const createOfferta = (offerta) =>{
    return axios.post(API_OFFERTE_URL + "/create", {
            consulente: offerta.consulente,
            dataInizioDisponibilita: offerta.dataInizioDisponibilita,
            dataFineDisponibilita: offerta.dataFineDisponibilita,
            areaProfessionale: offerta.areaProfessionale,
            conoscenzeMesseADisposizione: offerta.conoscenzeMesseADisposizione,
            ruoloDesiderato: offerta.ruoloDesiderato,
            tariffaGiornalieraDesiderata: offerta.tariffaGiornalieraDesiderata,
            disponibilitaTempo: offerta.disponibilitaTempo,
            noteSullaDisponibilita: offerta.noteSullaDisponibilita,
            tariffaTrattabile: offerta.tariffaTrattabile
        }, {headers: authHeader()});
}

const updateOfferta = (idOfferta, offerta) =>{
    return axios.put(API_OFFERTE_URL + "/update/" + idOfferta, {
        dataInizioDisponibilita: offerta.dataInizioDisponibilita,
        dataFineDisponibilita: offerta.dataFineDisponibilita,
        areaProfessionale: offerta.areaProfessionale,
        conoscenzeMesseADisposizione: offerta.conoscenzeMesseADisposizione,
        ruoloDesiderato: offerta.ruoloDesiderato,
        tariffaGiornalieraDesiderata: offerta.tariffaGiornalieraDesiderata,
        disponibilitaTempo: offerta.disponibilitaTempo,
        noteSullaDisponibilita: offerta.noteSullaDisponibilita,
        tariffaTrattabile: offerta.tariffaTrattabile
    }, {headers: authHeader()} );
}

const deleteOfferta = (idOfferta) =>{
    return axios.delete(API_OFFERTE_URL + "/delete/" + idOfferta, {headers: authHeader()});
}


const getNumeroDiOfferte =(consulente) =>{
    return axios.get(API_OFFERTE_URL + "/getNumberOf/"+consulente, {headers: authHeader()});
}



export default{
    getOffertaById,
    getOfferteByConsulente,
    createOfferta,
    updateOfferta,
    deleteOfferta,
    getNumeroDiOfferte
}