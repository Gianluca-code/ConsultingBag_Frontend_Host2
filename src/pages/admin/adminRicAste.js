import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import './RicercheBackOffice.css'
import {MdSell} from "react-icons/md";
import {BsCalendar, BsGeoAltFill} from "react-icons/bs";
import {AiFillBank} from "react-icons/ai";
import {RiRedPacketFill} from "react-icons/ri";
import Asta from "../../Asta";
import {useEffect, useState} from "react";
import axios from "axios";

import AdminAstaComponent from "../../components/admin/AdminAstaComponent";


//import {prove} from "../../prove";


function AdminRicercaAste () {
    //Chiamata per prendere tutti i dati
    /*const [account, setAccount] = useState([]);
    useEffect(() => { axios({ method: "get", url: "https://jsonplaceholder.typicode.com/users?id=1",})
        .then(function (res) { setAccount(res.data);});
    });*/

    //variabili che salvano i filtri
    const [asta, setAsta] = useState('');
    const [periodo, setPeriodo] = useState('');
    const [professionale, setProfessionale] = useState('');
    const [localita, setLocalita] = useState('');
    const [check, setCheck] = useState(false);


    //const [account, setAccount] = useState(prove);

    console.log(check)
    const [allData,setAllData] = useState([{aste:"1", periodo:"blblblbl", professionale:"pistolino", localita:"Milaooo"}]/* prove */);
    const [filteredData,setFilteredData] = useState(allData);
    const handleSearch = (event) =>{
        if(check === false){
            setFilteredData(allData.filter(item => item.aste.toString().indexOf(asta) > -1)
                .filter(item => item.periodo.toString().toLowerCase().indexOf(periodo.toLowerCase()) > -1)
                .filter(item => item.professionale.toString().toLowerCase().indexOf(professionale.toLowerCase()) > -1)
                .filter(item => item.localita.toString().toLowerCase().indexOf(localita.toLowerCase()) > -1)

            )
        }
        else {
            setFilteredData(allData.filter(item => item.aste.toString().indexOf(asta) > -1)
                .filter(item => item.periodo.toString().toLowerCase().indexOf(periodo.toLowerCase()) > -1)
                .filter(item => item.check.toString().indexOf(check.toString()) > -1)
                .filter(item => item.professionale.toString().toLowerCase().indexOf(professionale.toLowerCase()) > -1)
                .filter(item => item.localita.toString().toLowerCase().indexOf(localita.toLowerCase()) > -1)
            )
        }
    }



    return (
            <Container className="main">
                    <p>Ricerca Aste</p>
                    <Row className="mb-4 bordo">
                        <Row className="mb-2 mt-3">
                            <Col><MdSell /></Col>
                            <Col className="fix_margin">
                                <input
                                    id="asta"
                                    onChange={(e) => setAsta(e.target.value)}
                                    type="search"
                                    placeholder="Numero asta"
                                    style={{borderRadius:'8px',border:'1px solid #CED3DC', height:'5vh'}}/></Col>

                            <Col><BsCalendar /></Col>
                            <Col className="fix_margin">
                                <select
                                id="periodo"
                                className="form-select"
                                aria-label="Default select example"
                                onChange={(e) => setPeriodo(e.target.value)}
                            >
                                <option selected>Periodo Attività</option>
                                <option value="One">One</option>
                                <option value="Two">Two</option>
                                <option value="Three">Three</option>
                            </select></Col>
                            <Col><RiRedPacketFill /></Col>
                            <Col className="fix_margin">
                                <select id="professionale"
                                        className="form-select"
                                        aria-label="Default select example"
                                        onChange={(e) => setProfessionale(e.target.value)}
                                >
                                <option selected>Area professionale</option>
                                <option value="One">One</option>
                                <option value="Two">Two</option>
                                <option value="Three">Three</option>
                            </select></Col>
                        </Row>

                        <Row className="m-2">
                            <Col style={{marginLeft:'-2%' }}><BsGeoAltFill /></Col>
                            <Col className="fix_margin" style={{marginLeft:'-28.5%'}} >
                                <input
                                    type="search"
                                    onChange={(e) => setLocalita(e.target.value)}
                                    id="localita"
                                    placeholder="Località"
                                    style={{borderRadius:'8px',border:'1px solid #CED3DC', height:'5vh', width:'100%'}}/></Col>


                            <Col className="fix_margin2 m-2">
                                <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexCheckDefault"
                                onChange={(e) => setCheck(e.target.checked)}
                                />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    <p style={{marginLeft:'4%', fontSize:'0.7rem',width:'100%'}}>solo aste aperte</p>
                                </label></Col>
                            <Col style={{marginRight:'-2%'}}><button  className="bottone1" style={{marginRight:'17%'}}>Più filtri</button>
                                <button onClick={handleSearch} className="bottone2" >Cerca</button></Col>

                        </Row>


                    </Row>
                {filteredData.map((field) => (
                    <AdminAstaComponent uno={field.aste} due={field.periodo} tre={field.professionale} quattro="bene" cinque="e" sei="tu" prezzo='100'/>
                ))}


            </Container>
        );
}

export default AdminRicercaAste;