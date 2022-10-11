import axios from "axios";
import authHeader from "./auth-header";

const getConsulenteData = (username) => {
    return axios.get("http://Consultingbagbackend-env.eba-ehqx28hk.us-east-1.elasticbeanstalk.com:5000/api/v1/consulenti/" + username, {headers: authHeader()});
};

const createConsulente=(username,  cognome, nome, indirizzo, alias, cap, localita, cf, iva, areaProf, tras, tariffa)=>{
    return axios.post("http://Consultingbagbackend-env.eba-ehqx28hk.us-east-1.elasticbeanstalk.com:5000/api/v1/consulenti/createConsulente/" + username, {
        alias: alias,
        cognome: cognome,
        nome: nome,
        indirizzo: indirizzo,
        cap: cap,
        localita: localita,
        cf: cf,
        piva: iva,
        areaProfessionale: areaProf,
        disponibileTrasferte: tras,
        tariffaGiornalieraRichiesta: tariffa
    }, {headers: authHeader()});
}
const updateConsulente = (username, cognome, nome, indirizzo, alias, cap, localita, cf, pIva, areaProf, tras, tariffa) => {
    return axios.put("http://Consultingbagbackend-env.eba-ehqx28hk.us-east-1.elasticbeanstalk.com:5000/api/v1/consulenti/editConsulente/", {
        username: username,
        alias: alias,
        cognome: cognome,
        nome: nome,
        indirizzo: indirizzo,
        cap: cap,
        localita: localita,
        cf: cf,
        piva: pIva,
        areaProfessionale: areaProf,
        disponibileTrasferte: tras,
        tariffaGiornalieraRichiesta: tariffa
    }, {headers: authHeader()});
}
export default{
    getConsulenteData,
    updateConsulente,
    createConsulente
}
