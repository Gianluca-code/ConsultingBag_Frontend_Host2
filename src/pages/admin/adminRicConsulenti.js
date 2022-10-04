import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import './RicercheBackOffice.css'
import {MdSell} from "react-icons/md";
import {BsCalendar, BsGeoAltFill} from "react-icons/bs";
import {AiFillBank} from "react-icons/ai";
import {RiRedPacketFill} from "react-icons/ri";
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
//import {prove} from "../../prove";


function AnteprimaConsulente(props){
    return(
        <Row className="shadow bordo">
            <Col className="col-10">
                <Row >
                <Col className="mt-2">
                        <MdSell />
                        <p className="fix">{props.consulente.username}</p>
                    </Col>
                    <Col className="mt-2">
                        <MdSell />
                        <p className="fix">{props.consulente.nome}</p>
                    </Col>
                    <Col className="mt-2">
                        <MdSell />
                        <p className="fix">{props.consulente.cognome}</p>
                    </Col>
                    <Col className="mt-2">
                        <MdSell />
                        <p className="fix">{props.consulente.tariffaGiornalieraRichiesta}</p>
                    </Col>
                </Row>
                <hr />
                <Row >
                    <Col className="mt-2">
                        <MdSell />
                        <p className="fix">{props.consulente.cf}</p>
                    </Col>
                    <Col className="mt-2">
                        <MdSell />
                        <p className="fix">{props.consulente.areaProfessionale}</p>
                    </Col>
                    <Col className="mt-2">
                        <MdSell />
                        <p className="fix">{props.consulente.email}</p>
                    </Col>
                    <Col className="mt-2">
                        <MdSell />
                        <p className="fix">{props.consulente.telefono}</p>
                    </Col>
                </Row>
            </Col>
            <Col className="col-2 text-center mt-5"><Link to={{pathname:"/profiloConsulente", state:props.consulente.username}}><button className="bottone2">Visualizza</button></Link></Col>
        </Row>

    );
}



function AdminRicercaConsulenti () {
    //Chiamata per prendere tutti i dati
    /*const [account, setAccount] = useState([]);
    useEffect(() => { axios({ method: "get", url: "https://jsonplaceholder.typicode.com/users?id=1",})
        .then(function (res) { setAccount(res.data);});
    });*/

    //variabili che salvano i filtri
    const [nome, setNome] = useState('');
    const [cognome, setCognome] = useState('');
    const [username, setUsername] = useState('');
    const [telefono, setTelefono] = useState('');
    const [areaProfessionale, setAreaProfessionale] = useState('');
    const [tariffaGiornalieraRichiesta, setTariffaGiornalieraRichiesta] = useState('');

    const [email, setEmail] = useState('');
    const [cf, setCf] = useState('');


    //const [account, setAccount] = useState(prove);

    
    const [allData,setAllData] = useState([
        {username:"aaa", 
         nome:"AAffd", 
         cognome:"MMSdfe", 
         telefono:"3321456789", 
         tariffaGiornalieraRichiesta:"", 
         areaProfessionale:"", 
         email:"asassa@dd.it", 
         cf:"SDFGDSASDF"}
    ]/* prove */);
    const [filteredData,setFilteredData] = useState(allData);
    const handleSearch = (event) =>{
    
        setFilteredData(allData.filter(item => item.nome.toString().toLowerCase().indexOf(nome.toLowerCase()) > -1)
            .filter(item => item.cognome.toString().toLowerCase().indexOf(cognome.toLowerCase()) > -1)
            .filter(item => item.cf.toString().toLowerCase().indexOf(cf.toLowerCase()) > -1)
            .filter(item => item.email.toString().toLowerCase().indexOf(email.toLowerCase()) > -1)
            .filter(item => item.tariffaGiornalieraRichiesta.toString().toLowerCase().indexOf(tariffaGiornalieraRichiesta.toLowerCase()) > -1)
            .filter(item => item.areaProfessionale.toString().toLowerCase().indexOf(areaProfessionale.toLowerCase()) > -1)
            .filter(item => item.username.toString().toLowerCase().indexOf(username.toLowerCase()) > -1)
            .filter(item => item.telefono.toString().toLowerCase().indexOf(telefono.toLowerCase()) > -1)
        )
        
    }



    return (
            <Container className="main">
                    <p>Ricerca Consulenti</p>
                    <Row className="mb-4 bordo">
                        <Row className="mb-2 mt-3">
                            <Col><MdSell /></Col>
                            <Col className="fix_margin">
                                <input
                                    id="username"
                                    onChange={(e) => setUsername(e.target.value)}
                                    type="search"
                                    placeholder="Username"
                                    style={{borderRadius:'8px',border:'1px solid #CED3DC', height:'5vh'}}/>
                            </Col>

                            <Col><MdSell /></Col>
                            <Col className="fix_margin">
                                <input
                                    id="nome"
                                    onChange={(e) => setNome(e.target.value)}
                                    type="search"
                                    placeholder="Nome Consulente"
                                    style={{borderRadius:'8px',border:'1px solid #CED3DC', height:'5vh'}}/>
                            </Col>
                            <Col><MdSell /></Col>
                            <Col className="fix_margin">
                                <input
                                    id="cognome"
                                    onChange={(e) => setCognome(e.target.value)}
                                    type="search"
                                    placeholder="Cognome Consulente"
                                    style={{borderRadius:'8px',border:'1px solid #CED3DC', height:'5vh'}}/>
                            </Col>
                            <Col><MdSell /></Col>
                            <Col className="fix_margin">
                                <input
                                    id="tariffaGiornalieraRichiesta"
                                    onChange={(e) => setTariffaGiornalieraRichiesta(e.target.value)}
                                    type="search"
                                    placeholder="Tariffa Giornaliera Richiesta"
                                    style={{borderRadius:'8px',border:'1px solid #CED3DC', height:'5vh'}}/>
                            </Col>
                        </Row>

                        <Row className="m-2">
                        <Col><MdSell /></Col>
                        <Col className="fix_margin">
                                <input
                                    id="areaProfessionale"
                                    onChange={(e) => setAreaProfessionale(e.target.value)}
                                    type="search"
                                    placeholder="Area Professionale"
                                    style={{borderRadius:'8px',border:'1px solid #CED3DC', height:'5vh'}}/>
                        </Col>

                        <Col><MdSell /></Col>
                        <Col className="fix_margin">
                                <input
                                    id="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="search"
                                    placeholder="Email"
                                    style={{borderRadius:'8px',border:'1px solid #CED3DC', height:'5vh'}}/>
                            </Col>

                            <Col><MdSell /></Col>
                        <Col className="fix_margin">
                                <input
                                    id="cf"
                                    onChange={(e) => setCf(e.target.value)}
                                    type="search"
                                    placeholder="Codice Fiscale"
                                    style={{borderRadius:'8px',border:'1px solid #CED3DC', height:'5vh'}}/>
                        </Col>

                        <Col><MdSell /></Col>
                        <Col className="fix_margin">
                                <input
                                    id="telefono"
                                    onChange={(e) => setTelefono(e.target.value)}
                                    type="search"
                                    placeholder="Telefono"
                                    style={{borderRadius:'8px',border:'1px solid #CED3DC', height:'5vh'}}/>
                            </Col>    

                        <Col>
                            <button onClick={handleSearch} className="bottone2" >Cerca</button>
                        </Col>

                        </Row>


                    </Row>
                {filteredData.map((field) => (
                    <AnteprimaConsulente consulente={field} />
                ))}


            </Container>
        );
}

export default AdminRicercaConsulenti;