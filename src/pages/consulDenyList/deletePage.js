import React, {useEffect, useState} from 'react';
//import './ConsulDenyList.css';
import { useParams } from 'react-router';

import {useNavigate} from "react-router-dom";

import denyListService from "../../services/consulDenyList.service";

function DeleteDenyListItem(){

    const navigate = useNavigate();


    const {id} = useParams();

    useEffect(()=>{
        denyListService.deleteDenyListItem(id).then(()=>{navigate("/denyList");}).catch(()=>{navigate("/denyList");});
    });
    

}

export default DeleteDenyListItem;