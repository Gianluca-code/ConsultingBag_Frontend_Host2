import {Form, Formik} from "formik";
import {schemaOfferta} from "../schemas/schemaOfferta";

import React, { useEffect } from 'react';
import '../../index.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import {useSelector} from "react-redux";

import {Col, Row} from "react-bootstrap";

import CustomInput from "../../components/customFormElements/CustomInput";
import CustomSelect from "../../components/customFormElements/CustomSelect";

import offerteService from '../../services/offerte.service';



function EditOffertaComponent(props){

    const {user: currentUser} = useSelector((state) => state.auth);

    const navigate=useNavigate();

    const [offerta, setOfferta] = useState({
        consulente:currentUser.username,
        dataInizioDisponibilita: "",
        dataFineDisponibilita: "",
        areaProfessionale: "",
        conoscenzeMesseADisposizione: "",
        ruoloDesiderato: "",
        tariffaGiornalieraDesiderata: "",
        disponibilitaTempo: "Part-Time",
        noteSullaDisponibilita: "",
        tariffaTrattabile: false
    });//inizializzo a valori di default

    const [ready, setReady] =useState(false);

    if(!props.nuova && props.idOfferta){

        useEffect(()=>{

            offerteService.getOffertaById(props.idOfferta)
            .then(function (res) { setOfferta(res.data);
                                    setReady(true);
                                })
            .catch(function () {
                setOfferta(null);
                navigate("/*");
            }); 

            

        }, []);

        if(offerta && offerta.consulente !== currentUser.username){
            setOfferta(null);
            navigate("/*");
        }
        
    }


    const handleCreaOSalva=(values)=>{
        
        if(!props.nuova && props.idOfferta){
            offerteService.updateOfferta(props.idOfferta, values).then(()=>{handleEsci();}).catch((e)=>{alert(e);});
            
        }
        else{
            offerteService.createOfferta(values).then(()=>{handleEsci();}).catch((e)=>{alert(e);});
        }
        
    }

    const handleEsci=()=>{
        if(props.paginaPrecedente){
            navigate(props.paginaPrecedente);
        }
        else{
            navigate("/overview");
        }
        
    }


    return(
        
        <div>
            {(ready || props.nuova) && (
            <Formik
                initialValues={{
                    consulente:offerta.consulente,
                    dataInizioDisponibilita: offerta.dataInizioDisponibilita,
                    dataFineDisponibilita: offerta.dataFineDisponibilita,
                    areaProfessionale: offerta.areaProfessionale,
                    conoscenzeMesseADisposizione: offerta.conoscenzeMesseADisposizione,
                    ruoloDesiderato: offerta.ruoloDesiderato,
                    tariffaGiornalieraDesiderata: offerta.tariffaGiornalieraDesiderata,
                    disponibilitaTempo: offerta.disponibilitaTempo,
                    noteSullaDisponibilita: offerta.noteSullaDisponibilita,
                    tariffaTrattabile: offerta.tariffaTrattabile
                }}

                validationSchema={schemaOfferta.pick(['dataInizioDisponibilita', 'dataFineDisponibilita', 'areaProfessionale', 'conoscenzeMesseADisposizione', 'ruoloDesiderato', 'tariffaGiornalieraDesiderata', 'disponibilitaTempo', 'noteSullaDisponibilita', 'tariffaTrattabile'])}

                onSubmit={handleCreaOSalva}
            >
            {({values}) => {
            return (
            <>
            <Form style={{width:"100%", maxWidth:"100%", border:"0px", marginTop:"0", padding:"2%", fontSize:"0.8rem"}}>
                <div className="arrotondato shadow sezione-interna" style={{minHeight:"62vh", overflowX:"hidden", margin:"0", width:"100%"}}>

                                        <Row>
                                            <Col className="col-3">Data Inizio Disponibilità:</Col>
                                            <Col className="col-4">
                                                <CustomInput
                                                    name="dataInizioDisponibilita"
                                                    type="date"
                                                />
                                            </Col>
                                        </Row><br/>
                                        <Row>
                                            <Col className="col-3">Data Fine Disponibilità:</Col>
                                            <Col className="col-4">
                                                <CustomInput
                                                    name="dataFineDisponibilita"
                                                    type="date"
                                                />
                                            </Col>
                                        </Row><br/>
                                        <Row>
                                            <Col className="col-3">Area Professionale:</Col>
                                            <Col className="col-4"><CustomSelect name="areaProfessionale">
                                                                        <option value="">Scegliere area professionale...</option>
                                                                        <option value="Consulenza IT">Consulenza IT</option>
                                                                        <option value="Consulenza Organizzativa">Consulenza Organizzativa</option>
                                                                        <option value="Consulenza Sistemistica">Consulenza Sistemistica</option>
                                                                    </CustomSelect>
                                            </Col>
                                        </Row><br/>
                                        <Row>
                                            <Col className="col-3">Conoscenze Messe a Disposizione:</Col>
                                            <Col className="col-4">
                                                <CustomInput
                                                    name="conoscenzeMesseADisposizione"
                                                    type="text"
                                                />
                                            </Col>
                                        </Row><br/>
                                        <Row>  
                                            <Col className="col-3">Ruolo Desiderato:</Col>
                                            <Col className="col-4"><CustomSelect name="ruoloDesiderato">
                                                                        <option value="">Scegliere ruolo...</option>
                                                                        <option value="Analista Funzionale">Analista Funzionale</option>
                                                                        <option value="Analista Tecnico">Analista Tecnico</option>
                                                                        <option value="Project Manager">Project Manager</option>
                                                                        <option value="Programmatore Junior">Programmatore Junior</option>
                                                                        <option value="Programmatore Senior">Programmatore Senior</option>
                                                                        <option value="Sistemista">Sistemista</option>
                                                                    </CustomSelect></Col>
                                        </Row><br/>
                                        <Row>
                                            <Col className="col-3">Tariffa Giornaliera Desiderata:</Col>
                                            <Col className="col-4">
                                                <CustomInput
                                                    name="tariffaGiornalieraDesiderata"
                                                    type="text"
                                                    placeholder="000.00"
                                                />
                                            </Col>
                                        </Row><br/>
                                        <Row>
                                            <Col className="col-3">Disponibilità Tempo:</Col>
                                            <Col className="col-4"><CustomSelect name="disponibilitaTempo">
                                                                        <option value="Part-Time">Part-time</option>
                                                                        <option value="Full-Time">Full-time</option>
                                                                    </CustomSelect>
                                            </Col>
                                        </Row><br/>
                                        <Row>
                                            <Col className="col-3">Note sulla Disponibilità:</Col>
                                            <Col className="col-6">
                                                <CustomInput
                                                    name="noteSullaDisponibilita"
                                                    type="text"
                                                />
                                            </Col>
                                        </Row><br/>
                                        <Row>
                                            <Col className="col-3">Tariffa Trattabile:</Col>
                                            <Col className="col-4"><CustomSelect name="tariffaTrattabile">
                                                                        <option value={false}>No</option>
                                                                        <option value={true}>Sì</option>
                                                                    </CustomSelect>
                                            </Col>
                                        </Row><br/>
                                    
                    
                </div>
                <Row>
                    <Col className="col-7"></Col>
                    <Col className="col-5 text-center">
                        <button type="submit" className="btn btn-success">{(!props.nuova) ? ("Salva Modifiche"):("Crea Offerta")}</button>
                        {"  "}
                        <button type="button" className="btn btn-danger" onClick={handleEsci}>{(!props.nuova) ? ("Esci senza modificare"):("Annulla Creazione")}</button>
                    </Col>
                </Row>
            </Form>
            </>
            );}}
            </Formik>
            )}
        </div>
    );


}

export default EditOffertaComponent;