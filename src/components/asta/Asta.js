import React, {Component, useState} from 'react';
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import {MdSell} from "react-icons/md";
import {BsCalendar, BsGeoAltFill} from "react-icons/bs";
import {AiFillBank} from "react-icons/ai";
import {RiRedPacketFill} from "react-icons/ri";
import '../../pages/ricercaAste/RicercaAste.css';


function Asta (props){

    return (
            <Row className="shadow bordo" style={{width: "95%", marginLeft: "1%", marginBottom: "2%"}}>
                <Row>
                    <Col className="mt-3">
                        <MdSell/>
                        <p className="fix">{props.data.id}</p>
                    </Col>
                    <Col className="mt-3">
                        <BsCalendar/>
                        <p className="fix">{props.data.dataInizioLavoro} / {props.data.dataFineLavoro}</p>
                    </Col>
                    <Col className="mt-3">
                        <BsGeoAltFill/>
                        <p className="fix">{props.data.luogo}</p>
                    </Col>
                    <Col>
                        <button className="botton1">{props.data.rilancio? ("€" + props.data.rilancio):("-")}</button>
                    </Col>
                </Row>
                <span style={{width:'70%', color:'#CED3DC',borderTop:'1px solid #CED3DC', marginLeft:'2%'}}></span>
                <Row >
                    <Col className="mt-3">
                        <AiFillBank/>
                        <p className="fix">{props.data.azienda}</p>
                    </Col>
                    <Col className="mt-3">
                        <RiRedPacketFill/>
                        <p className="fix">{props.data.ruoloRichiesto}</p>
                    </Col>
                    <Col className="mt-3">
                        <RiRedPacketFill/>
                        <p className="fix">{props.data.areaProfessionale}</p>
                    </Col>
                    <Col>
                        {props.data.aperta ? 
                            (<Link to={`/dettagliAsta/${props.data.id}`}><button className="botton2">Rilancia</button></Link>)
                            :
                            (<button className="botton2" disabled>Rilancia</button>)
                        }
                        
                    </Col>
                </Row>
            </Row>
        );
}

export default Asta;