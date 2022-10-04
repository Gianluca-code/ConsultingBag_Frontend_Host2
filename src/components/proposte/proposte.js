import React, {Component, useState} from 'react';
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import {MdSell} from "react-icons/md";
import {BsCalendar, BsGeoAltFill} from "react-icons/bs";
import {AiFillBank} from "react-icons/ai";
import {RiRedPacketFill} from "react-icons/ri";
import '../../pages/ricercaAste/RicercaAste.css';


function Proposte (props){

    return (
        <Row className="shadow bordo" style={{width: "95%", marginLeft: "1%", marginBottom: "2%"}}>
            <Row style={{ height:"8vh"}}>
                <Col className="mt-3">
                    <MdSell/>
                    <p className="fix">{props.data.id}</p>
                </Col>
                <Col className="mt-3">
                    <MdSell/>
                    <p className="fix">{props.data.ruoloRichiesto}</p>
                </Col>
                <Col className="mt-3">
                    <MdSell/>
                    <p className="fix">{props.data.areaProfessionale}</p>
                </Col>
                <Col className="mt-lg-3">
                    <Link to={`/dettagliProposta/${props.data.id}`}>
                        <button className="bottone2">Dettagli</button>
                    </Link>
                </Col>


            </Row>
            <span style={{width:'70%', color:'#CED3DC',borderTop:'1px solid #CED3DC', marginLeft:'2%'}}></span>
            <Row style={{ height:"10%"}}>
                <Col className="mt-3">
                    <BsGeoAltFill/>
                    <p className="fix">{props.data.luogo}</p>
                </Col>
                <Col className="mt-3" style={{marginLeft:"-50%"}}>
                    <BsCalendar/>
                    <p className="fix">{props.data.dataInizioLavoro} </p>
                </Col>


            </Row>
        </Row>
    );
}

export default Proposte;