import axios from "axios";
import authHeader from "./auth-header";
import {useSelector} from "react-redux";

const { user: currentUser } = useSelector((state) => state.auth);

const downloadCv=()=>{
    axios.get('http://consultingbag-env.eba-kuhmc76g.us-east-1.elasticbeanstalk.com:5000/api/v1/cvDownload/downloadFile/' + currentUser.username,{headers: authHeader(), responseType:'blob'} )
        .then((res) =>{
            let blob = new Blob([res.data], {type:'application/pdf'});
            let file = URL.createObjectURL(blob);
            let a = document.createElement('a');
            a.download='cv.pdf';
            a.href = file;
            a.click();
        })
        .catch((e)=>{
            console.log('Errore')
        })
}








export default{
    downloadCv
}