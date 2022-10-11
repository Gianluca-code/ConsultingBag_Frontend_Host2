import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://Consultingbagbackend-env.eba-ehqx28hk.us-east-1.elasticbeanstalk.com:5000/api/v1/rilanciAste"

const getBestRilancio = (idAsta) => {
    return axios.get(API_URL + "/getBestRilancio/" + idAsta, {headers: authHeader()});
};

const rilancia = (rilancioAsta) => {
    return axios.post(API_URL + "/rilancia", {
        asta: rilancioAsta.asta,
        consulente: rilancioAsta.consulente,
        valore: rilancioAsta.valore
    }, {headers: authHeader()})
}

/* const getNumeroDiAste =(azienda) =>{
    return axios.get(API_URL + "/getNumberOf/"+azienda, {headers: authHeader()});
}
 */


export default{
    getBestRilancio,
    rilancia
}