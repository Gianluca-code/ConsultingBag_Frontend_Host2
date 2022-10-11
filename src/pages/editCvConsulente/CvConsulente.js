import {Form, Formik} from "formik";

import React, {useCallback, useEffect, useState} from 'react';
import {CardBody, CardButton, CardFieldset, CardHeader, CardHeading, CardWrapper} from "../../components/card/Card";
import {Col, Container, Row} from "react-bootstrap";
import Logo from "../../static_assets/logo.png";
import {schema} from "../../components/schemas/schema";
import CustomInput from "../../components/customFormElements/CustomInput";
import CustomSelect from "../../components/customFormElements/CustomSelect";

import CustomCheckbox from "../../components/customFormElements/CustomCheckbox";
import "../../components/customFormElements/formStyle.css";
import UserService from "../../services/user.service";
import {useDispatch, useSelector} from "react-redux";
import ConsulenteService from "../../services/consulente-service";
import {Link, useNavigate} from "react-router-dom";
import {logout} from "../../actions/auth";
import {useParams} from "react-router";
import proposteService from "../../services/proposte.service";
import CvConsulenteService from "../../services/cvConsulente.service";
import jsPDF from 'jspdf';
import axios from "axios";
import authHeader from "../../services/auth-header";




function CvConsulent () {





    const [consulenteData, setConsulenteData] = useState("");
    const [cv, setCv] = useState("");
    const [dw, setDw] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user: currentUser } = useSelector((state) => state.auth);
    const [userData, setUserData] = useState();
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const indietro = () => {
        navigate("/overview")
    }
    useEffect(() => {

        ConsulenteService.getConsulenteData(currentUser.username)
            .then(function (res) { setConsulenteData(res.data)})
            .catch(function () {
                setConsulenteData([]);
                navigate("/*");//se quello che sto cercando di visualizzare non è un consulente devo redirezionare a PageNotFound
            });

    }, []);

    useEffect(() => {

        CvConsulenteService.getCvById(currentUser.username)
            .then(function (res) { setCv(res.data); })
            .catch(function () {
                setCv([]);
                navigate("/*");//se quello che sto cercando di visualizzare non è un consulente devo redirezionare a PageNotFound
            });


        axios.get('http://Consultingbagbackend-env.eba-ehqx28hk.us-east-1.elasticbeanstalk.com:5000/api/v1/cvDownload/downloadFile/' + currentUser.username,{headers: authHeader()} )
            .then((res) =>{
                setDw(res.data);
            })
            .catch((e)=>{
                console.log('Errore')
            })

    }, []);





    const onSubmit = (values) => {
        console.log("ciao");
        CvConsulenteService.updateCv(currentUser.username, values).then(()=>{navigate("/overview");})
            .catch((e)=>{alert("ERRORE durante l'aggiornamento user : "+ e)});

    }

    const pdfGenerate = () =>{
        var doc = new jsPDF('landscape', 'px', 'a4', 'false');
        doc.setFont('Helvetica', 'bold');
        doc.text(60,40,'Design di prova (verrà cambiato)');
        doc.text(60,60,'Titolo di studio: ' + cv.titoloStudio);
        doc.text(60,80,'Materia del titolo: ' + cv.materiaTitolo);
        doc.text(60,100,'Lingue conosciute: ' + cv.lingue);
        doc.text(60,120,'Conoscenze: ' + cv.conoscenze);
        doc.save('cv.pdf');
    }



    const downloadCv = () =>{

        axios.get('http://Consultingbagbackend-env.eba-ehqx28hk.us-east-1.elasticbeanstalk.com:5000/api/v1/cvDownload/downloadFile/' + currentUser.username,{headers: authHeader(), responseType:'blob'} )
            .then((res) =>{
                let blob = new Blob([res.data], {type:'application/pdf'});
                let file = URL.createObjectURL(blob);
                let a = document.createElement('a');
                a.download='cv.pdf';
                a.href = file;
                a.click();
                setDw(res.data)
                console.log(dw);
            })
            .catch((e)=>{
                console.log('Errore')
            })
    }

        return (

            <>
                <div>
                    {cv &&
                        <CardWrapper widht="35%" marginTop="6%" marginBottom="9%">

                    <CardHeader>
                        <Container>
                            <Row style={{justifyContent: "center"}}>
                                <Col md="auto" style={{paddingRight: "0"}}>
                                    <img src={Logo} alt="" style={{height: "60px", width: "40x"}}/>
                                </Col>
                                <Col md="auto" style={{paddingTop: "4%", paddingLeft: "0"}}>
                                    <CardHeading fontSize={"1.4rem"}>CONSULTING BAG</CardHeading>
                                </Col>
                            </Row>
                        </Container>
                    </CardHeader>
                    <CardBody>
                        <CardFieldset style={{marginTop: "-3%"}}>
                            <CardHeading fontSize={"1.2rem"}>Modifica il tuo CV</CardHeading>
                        </CardFieldset>

                        <Formik
                            initialValues={{
                                titoloStudio: cv.titoloStudio,
                                materiaTitolo: cv.materiaTitolo,
                                lingue: cv.lingue,
                                conoscenze: cv.conoscenze,
                            }}

                            onSubmit={onSubmit}
                        >
                            {({values}) => {
                                return (
                                    <>
                                        <Form
                                            style={{
                                                width: "100%",
                                                padding: "3% 8% 0",
                                                border: "none",
                                            }}
                                        >

                                            <CustomInput
                                                label="Titolo di studio"
                                                name="titoloStudio"
                                                id="titoloStudio"
                                                type="text"
                                                placeholder="Lingue conosciute"
                                            />
                                            <CustomInput
                                                label="Titolo di studio in: "
                                                name="materiaTitolo"
                                                type="text"
                                                placeholder="Titolo della Qualifica"
                                            />
                                            <CustomInput
                                                label="Lingue conosciute"
                                                name="lingue"
                                                type="text"
                                                placeholder="Lingue conosciute"
                                            />
                                            <CustomInput
                                                label="Conoscenze Tecniche / Competenze"
                                                name="conoscenze"
                                                type="text"
                                                placeholder="Conoscenze Tecniche / Competenze"
                                            />

                                            <CardFieldset
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    marginTop: "10%",
                                                    width: "145%",
                                                    marginLeft: "-25%",
                                                }}
                                            >

                                                <CardButton type="button" onClick={indietro}>Indietro</CardButton>
                                                <CardButton type="submit">
                                                    Modifica
                                                </CardButton>
                                            </CardFieldset>
                                        </Form>
                                        {!dw ?
                                            <Link to="/uploadCV">
                                                <CardButton>Carica il tuo CV</CardButton>
                                            </Link>:

                                            <CardButton onClick={downloadCv}>Download CV</CardButton>
                                        }



                                    </>
                                );
                            }}
                        </Formik>

                    </CardBody>
                </CardWrapper>
                    }
                </div>
            </>
        );
}
export default CvConsulent;
