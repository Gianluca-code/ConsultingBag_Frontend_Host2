import React, {useEffect, useState} from "react";
import {Link, Navigate} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import './profiloConsulenteComponent.css';


import profileImage from "../../static_assets/logo.png";
import  { BreakpointProvider,Breakpoint } from 'react-socks';




function CorpoProfilo(props){
    return(
    <div>                
            <Row>
                <Col>
                    <div className="border rounded"
                         style={{height: "150px", width: "150px", padding: "0", overflow: "hidden"}}>
                        <img src={profileImage} alt="" style={{height: "150px", width: "150px"}}/>
                    </div>
                </Col>
                <Col className="mt-3">
                    <Row><h5>{props.consulente.nome} {props.consulente.cognome}</h5></Row>
                    <Row><Link style={{padding: "0"}} to=""><br/>Modifica Immagine Profilo</Link></Row>
                    <Row><Link style={{padding: "0"}} to="/editCv">Curriculum Vitae</Link></Row>
                    <Row><Link style={{padding: "0"}} to="/denyList">Lista partite IVA bloccate</Link></Row>
                </Col>
            </Row>
        <Row style={{marginLeft:"0.2vw", marginTop:"3vh"}}>
            <Col>
                <Row>Username: {props.account.username}</Row>
                <Row>Indirizzo: {props.consulente.indirizzo}</Row>
                <Row>Telefono: {props.account.telefono}</Row>
                <Row>Email: {props.account.email}</Row>
                <Row>CF: {props.consulente.cf}</Row>
            </Col>
            <Col>
                <Row>P.IVA: {props.consulente.piva}</Row>
                <Row>Area Professionale: {props.consulente.areaProfessionale}</Row>
                <Row>Disponibile a Trasferta: {props.consulente.disponibileTrasferte ? "sì" : "no"}</Row>
                <Row>Tariffa Richiesta: {props.consulente.tariffaGiornalieraRichiesta}</Row>
            </Col>
        </Row>


        {props.mioProfilo && (
            <Row style={{marginTop:"10vh"}}>
                <Col><Link style={{padding: "0"}} to="/abbonamenti">
                    <button type="button" className="btn btn-light">Abbonamento</button>
                </Link></Col>
                <Col><Link to="/modificaProfilo">
                    <button className="btn btn-primary">Modifica Profilo</button>
                </Link></Col>
            </Row>)

        }
    </div>
);
}






function ProfiloConsulenteComponent (props) {


    return (



        <BreakpointProvider>
            <Breakpoint customQuery="(min-width: 1000px)">

                <Container fluid className="profilo_component_grande">
                    <CorpoProfilo mioProfilo={props.mioProfilo} account={props.userData} consulente={props.consulenteData} />
                </Container>
            </Breakpoint>
            <Breakpoint customQuery="(max-width: 999px)">
                <Container fluid className="profilo_component_piccola">
                    <CorpoProfilo mioProfilo={props.mioProfilo} account={props.userData} consulente={props.consulenteData} />
                </Container>
            </Breakpoint>
        </BreakpointProvider>


    );
};




export default ProfiloConsulenteComponent;