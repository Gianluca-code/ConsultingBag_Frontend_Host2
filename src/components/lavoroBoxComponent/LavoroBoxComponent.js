import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import './lavoroBoxComponent.css';
import axios from "axios";
import { RiRedPacketFill } from "react-icons/ri";
import { AiFillBank } from "react-icons/ai";


import {BsCalendar, BsGeoAltFill} from "react-icons/bs";

function LavoroBoxComponent(props){

    return(
        <Row>
        <Container className="lavoro_box">
            <Row>
                <Col className="text-center col-2">
                    <img alt="" style={{height:"40px", width:"40px"}} />
                </Col>
                <Col className="col-6">
                    <Row>
                        <Col><AiFillBank />{props.azienda}</Col>
                    </Row>
                    <Row>
                        <Col><RiRedPacketFill />{props.ruolo}</Col>
                    </Row>
                    <Row>
                        <Col><RiRedPacketFill />{props.areaProfessionale}</Col>
                    </Row>
                </Col>
                <Col className="col-4">
                    <button className="lavoroBox_bottone">Dettagli</button>
                </Col>
            </Row>
        </Container>
        </Row>
    );

}
export default LavoroBoxComponent;