import './FileUploader.css';
import React from 'react';
import {CardButton} from "./components/card/Card";
import {useState} from "react";
import axios from "axios";
import authHeader from "./services/auth-header";

import ConsulenteService from "./services/consulente-service";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const FileUploader = ({}) => {



    const [file, setFile] = useState(null);
    const [dw, setDw] = useState(null);
    const navigate = useNavigate();
    const { user: currentUser } = useSelector((state) => state.auth);
    const onInputChange = (e) =>{
        setFile(e.target.files[0]);
    }


    const onSubmit = (e) =>{
        e.preventDefault();

        const data = new FormData();
        data.append('file', file);
        data.append('username', currentUser.username);
        console.log(file.image);
        axios.post('http://Consultingbagbackend-env.eba-ehqx28hk.us-east-1.elasticbeanstalk.com:5000/api/v1/cvUpload/uploadFile', data,  {headers: authHeader()})
            .then((e) => {
                console.log('Success');
                navigate("/overview")
            })
            .catch((e)=>{
                console.error('Error', e)
            })
    }

    const downloadCv = () =>{

        axios.get('http://Consultingbagbackend-env.eba-ehqx28hk.us-east-1.elasticbeanstalk.com:5000/api/v1/cvDownload/downloadFile/' + currentUser.username,{headers: authHeader(), responseType:'blob'} )
            .then((res) =>{
                let blob = new Blob([res.data], {type:'application/pdf'});
                let file = URL.createObjectURL(blob);
                let a = document.createElement('a');
                a.download= currentUser.username + '_cv.pdf';
                a.href = file;
                a.click();
                setDw(res.data)
                console.log(dw);
            })
            .catch((e)=>{
                console.log('Errore')
            })
    }

    return(

        <div>


        <form method="post" action="#" id="#" className="form"
                onSubmit={onSubmit}>
            <div className="form-group files">
                <label> Upload your cv</label>
                <input type="file"
                       onChange={onInputChange}
                       className="form-control"
                       multiple=""/>
            </div>

            <div>
                <CardButton>Submit</CardButton>
            </div>

        </form>
            <CardButton onClick={downloadCv}>Download cv</CardButton>

        </div>
    )
}

export default FileUploader;