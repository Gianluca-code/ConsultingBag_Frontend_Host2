import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import './RicercheBackOffice.css'
import {MdSell} from "react-icons/md";
import {BsCalendar, BsGeoAltFill} from "react-icons/bs";
import {AiFillBank} from "react-icons/ai";
import {RiRedPacketFill} from "react-icons/ri";
import {useEffect, useState} from "react";
import axios from "axios";
//import {prove} from "../../prove";


function AnteprimaAzienda(props){
    return(
        <Row className="shadow bordo">
            <Col className="col-10">
                <Row >
                    <Col className="mt-2">
                        <MdSell />
                        <p className="fix">{props.uno}</p>
                    </Col>
                    <Col className="mt-2">
                        <AiFillBank />
                        <p className="fix">{props.due}</p>
                    </Col>
                    <Col className="mt-2">
                        <BsGeoAltFill/>
                        <p className="fix">{props.tre}</p>
                    </Col>
                </Row>
                <hr />
                <Row >
                    <Col className="">
                        <RiRedPacketFill />
                        <p className="fix">{props.quattro}</p>
                    </Col>
                </Row>
            </Col>
            <Col className="col-2 text-center mt-5"><button className="bottone2">Visualizza</button></Col>
        </Row>

    );
}



function AdminRicercaAziende () {
    //Chiamata per prendere tutti i dati
    /*const [account, setAccount] = useState([]);
    useEffect(() => { axios({ method: "get", url: "https://jsonplaceholder.typicode.com/users?id=1",})
        .then(function (res) { setAccount(res.data);});
    });*/

    //variabili che salvano i filtri
    const [nomeAzienda, setNomeAzienda] = useState('');
    const [piva, setPiva] = useState('');
    const [email, setEmail] = useState('');
    const [localita, setLocalita] = useState('');


    //const [account, setAccount] = useState(prove);

    
    const [allData,setAllData] = useState([
        {nomeAzienda:"Azienda Grossa spa", piva:"1234567", email:"asassa@dd.it", localita:"Milano"},
        {nomeAzienda:"aziendina piccola", piva:"111111", email:"ccc@ss.difod", localita:"Salerno"}
    ]/* prove */);
    const [filteredData,setFilteredData] = useState(allData);
    const handleSearch = (event) =>{
    
        setFilteredData(allData.filter(item => item.nomeAzienda.toString().toLowerCase().indexOf(nomeAzienda.toLowerCase()) > -1)
            .filter(item => item.piva.toString().toLowerCase().indexOf(piva.toLowerCase()) > -1)
            .filter(item => item.email.toString().toLowerCase().indexOf(email.toLowerCase()) > -1)
            .filter(item => item.localita.toString().toLowerCase().indexOf(localita.toLowerCase()) > -1)
        )
        
    }



    return (
            <Container className="main">
                    <p>Ricerca Aziende</p>
                    <Row className="mb-4 bordo">
                        <Row className="mb-2 mt-3">
                            <Col><MdSell /></Col>
                            <Col className="fix_margin">
                                <input
                                    id="piva"
                                    onChange={(e) => setPiva(e.target.value)}
                                    type="search"
                                    placeholder="P.IVA"
                                    style={{borderRadius:'8px',border:'1px solid #CED3DC', height:'5vh'}}/>
                            </Col>

                            <Col><AiFillBank /></Col>
                            <Col className="fix_margin">
                            <input
                                    id="nomeAzienda"
                                    onChange={(e) => setNomeAzienda(e.target.value)}
                                    type="search"
                                    placeholder="Nome Azienda"
                                    style={{borderRadius:'8px',border:'1px solid #CED3DC', height:'5vh'}}/>
                            </Col>
                            <Col><RiRedPacketFill /></Col>
                            <Col className="fix_margin">
                            <input
                                    id="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="search"
                                    placeholder="Email"
                                    style={{borderRadius:'8px',border:'1px solid #CED3DC', height:'5vh'}}/>
                            </Col>
                        </Row>

                        <Row className="m-2">
                            <Col style={{marginLeft:'-2%' }}><BsGeoAltFill /></Col>
                            <Col className="fix_margin" style={{marginLeft:'-45%'}} >
                                <input
                                    type="search"
                                    onChange={(e) => setLocalita(e.target.value)}
                                    id="localita"
                                    placeholder="Località"
                                    style={{borderRadius:'8px',border:'1px solid #CED3DC', height:'5vh', width:'100%'}}/>
                            </Col>
                            
                            <Col>
                                <button onClick={handleSearch} className="bottone2" >Cerca</button>
                            </Col>

                        </Row>


                    </Row>
                {filteredData.map((field) => (
                    <AnteprimaAzienda uno={field.piva} due={field.nomeAzienda} tre={field.localita} quattro={field.email} />
                ))}


            </Container>
        );
}

export default AdminRicercaAziende;