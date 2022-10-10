import React, {useEffect, useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import './previewCV.css';
//import  { BreakpointProvider,Breakpoint } from 'react-socks';
import CvConsulenteService from "../../services/cvConsulente.service";
import esperienzeService from "../../services/esperienze.service";



function previewCV(props){

    const navigate = useNavigate();
    const [cv, setCv] = useState();

    const [esperienzeData, setEsperienzeData] = useState([]);



    useEffect(() => {
        CvConsulenteService.getCvById(props.consulenteData.username)
            .then(function (res){setCv(res.data)})
            .catch(function (){
                setCv([]);
            });
    }, []);

    useEffect(() => {
        esperienzeService.getEsperienzeByConsulente(props.consulenteData.username)
            .then(function (res) { setEsperienzeData(res.data)})
            .catch(function () {
                setEsperienzeData([]);
                navigate("/*");
            }); 
    }, []);


    if(cv){
        return(

            /* <BreakpointProvider>


        <Breakpoint customQuery="(min-width: 1000px)">*/
                    <Container fluid className="previewCV_component_grande">
                        <Row>
                        <Col>
                        CV Consulente
                        </Col>
                        <Col className="text-end">
                            <Link to="/editCv"><button className="btn btn-primary">Modifica CV</button></Link>
                        </Col>
                        </Row>
                                <Row>Titolo di Studio:</Row><br/>
                                <Row style={{fontWeight:"500"}}>{cv.titoloStudio} in {cv.materiaTitolo}</Row><br/>
                                <Row>Lingue Conosciute:</Row><br/>
                                <Row style={{fontWeight:"500"}}>{cv.lingue}</Row><br/>
                                <Row>Competenze / Conoscenze Tecniche:</Row><br/>
                                <Row style={{fontWeight:"500"}}>{cv.conoscenze}</Row><br/>
                        <Row>
                            <Col>
                            <Row>Esperienze Lavorative in Evidenza:</Row>
                            <ul>
                            {esperienzeData.map((field) => (<li style={{fontWeight:"500"}}>Dal {field.dataInizio} {field.dataFine? (<> Al {field.dataFine}</>):(" ")} {field.ruoloSvolto} presso {field.nomeAzienda}</li>))}
                            </ul>
                            </Col>
                        </Row>
                        
                    </Container>
        /* </Breakpoint>






        <Breakpoint customQuery="(max-width: 999px)">
                    <Container fluid className="previewCV_component_piccola">
                    <Row>
                        <Col>
                        CV Consulente
                        </Col>
                        <Col className="text-end">
                            <Link to="/editCv"><button className="btn btn-primary">Modifica CV</button></Link>
                        </Col>
                        </Row>
                                <Row>Titolo di Studio:</Row><br/>
                                <Row style={{fontWeight:"500"}}>{cv.titoloStudio} in {cv.materiaTitolo}</Row><br/>
                                <Row>Lingue Conosciute:</Row><br/>
                                <Row style={{fontWeight:"500"}}>{cv.lingue}</Row><br/>
                                <Row>Competenze / Conoscenze Tecniche:</Row><br/>
                                <Row style={{fontWeight:"500"}}>{cv.conoscenze}</Row><br/>
                        <Row>
                            <Col>
                            <Row>Esperienze Lavorative in Evidenza:</Row>
                            <ul>
                            {esperienzeData.map((field) => (<li style={{fontWeight:"500"}}>Dal {field.dataInizio} {field.dataFine? (<> Al {field.dataFine}</>):(" ")} {field.ruoloSvolto} presso {field.nomeAzienda}</li>))}
                            </ul>
                            </Col>
                        </Row>
                        


                    </Container>
                </Breakpoint>

            </BreakpointProvider>*/
        );
    }
}
export default previewCV;