import React, {useEffect, useState} from 'react';
//import './ConsulDenyList.css';
import { useParams } from 'react-router';

import {useNavigate} from "react-router-dom";

import esperienzeService from "../../services/esperienze.service";

function DeleteEsperienza(){

    const navigate = useNavigate();


    const {id} = useParams();

    useEffect(()=>{
        esperienzeService.deleteEsperienzeItem(id).then(()=>{navigate("/editCV");}).catch(()=>{navigate("/editCV");});
    });
    

}

export default DeleteEsperienza;