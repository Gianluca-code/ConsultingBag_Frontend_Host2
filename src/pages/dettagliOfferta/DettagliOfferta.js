import React, {useEffect, useState} from 'react';
import './DettagliOfferta.css';
import {useNavigate, Link} from "react-router-dom";
import { useParams } from 'react-router';
import {useSelector} from "react-redux";
import {Row} from "react-bootstrap";

import offerteService from '../../services/offerte.service';




function DettagliOfferta(){

    const navigate = useNavigate();

    const {user: currentUser} = useSelector((state) => state.auth);

    const [offerta, setOfferta] = useState(null);

    const {idOfferta} = useParams();


    const handleElimina = () => {
        offerteService.deleteOfferta(idOfferta).then(()=>{
                                                            alert("eliminato");
                                                            navigate("/mieOfferte")});
        
    }
    useEffect(() => {});

    useEffect(() => {

        offerteService.getOffertaById(idOfferta)
            .then(function (res) { setOfferta(res.data)})
            .catch(function () {
                setOfferta(null);
                navigate("/*");
        }); 

    }, []);
    if(offerta){
        return (
            <div>
                {offerta &&(
                <div className="sfondo">
                
                <div className="arrotondato">

                    <b>Offerta numero {offerta.id}:</b><br/>

                    <br/>
                    <div className="shadow sezione-interna-dettagli-offerta">
                        
                        <Row>Data Inizio Disponibilità: {offerta.dataInizioDisponibilita}</Row><br />
                        <Row>Data Fine Disponibilità: {offerta.dataFineDisponibilita}</Row><br />
                        <Row>Area Professionale: {offerta.areaProfessionale}</Row><br />
                        <Row>Conoscenze Messe a Disposizione: {offerta.conoscenzeMesseADisposizione}</Row><br />
                        <Row>Ruolo Desiderato: {offerta.ruoloDesiderato}</Row><br />
                        <Row>Tariffa Giornaliera Desiderata: €{offerta.tariffaGiornalieraDesiderata}</Row><br />
                        <Row>Disponibilità Tempo: {offerta.disponibilitaTempo}</Row><br />
                        <Row>Note sulla Disponibilità: {offerta.noteSullaDisponibilita}</Row><br />
                        <Row>Tariffa Trattabile: {offerta.tariffaTrattabile ? "sì":"no"}</Row>
                        <br/>

                        {(currentUser.username === offerta.consulente) &&(
                            <>
                            <Link to={`/modificaOfferta/${offerta.id}`} state={{paginaPrecedente:`/dettagliOfferta/${offerta.id}`}}><button className='btn btn-primary'>Modifica offerta</button></Link>
                            {"  "}
                            <button className="btn btn-danger" onClick={handleElimina}>Elimina Offerta</button>
                            </>
                        )}


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

export default DettagliOfferta;
