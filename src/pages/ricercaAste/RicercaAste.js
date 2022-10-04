import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import './RicercaAste.css'
import {MdSell} from "react-icons/md";
import {BsCalendar, BsGeoAltFill} from "react-icons/bs";
import {RiRedPacketFill} from "react-icons/ri";
import Asta from "../../components/asta/Asta";
import {useEffect, useState} from "react";

import {useNavigate} from "react-router-dom";
import {useSelector} from 'react-redux';


//import {prove} from "./prove";
import asteService from '../../services/aste.service';
import ConsulenteService from '../../services/consulente-service';

function RicercaAste () {

    //variabili che salvano i filtri
    const [asta, setAsta] = useState('');
    const [periodo, setPeriodo] = useState('');
    const [professionale, setProfessionale] = useState('');
    const [localita, setLocalita] = useState('');
    const [check, setCheck] = useState('');


    const navigate = useNavigate();

    const [allData,setAllData] = useState([]);


    const {user: currentUser} = useSelector((state) => state.auth);

    const [consulenteData, setConsulenteData] = useState();

    const [ready, setReady] = useState(false);

    useEffect(() => {

        ConsulenteService.getConsulenteData(currentUser.username)
            .then(function (res) { setConsulenteData(res.data)})
            .catch(function () {
                setConsulenteData([]);
                navigate("/*");//se quello che sto cercando di visualizzare non è un consulente devo redirezionare a PageNotFound
            });

         asteService.getAllAste()
            .then(function (res) {  setAllData(res.data);
                                    setFilteredData(res.data); 
                                    setReady(true);})
            .catch(function () {
                setAllData([]);
                navigate("/*");
            }); 

    }, []);



    
    const [filteredData,setFilteredData] = useState(allData);
    const handleSearch = (event) =>{
        if(check === false){
            setFilteredData(allData.filter(item => item.id.toString().indexOf(asta) > -1)
                .filter(item => item.dataInizioLavoro.toString().toLowerCase().indexOf(periodo.toLowerCase()) > -1)
                .filter(item => item.areaProfessionale.toString().toLowerCase().indexOf(professionale.toLowerCase()) > -1)
                .filter(item => item.luogo.toString().toLowerCase().indexOf(localita.toLowerCase()) > -1)

            )
        }
        else {
            setFilteredData(allData.filter(item => item.id.toString().indexOf(asta) > -1)
                .filter(item => item.aperta.toString().indexOf(check.toString()) > -1)
                .filter(item => item.dataInizioLavoro.toString().toLowerCase().indexOf(periodo.toLowerCase()) > -1)
                .filter(item => item.areaProfessionale.toString().toLowerCase().indexOf(professionale.toLowerCase()) > -1)
                .filter(item => item.luogo.toString().toLowerCase().indexOf(localita.toLowerCase()) > -1)
            )
        }
    }



    return (
            <Container className="main">
                {(ready)? (<>
                <p style={{margin: "1.0rem 0.5rem 0"}}>Ricerca Aste</p>
                
                <Row className="mb-4 bordo ">
                    <Row className="mb-2 mt-3">
                        <Col><MdSell/></Col>
                        <Col className="fix_margin">
                            <input
                                id="asta"
                                onChange={(e) => setAsta(e.target.value)}
                                type="search"
                                placeholder="Numero asta"
                                style={{borderRadius: '8px', border: '1px solid #CED3DC', height: '5vh'}}/></Col>

                            <Col><BsCalendar /></Col>
                            <Col className="fix_margin">
                                <input
                                id="periodo"
                                type="date"
                                placeholder="Periodo Attività"
                                className="form-select"
                                aria-label="Default select example"
                                onChange={(e) => setPeriodo(e.target.value)}
                            >
                            </input></Col>
                            <Col><RiRedPacketFill /></Col>
                            <Col className="fix_margin">
                                <select id="professionale"
                                        className="form-select"
                                        aria-label="Default select example"
                                        onChange={(e) => setProfessionale(e.target.value)}
                                >
                                    <option selected value="">Area professionale</option>
                                    <option value="Consulenza IT">Consulenza IT</option>
                                    <option value="Consulenza Organizzativa">Consulenza Organizzativa</option>
                                    <option value="Consulenza Sistemistica">Consulenza Sistemistica</option>
                                                                   
                            </select></Col>
                        </Row>

                    <Row style={{margin: "0.5rem 0.5rem 0"}}>
                        <Col style={{marginLeft: '-2%'}}><BsGeoAltFill/></Col>
                        <Col className="fix_margin" style={{marginLeft: '-28.5%'}}>
                            <input
                                type="search"
                                onChange={(e) => setLocalita(e.target.value)}
                                id="localita"
                                placeholder="Località"
                                style={{
                                    borderRadius: '8px',
                                    border: '1px solid #CED3DC',
                                    height: '5vh',
                                    width: '100%'
                                }}/></Col>


                            <Col className="fix_margin2 m-2">
                                <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexCheckDefault"
                                onChange={(e) => setCheck(e.target.checked)}
                                />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    <p style={{marginLeft: '4%', fontSize: '0.7rem', width: '100%'}}>solo aste
                                        aperte</p>
                                </label></Col>
                        <Col style={{marginRight: '-2%'}}>
                            <button className="bottone1" style={{marginRight: '17%'}}>Più filtri</button>
                            <button onClick={handleSearch} className="bottone2">Cerca</button>
                        </Col>

                    </Row>


                </Row>
                <div style={{overflowY: "scroll", overflowX: "hidden", width: "100%", height: "40.5vh"}}>
                    {filteredData.map((field) => (
                        <Asta data={field}/>
                    ))}
                </div>
                </>)
                :
                (
                    <div className="d-flex justify-content-center">
                    <div className="spinner-border text-primary"></div>
                    <span className="sr-only">{" "}Loading...</span>
                    </div>
                )}
            </Container>
        );
}

export default RicercaAste;