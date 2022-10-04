import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {MdSell} from "react-icons/md";
import {BsCalendar, BsGeoAltFill} from "react-icons/bs";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

import {useEffect} from "react";
import ConsulenteService from "../../services/consulente-service";
import proposteService from '../../services/proposte.service';
import Proposte from "../../components/proposte/proposte";

function RicercaProposte () {


    //variabili che salvano i filtri
    const [proposta, setProposta] = useState('');
    const [areaProfessionale, setAreaProfessionale] = useState('');
    const [ruoloRichiesto, setRuoloRichiesto] = useState('');
    const [dataInizioLavoro, setDataInizioLavoro] = useState('');
    const [luogo, setLuogo] = useState('');


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

        proposteService.getAllProposteValide()
            .then(function (res) { setAllData(res.data);
                setReady(true);})
            .catch(function () {
                setAllData([]);

            });

    }, []);




    const [filteredData, setFilteredData] = useState(allData);

    const handleSearch = () =>{
            setFilteredData(allData.filter(item => item.id.toString().indexOf(proposta) > -1)
                .filter(item => item.ruoloRichiesto.toString().toLowerCase().indexOf(ruoloRichiesto.toLowerCase()) > -1)
                .filter(item => item.areaProfessionale.toString().toLowerCase().indexOf(areaProfessionale.toLowerCase()) > -1)
                .filter(item => item.dataInizioLavoro.toString().toLowerCase().indexOf(dataInizioLavoro.toLowerCase()) > -1)
                .filter(item => item.luogo.toString().toLowerCase().indexOf(luogo.toLowerCase()) > -1)
            )
        }



    return (
        <Container className="main">

                    <p style={{margin: "1.0rem 0.5rem 0"}}>Ricerca Proposte</p>

                    <Row className="mb-4 bordo ">
                        <Row className="mb-2 mt-3">
                            <Col><MdSell/></Col>
                            <Col className="fix_margin">
                                <input
                                    id="proposta"
                                    onChange={(e) => setProposta(e.target.value)}
                                    type="search"
                                    placeholder="Numero proposta"
                                    style={{borderRadius: '8px', border: '1px solid #CED3DC', height: '5vh'}}/></Col>
                            <Col><MdSell/></Col>
                            <Col className="fix_margin">
                                <input
                                    id="ruoloRichiesto"
                                    onChange={(e) => setRuoloRichiesto(e.target.value)}
                                    type="search"
                                    placeholder="ruolo richiesto"
                                    style={{borderRadius: '8px', border: '1px solid #CED3DC', height: '5vh'}}/></Col>

                            <Col><MdSell/></Col>
                            <Col className="fix_margin">
                                <select id="areaProfessionale"
                                        className="form-select"
                                        aria-label="Default select example"
                                        onChange={(e) => setAreaProfessionale(e.target.value)}
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
                                    onChange={(e) => setLuogo(e.target.value)}
                                    id="luogo"
                                    placeholder="Luogo"
                                    style={{
                                        borderRadius: '8px',
                                        border: '1px solid #CED3DC',
                                        height: '5vh',
                                        width: '100%'
                                    }}/></Col>
                            <Col><BsCalendar /></Col>
                            <Col className="fix_margin">
                                <input
                                    id="dataInizioLavoro"
                                    type="date"
                                    placeholder="Inizio lavoro"
                                    className="form-select"
                                    aria-label="Default select example"
                                    onChange={(e) => setDataInizioLavoro(e.target.value)}
                                >
                                </input></Col>
                            <Col style={{marginRight: '-2%'}}>
                                <button className="bottone1" style={{marginRight: '17%'}}>Più filtri</button>
                                <button onClick={handleSearch} className="bottone2">Cerca</button>
                            </Col>

                        </Row>


                    </Row>
                    <div style={{overflowY: "scroll", overflowX: "hidden", width: "100%", height: "40.5vh"}}>
                        {filteredData.map((field) => (
                            <Proposte data={field}/>
                        ))}
                    </div>

        </Container>
    );
}

export default RicercaProposte;