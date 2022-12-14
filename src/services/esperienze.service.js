import axios from "axios";
import authHeader from "./auth-header";

const getEsperienzeByConsulente = (username) => {
    return axios.get("http://Consultingbagbackend-env.eba-ehqx28hk.us-east-1.elasticbeanstalk.com:5000/api/v1/esperienze/getByConsulente/" + username, {headers: authHeader()});
};

const createEsperienzeItem=(username,esperienzeItem)=>{
    return axios.post("http://Consultingbagbackend-env.eba-ehqx28hk.us-east-1.elasticbeanstalk.com:5000/api/v1/esperienze/createEsperienza", {
        nomeAzienda:esperienzeItem.nomeAzienda,
        dataInizio:esperienzeItem.dataInizio,
        dataFine:esperienzeItem.dataFine,
        ruoloSvolto:esperienzeItem.ruoloSvolto,
        descrizioneAttivita:esperienzeItem.descrizioneAttivita,
        consulente:username
    }, {headers: authHeader()});
}


const deleteEsperienzeItem=(id)=>{
    return axios.delete("http://Consultingbagbackend-env.eba-ehqx28hk.us-east-1.elasticbeanstalk.com:5000/api/v1/esperienze/deleteEsperienza/"+id, {headers: authHeader()});
}



export default{
    getEsperienzeByConsulente,
    createEsperienzeItem,
    deleteEsperienzeItem
}
