import {Form, Formik} from "formik";
import * as Yup from 'yup';
import React, {useEffect, useState} from 'react';
import './DettagliAsta.css';
import {useNavigate} from "react-router-dom";
import { useParams } from 'react-router';
import {useSelector} from "react-redux";
import {Row, Col} from "react-bootstrap";
import asteService from '../../services/aste.service';
import rilanciAsteService from '../../services/rilanciAste.service';
import aziendaService from "../../services/azienda.service";
import CustomInput from "../../components/customFormElements/CustomInput";




function DettagliAsta(){

    const navigate = useNavigate();

    const {user: currentUser} = useSelector((state) => state.auth);
    const {idAsta} = useParams();


    const Rilancia =(values)=>{
         rilanciAsteService.rilancia({asta:idAsta, consulente:currentUser.username, valore:values.valore})
                            .then((res)=>{alert(res.data)})
                            .catch((e)=>{alert(e);});
    }

    const [asta, setAsta] = useState();

    const [ragSocialeAzienda, setRagSocialeAzienda] = useState();

    const [rilancio, setRilancio] = useState();

    const validazione = Yup.object({valore:Yup.number()
                                            .typeError("Inserire un valore decimale (il simbolo decimale è il punto \".\")")
                                            .required("Obbligatorio")
                                            .min(1, "Il valore deve essere maggiore di zero")
                                            .max((rilancio? ((rilancio - 0.01)):(99999)),"Il valore deve essere minore del rilancio attuale!")
                                        
    });



    useEffect(() => {
 
        asteService.getAstaById(idAsta)
            .then(function (res) { setAsta(res.data)})
            .catch(function () {
                setAsta(null);
                navigate("/*");
        }); 

        rilanciAsteService.getBestRilancio(idAsta).then(function(res) {setRilancio(res.data);}).catch(()=>{});

    }, []);




    const getRilancio = async () => {
        rilanciAsteService.getBestRilancio(idAsta).then(function(res) {setRilancio(res.data);}).catch(()=>{});
    };
    
    useEffect(() => {//POLLING: ogni secondo viene fatta la chiamata al server per mostrare in tempo reale il valore dell'asta
        const timer = setInterval(getRilancio, 1000);
        return () => clearInterval(timer);
    }, []);/*tutto questo è sostenibile sia in termini di dati trasmessi che di occupazione del server:
                             60 query al minuto con circa 1KB di dati trasmessi alla volta! */ 



    if(asta){
        aziendaService.getRagioneSociale(asta.azienda).then(function(res) {setRagSocialeAzienda(res.data)}).catch(()=>{setRagSocialeAzienda("Errore nel caricamento")});
       
        return (
            <div>
                {asta &&(
                <div className="sfondo">
                
                <div className="arrotondato">

                    <b>Asta numero {idAsta}:</b>

                    <br/>
                    <div className="arrotondato shadow sezione-interna-asta">
                        
                        <Row><Col className="col-4">Data Apertura Asta: </Col><Col className="valori-asta"> {asta.dataAperturaAsta}</Col></Row>
                        <Row><Col className="col-4">Data Chiusura Asta: </Col><Col className="valori-asta"> {asta.dataChiusuraAsta}</Col></Row>
                        <Row><Col className="col-4">Area Professionale: </Col><Col className="valori-asta"> {asta.areaProfessionale}</Col></Row>
                        <Row><Col className="col-4">Conoscenze Richieste: </Col><Col className="valori-asta"> {asta.conoscenzeRichieste}</Col></Row>
                        <Row><Col className="col-4">Ruolo Richiesto: </Col><Col className="valori-asta"> {asta.ruoloRichiesto}</Col></Row>
                        <Row><Col className="col-4">Descrizione Attività: </Col><Col className="valori-asta"> {asta.descrizioneAttivita}</Col></Row>
                        <Row><Col className="col-4">Data Inizio Lavoro: </Col><Col className="valori-asta"> {asta.dataInizioLavoro}</Col></Row>
                        <Row><Col className="col-4">Data Fine Lavoro: </Col><Col className="valori-asta"> {asta.dataFineLavoro? (asta.dataFineLavoro):("-")}</Col></Row>
                        <Row><Col className="col-4">Luogo: </Col><Col className="valori-asta"> {asta.luogo}</Col></Row>
                        <Row><Col className="col-4">Disponibilità Tempo: </Col><Col className="valori-asta"> {asta.disponibilitaTempo}</Col></Row>
                        <Row><Col className="col-4">Numero di posizioni cercate: </Col><Col className="valori-asta"> {asta.numPosizioniCercate}</Col></Row>
                        <br/>
                        <Row><Col className="col-4">Azienda: </Col><Col className="valori-asta"> {asta.azienda}</Col></Row>
                        <Row><Col className="col-4">Ragione Sociale: </Col><Col className="valori-asta"> {ragSocialeAzienda}</Col></Row>
                        
                        <br/>
                        <Row><Col className="col-4">Rilancio Attuale (in tempo reale): </Col><Col className="valori-asta">{rilancio? (<> € {rilancio}</>):("Ancora nessun rilancio")}</Col></Row>
                        
                        Effettua un rilancio:
                        <Formik initialValues={{valore:""}} 
                            validationSchema={validazione}

                            onSubmit={Rilancia}
                        >
                            <Form style={{width:"100%", maxWidth:"100%", border:"0px", marginTop:"0", padding:"0", fontSize:"0.8rem"}}>
                                
                                <Row><Col className="col-4"><CustomInput type="text" name="valore" placeholder="000.00" /></Col><Col><button style={{marginTop:"1.3%"}} className="btn btn-primary" type="submit">Rilancia</button></Col></Row>
                            </Form>
                        </Formik>
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

export default DettagliAsta;
