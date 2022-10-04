import React, {useEffect, useState} from "react";
import ProfiloConsulenteComponent from "../../components/profiloConsulenteComponent/ProfiloConsulenteComponent";
import PreviewCV from "../../components/previewCV/PreviewCV";
import { useNavigate} from "react-router-dom";

import {useSelector} from "react-redux";

import ConsulenteService from "../../services/consulente-service";
import UserService from "../../services/user.service";


function ProfiloConsulente() {

    const navigate = useNavigate();

    const {user: currentUser} = useSelector((state) => state.auth);

    const [userData, setUserData] = useState();
    const [consulenteData, setConsulenteData] = useState();


    const consulenteToShow= currentUser.username;

     useEffect(() => {

        UserService.getUserData(consulenteToShow)
            .then(function (res) { setUserData(res.data)})
            .catch(function () { setUserData(null)});

        ConsulenteService.getConsulenteData(consulenteToShow)
            .then(function (res) { setConsulenteData(res.data)})
            .catch(function () {
                setConsulenteData([]);
                navigate("*");//se quello che sto cercando di visualizzare non è un consulente devo redirezionare a PageNotFound
            });

    }, []); 


    return (
        <div>
            {userData && consulenteData &&(
            <>
            <ProfiloConsulenteComponent mioProfilo={true} userData={userData} consulenteData={consulenteData} />

            {<PreviewCV mioProfilo={true} userData={userData} consulenteData={consulenteData} />}
            </>
            )}
        </div>

    );
}
export default ProfiloConsulente;