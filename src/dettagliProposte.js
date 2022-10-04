import React, {useEffect, useState} from 'react';
import './dettagliProposte.css'
import {useNavigate, Link} from "react-router-dom";
import { useParams } from 'react-router';
import {useSelector} from "react-redux";
import {Row, Col} from "react-bootstrap";
import aziendaService from "./services/azienda.service";

import proposteService from './services/proposte.service';





function DettagliProposte(){

    const navigate = useNavigate();

    const {user: currentUser} = useSelector((state) => state.auth);

    const [proposta, setProposta] = useState(null);

    const [ragSocialeAzienda, setRagSocialeAzienda] = useState();



    const {idProposta} = useParams();


    useEffect(() => {

        proposteService.getPropostaById(idProposta)
            .then(function (res) { setProposta(res.data)})
            .catch(function () {
                setProposta(null);
                navigate("/*");
            });

    }, []);
    if(proposta){
        aziendaService.getRagioneSociale(proposta.azienda).then(function(res) {setRagSocialeAzienda(res.data)}).catch(()=>{setRagSocialeAzienda("Errore nel caricamento")});
       
        return (
            <div>
                {proposta &&(
                    <div className="sfondo">

                        <div className="arrotondato">

                            <b>Proposta numero {proposta.id}:</b><br/>

                            <div className="shadow sezione-interna-dettagli-offerta">

                                <Row><Col className="col-4">Azienda: </Col><Col className="valori-proposta">{proposta.azienda}</Col></Row>
                                <Row><Col className="col-4">Ragione Sociale: </Col><Col className="valori-proposta">{ragSocialeAzienda}</Col></Row><br />
                                <Row><Col className="col-4">Area Professionale:</Col> <Col className="valori-proposta">{proposta.areaProfessionale}</Col></Row>
                                <Row><Col className="col-4">Conoscenze Richieste: </Col><Col className="valori-proposta">{proposta.conoscenzeRichieste}</Col></Row>
                                <Row><Col className="col-4">Ruolo richiesto: </Col><Col className="valori-proposta">{proposta.RuoloRichiesto}</Col></Row>
                                <Row><Col className="col-4">Descrizione attività: </Col><Col className="valori-proposta">{proposta.descrizioneAttivita}</Col></Row>
                                <Row><Col className="col-4">Data inizio lavoro: </Col><Col className="valori-proposta">{proposta.dataInizioLavoro}</Col></Row>
                                <Row><Col className="col-4">Data fine lavoro: </Col><Col className="valori-proposta">{proposta.dataFineLavoro}</Col></Row>
                                <Row><Col className="col-4">Luogo: </Col><Col className="valori-proposta">{proposta.luogo}</Col></Row>
                                <Row><Col className="col-4">Disponibilità di tempo: </Col><Col className="valori-proposta">{proposta.disponibilitaTempo}</Col></Row>
                                <Row><Col className="col-4">Tariffa giornaliera proposta: </Col><Col className="valori-proposta">€ {proposta.tariffaGiornalieraProposta}</Col></Row>
                                <Row><Col className="col-4">Numero di posizioni cercate: </Col><Col className="valori-proposta">{proposta.numPosizioniCercate}</Col></Row>
                                <br/>

                                <Link to={`/ricProposte`}>
                                    <button className="bottone2">Indietro</button>
                                </Link>


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

export default DettagliProposte;
