import {Form, Formik} from "formik";

import React, {useCallback, useEffect, useState} from 'react';
import {CardBody, CardButton, CardFieldset, CardHeader, CardHeading, CardWrapper} from "../../../components/card/Card";
import {Col, Container, Row} from "react-bootstrap";
import Logo from "../../../static_assets/logo.png";
import {schema} from "../../../components/schemas/schema";
import CustomInput from "../../../components/customFormElements/CustomInput";
import CustomSelect from "../../../components/customFormElements/CustomSelect";

import CustomCheckbox from "../../../components/customFormElements/CustomCheckbox";
import "../../../components/customFormElements/formStyle.css";
import UserService from "../../../services/user.service";
import {useDispatch, useSelector} from "react-redux";
import ConsulenteService from "../../../services/consulente-service";
import {useNavigate} from "react-router-dom";
import {logout} from "../../../actions/auth";


function ModProfiloConsulente(props) {
    const { user: currentUser } = useSelector((state) => state.auth);
    const [userData, setUserData] = useState();
    const [consulenteData, setConsulenteData] = useState();


    useEffect(() => {
        UserService.getUserData(currentUser.username)
            .then(function (res) { setUserData(res.data);})
            .catch(function () { setUserData(null)});
        ConsulenteService.getConsulenteData(currentUser.username)
            .then(function (res) { setConsulenteData(res.data);})
            .catch(function () { setConsulenteData([])});
    }, []);

    return (
        <div>
            {userData && consulenteData &&
                <Child userData={userData} consulenteData={consulenteData} text={props.text}/>
            }
        </div>
    );
}


const Child = (props) => {




    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user: currentUser } = useSelector((state) => state.auth);
    const [userData, setUserData] = useState(props.userData);
    const [consulenteData, setConsulenteData] = useState(props.consulenteData);
    const indietro = () => {
        navigate("/overview")
    }
    const logOut = useCallback(() => {
        dispatch(logout());
        navigate("/login");
    }, [dispatch]);
    const onSubmit = (values) => {

        UserService.updateUser(currentUser.username, values.email, values.telefono).catch((e)=>{alert("ERRORE durante l'aggiornamento user : "+ e)});
        if (props.text === "Completa") {
            ConsulenteService.createConsulente(
                currentUser.username,
                values.cognome,
                values.nome,
                values.indirizzo,
                values.alias,
                values.cap,
                values.localita,
                values.cf,
                values.iva,
                values.areaProf,
                values.tras,
                values.tariffa)
                .then(() => {
                    logOut();
                })
                .catch((e)=>{alert("ERRORE durante la creazione consulente : "+ e)});
        } else {
            ConsulenteService.updateConsulente(
                currentUser.username,
                values.cognome,
                values.nome,
                values.indirizzo,
                values.alias,
                values.cap,
                values.localita,
                values.cf,
                values.iva,
                values.areaProf,
                values.tras,
                values.tariffa)
                .catch((e)=>{alert("ERRORE durante l'aggiornamento consulente : "+ e)});
            navigate("/overview")
        }
    };
    document.body.style.backgroundColor = "#009EE2";
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
                        <CardHeading fontSize={"1.2rem"}>{props.text != null ? props.text : "Modifica"} il tuo
                            profilo</CardHeading>
                    </CardFieldset>
                    <Formik
                        initialValues={{
                            alias: consulenteData.alias,
                            cognome: consulenteData.cognome,
                            nome: consulenteData.nome,
                            indirizzo: consulenteData.indirizzo,
                            cap: consulenteData.cap,
                            localita: consulenteData.localita,
                            cf: consulenteData.cf,
                            iva: consulenteData.piva,
                            areaProf: consulenteData.areaProfessionale,
                            tras: consulenteData.disponibileTrasferte,
                            tariffa: consulenteData.tariffaGiornalieraRichiesta,
                            email: userData.email,
                            telefono: userData.telefono
                        }}

                        validationSchema={schema.pick(['alias', 'cognome', 'nome', 'indirizzo', 'cap', 'localita', 'cf', 'iva', 'email', 'telefono', 'tariffa'])}

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
                                            label="Email"
                                            name="email"
                                            type="text"
                                            placeholder="email"
                                        />
                                        <CustomInput
                                            label="Telefono"
                                            name="telefono"
                                            type="text"
                                            placeholder="Inserisci Telefono"
                                        />
                                        <CustomInput
                                            label="Alias"
                                            name="alias"
                                            type="text"
                                            placeholder="Inserisci alias"
                                        />
                                        <CustomInput
                                            label="Cognome"
                                            name="cognome"
                                            type="text"
                                            placeholder="Inserisci cognome"
                                        />
                                        <CustomInput
                                            label="Nome"
                                            name="nome"
                                            type="text"
                                            placeholder="Inserisci nome"
                                        />
                                        <CustomInput
                                            label="Indirizzo"
                                            name="indirizzo"
                                            type="text"
                                            placeholder="Inserisci indirizzo"
                                        />
                                        <CustomInput
                                            label="Cap"
                                            name="cap"
                                            type="text"
                                            placeholder="Inserisci cap"
                                        />
                                        <CustomInput
                                            label="Localita"
                                            name="localita"
                                            type="text"
                                            placeholder="Inserisci Localita"
                                        />
                                        <CustomInput
                                            label="Codice Fiscale"
                                            name="cf"
                                            type="text"
                                            placeholder="Inserisci Codice Fiscale"
                                        />
                                        <CustomInput
                                            label="Partita IVA"
                                            name="iva"
                                            type="text"
                                            placeholder="Inserisci Partita IVA"
                                        />
                                        <CustomSelect label="Area Professionale" name="areaProf">
                                            <option value=""> - </option>
                                            <option value="Consulenza IT">Consulenza IT</option>
                                            <option value="Consulenza Organizzativa">Consulenza Organizzativa</option>
                                            <option value="Consulenza Sistemistica">Consulenza Sistemistica</option>
                                        </CustomSelect>
                                        <CustomCheckbox
                                            type="checkbox"
                                            name="tras"
                                            label={undefined}
                                            span="Disponibilità trasferte"
                                        />
                                        <CustomInput
                                            label="Tariffa giornaliera richiesta"
                                            name="tariffa"
                                            type="text"
                                            placeholder="Inserisci tariffa"
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
                                            {!props.text ? <CardButton type="button" onClick={indietro}>
                                                Annulla
                                            </CardButton> : null}

                                            <CardButton type="submit">
                                                {props.text ? "Completa" : "Modifica"}
                                            </CardButton>
                                        </CardFieldset>
                                    </Form>
                                </>
                            );
                        }}
                    </Formik>
                </CardBody>
            </CardWrapper>
            {/*))))}*/}
        </>
    );
};
export default ModProfiloConsulente;
