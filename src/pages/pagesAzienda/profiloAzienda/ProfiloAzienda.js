import React, {useEffect, useState} from "react";
import ProfiloAziendaComponent from "../../../components/aziendaComponents/profiloAziendaComponent/ProfiloAziendaComponent";
import { useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

//import AziendaService from "../../services/azienda-service";
import UserService from "../../services/user.service";


function ProfiloAzienda() {

    const navigate = useNavigate();

    const {user: currentUser} = useSelector((state) => state.auth);

    const [userData, setUserData] = useState();
    const [aziendaData, setAziendaData] = useState();


    const aziendaToShow= currentUser.username;

     useEffect(() => {

        UserService.getUserData(aziendaToShow)
            .then(function (res) { setUserData(res.data)})
            .catch(function () { setUserData(null)});

 /*        AziendaService.getAziendaData(aziendaToShow)
            .then(function (res) { setAziendaData(res.data)})
            .catch(function () {
                setAziendaData([]);
                navigate("*");//se quello che sto cercando di visualizzare non è un azienda devo redirezionare a PageNotFound
            });
 */
    }, []); 


    return (
        <div>
            {userData && aziendaData &&(
            <>
            <ProfiloAziendaComponent mioProfilo={true} userData={userData} aziendaData={aziendaData} />

            </>
            )}
        </div>

    );
};
export default ProfiloAzienda;