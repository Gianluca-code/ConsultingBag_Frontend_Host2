import React, {useEffect, useState} from 'react';
import './CronologiaConsulente.css';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {Row, Col} from "react-bootstrap";
import cronologiaConsulenteService from '../../services/cronologiaConsulente.service';

function CronologiaConsulente(){

    const navigate = useNavigate();
    const {user: currentUser} = useSelector((state) => state.auth);

    const [storia, setStoria] = useState();



    useEffect(() => {
 
        cronologiaConsulenteService.getAllHistory(currentUser.username)
            .then(function (res) { setStoria(res.data)})
            .catch(function () {
                setStoria(null);
                navigate("/*");
        });
    }, []);


    if(storia){
        
        return (
            <div>
                {storia &&(
                <div className="sfondo">
                
                <div className="arrotondato">

                    <b>Cronologia Azioni e Modifiche:</b>

                    <br/>
                    <div className="arrotondato shadow sezione-interna-storia">
                        {storia.map((field) => (
                            <Row>{field.timestamp} - {cronologiaConsulenteService.RisolviCodice(field.evento)}  {field.info}</Row>
                        ))}

                        {(storia.length === 0)? (<Col className="text-center">Nessuna Azione presente</Col>):("")}

                    </div>
                </div>



                </div>
                )}
            </div>
        );
        
    }
    else{
        return(
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-primary"></div>
                <span className="sr-only">{" "}Loading...</span>
            </div>
        );
    }
}

export default CronologiaConsulente;
