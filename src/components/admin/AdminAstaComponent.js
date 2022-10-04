import React, {Component, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import {MdSell} from "react-icons/md";
import {BsCalendar, BsGeoAltFill} from "react-icons/bs";
import {AiFillBank} from "react-icons/ai";
import {RiRedPacketFill} from "react-icons/ri";
import '../../pages/admin/RicercheBackOffice.css';

function AdminAstaComponent (props){
        return (
            <Row className="shadow bordo">
                <Row >
                    <Col className="mt-3">
                        <MdSell />
                        <p className="fix">{props.uno}</p>
                    </Col>
                    <Col className="mt-3">
                        <BsCalendar />
                        <p className="fix">{props.due}</p>
                    </Col>
                    <Col className="mt-3">
                        <BsGeoAltFill/>
                        <p className="fix">{props.tre}</p>
                    </Col>
                    <Col>
                        <button className="botton1">{props.prezzo}</button>
                    </Col>
                </Row>
                <span style={{width:'70%', color:'#CED3DC',borderTop:'1px solid #CED3DC', marginLeft:'2%'}}></span>
                <Row >
                    <Col className="mt-3">
                        <AiFillBank />
                        <p className="fix">{props.quattro}</p>
                    </Col>
                    <Col className="mt-3">
                        <RiRedPacketFill />
                        <p className="fix">{props.cinque}</p>
                    </Col>
                    <Col className="mt-3">
                        <RiRedPacketFill />
                        <p className="fix">{props.sei}</p>
                    </Col>
                    <Col><button className="botton2">Dettagli</button></Col>
                </Row>
            </Row>
        );
}

export default AdminAstaComponent;