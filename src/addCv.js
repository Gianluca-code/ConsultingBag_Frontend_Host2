import {Form, Formik} from "formik";

import React, {useCallback, useEffect, useState} from 'react';
import {CardBody, CardButton, CardFieldset, CardHeader, CardHeading, CardWrapper} from "./components/card/Card";
import {Col, Container, Row} from "react-bootstrap";
import Logo from "./static_assets/logo.png";
import {schema} from "./components/schemas/schema";
import CustomInput from "./components/customFormElements/CustomInput";
import CustomSelect from "./components/customFormElements/CustomSelect";

import CustomCheckbox from "./components/customFormElements/CustomCheckbox";
import "./components/customFormElements/formStyle.css";
import UserService from "./services/user.service";
import {useDispatch, useSelector} from "react-redux";
import ConsulenteService from "./services/consulente-service";
import {useNavigate} from "react-router-dom";
import {logout} from "./actions/auth";
import {useParams} from "react-router";
import proposteService from "./services/proposte.service";
import CvConsulenteService from "./services/cvConsulente.service";





function addCv () {


    const [consulenteData, setConsulenteData] = useState("");
    const [cv, setCv] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user: currentUser } = useSelector((state) => state.auth);
    const [userData, setUserData] = useState();

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


    const onSubmit = (values) => {
        console.log("ciao");
        CvConsulenteService.createCv(currentUser.username, values)
            .catch((e)=>{alert("ERRORE durante l'aggiornamento user : "+ e)});

        navigate("/overview");

    }





    return (
        <>
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
                        <CardHeading fontSize={"1.2rem"}>Aggiungi il tuo CV</CardHeading>
                    </CardFieldset>

                    <Formik
                        initialValues={{
                            titoloStudio: "",
                            materiaTitolo: "",
                            lingue: "",
                            conoscenze: "",
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
                                                Aggiungi
                                            </CardButton>
                                        </CardFieldset>
                                    </Form>
                                </>
                            );
                        }}
                    </Formik>

                </CardBody>
            </CardWrapper>
        </>
    );
}
export default addCv;
