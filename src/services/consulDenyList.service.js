import axios from "axios";
import authHeader from "./auth-header";

const getDenyListByConsulente = (username) => {
    return axios.get("http://Consultingbagbackend-env.eba-ehqx28hk.us-east-1.elasticbeanstalk.com:5000/api/v1/denyListConsulenti/getByConsulente/" + username, {headers: authHeader()});
};

const createDenyListItem=(username,denyItem)=>{
    return axios.post("http://Consultingbagbackend-env.eba-ehqx28hk.us-east-1.elasticbeanstalk.com:5000/api/v1/denyListConsulenti/createDenyItemConsulente", {
        piva:denyItem.piva,
        motivazione:denyItem.motivazione,
        consulente:username
    }, {headers: authHeader()});
}


const deleteDenyListItem=(id)=>{
    return axios.delete("http://Consultingbagbackend-env.eba-ehqx28hk.us-east-1.elasticbeanstalk.com:5000/api/v1/denyListConsulenti/deleteDenyItemConsulente/"+id, {headers: authHeader()});
}



export default{
    getDenyListByConsulente,
    createDenyListItem,
    deleteDenyListItem
}
