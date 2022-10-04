import axios from "axios";
import authHeader from "./auth-header";

const getAzienda = (username) => {
    return axios.get("http://consultingbag-env.eba-kuhmc76g.us-east-1.elasticbeanstalk.com:5000/api/v1/aziende/" + username, {headers: authHeader()});
};

const getRagioneSociale = (username) => {
    return axios.get("http://consultingbag-env.eba-kuhmc76g.us-east-1.elasticbeanstalk.com:5000/api/v1/aziende/getRagSociale/" + username, {headers: authHeader()});
};


export default{
    getAzienda,
    getRagioneSociale
}
