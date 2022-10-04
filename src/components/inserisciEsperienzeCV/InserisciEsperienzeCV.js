import React, {useEffect, useState} from 'react';
import {Form, Formik} from "formik";
import {useNavigate, Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {Col, Row} from "react-bootstrap";
import "./InserisciEsperienzeCV.css";

import CustomInput from "../../components/customFormElements/CustomInput";
import CustomSelect from "../../components/customFormElements/CustomSelect";


import esperienzeService from "../../services/esperienze.service";
import { esperienzeSchema } from '../schemas/esperienzeSchema';

import ConsulenteService from "../../services/consulente-service";
import {CardButton} from "../card/Card";



function RigaEsperienza(props){

    
    return(
        <tr style={{fontWeight:"500"}}>
            <td>{props.riga.nomeAzienda}</td>
            <td>{props.riga.dataInizio}</td>
            <td>{props.riga.dataFine}</td>
            <td>{props.riga.ruoloSvolto}</td>
            <td>{props.riga.descrizioneAttivita}</td>
            <td><Link to={`/deleteEsperienza/${props.riga.id}`}><button className="btn btn-danger">Elimina esperienza</button></Link></td>
        </tr>
    );
}



function InserisciEsperienzaCV(){

    const navigate = useNavigate();

    const {user: currentUser} = useSelector((state) => state.auth);

    const [consulenteData, setConsulenteData] = useState();
    const [esperienzeData, setEsperienzeData] = useState([]);

    
    const creaEsperienza = (values) => {

        esperienzeService.createEsperienzeItem(currentUser.username, values)
            .then(()=>{
                esperienzeService.getEsperienzeByConsulente(currentUser.username)
                .then(function (res) { setEsperienzeData(res.data)})
                .catch(function () {
                    setEsperienzeData([]);
                    navigate("/*");
                }); })
            .catch((e)=>{alert(e);});

    };



    useEffect(() => {

        ConsulenteService.getConsulenteData(currentUser.username)
            .then(function (res) { setConsulenteData(res.data)})
            .catch(function () {
                setConsulenteData([]);
                navigate("/*");//se quello che sto cercando di visualizzare non è un consulente devo redirezionare a PageNotFound
            });

        esperienzeService.getEsperienzeByConsulente(currentUser.username)
            .then(function (res) { setEsperienzeData(res.data)})
            .catch(function () {
                setEsperienzeData([]);
                navigate("/*");
            }); 
        

    }, []);
 
    return (
        <div>

            <div className="arrotondato_esperienze shadow sezione-interna_esperienze">
                <Row>
                    <Col>
                        <p>Inserisci le tue esperienze</p>
                    </Col>
                    <Col style={{textAlign:"right"}}>
                        <Link to="/overview">
                            <CardButton style={{display:"revert" , margin:"0"}}>Indietro</CardButton>
                        </Link>
                    </Col>
                </Row>

                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Nome Azienda</th>
                        <th scope="col">Data Inizio</th>
                        <th scope="col">Data Fine</th>
                        <th scope="col">Ruolo Svolto</th>
                        <th scope="col">Descrizione Attività Svolta</th>
                        <th scope="col">Azione</th>
                        </tr>
                    </thead>
                    <tbody>

                    {esperienzeData.map((field) => (
                        <RigaEsperienza riga={field} />
                    ))}
                    </tbody>
                </table>
            
                <Formik initialValues={{nomeAzienda:"", dataInizio:"",  dataFine:"",  ruolo:"",  descrizioneAttivita:"", ruoloSvolto:""}} 
                validationSchema={esperienzeSchema.pick(['nomeAzienda', 'dataInizio', 'dataFine', 'descrizioneAttivita' ])}

                onSubmit={creaEsperienza}
                >
                    <Form style={{width:"100%", maxWidth:"100%", border:"0px", marginTop:"0", padding:"2%", fontSize:"0.8rem"}}>
                        <Row>
                            <Col><CustomInput name="nomeAzienda" type="text" placeholder="Nome Azienda Committente"/></Col>
                            <Col><CustomInput name="dataInizio" type="date" placeholder="Data Inizio Esperienza"/></Col>
                            <Col><CustomInput name="dataFine" type="date" placeholder="Data Fine Esperienza"/></Col>
                            
                            <Col><CustomSelect name="ruoloSvolto">
                                <option value="">Ruolo Svolto</option>
                                <option value="Analista Funzionale">Analista Funzionale</option>
                                <option value="Analista Tecnico">Analista Tecnico</option>
                                <option value="Project Manager">Project Manager</option>
                                <option value="Programmatore Junior">Programmatore Junior</option>
                                <option value="Programmatore Senior">Programmatore Senior</option>
                                <option value="Sistemista">Sistemista</option>
                                </CustomSelect></Col>

                            <Col><CustomInput name="descrizioneAttivita" type="text" placeholder="Descrizione Attività Svolta"/></Col>
                            <Col><button style={{marginTop:"4%"}} type="submit" className="btn btn-primary">Aggiungi Nuova</button></Col>
                        
                        </Row> 
                    </Form>
                </Formik>
            </div>
      </div>
    );
}

export default InserisciEsperienzaCV;