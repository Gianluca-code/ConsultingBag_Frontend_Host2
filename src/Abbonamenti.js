import React, {useEffect, useState} from "react";
import Logo from "./static_assets/logo.png";
import {
    CardWrapper,
    CardBody,
    CardFieldset,
    CardButton,
    CardHeading,
    CardHeader,
    CardButton2, CardText,
} from "./components/card/Card";
import { Container, Row, Col } from "react-bootstrap";
import "./components/customFormElements/formStyle.css"
import axios from "axios";
import UserService from "./services/user.service";
import ConsulenteService from "./services/consulente-service";
import {useSelector} from "react-redux";
import authHeader from "./services/auth-header";
import Asta from "./components/asta/Asta";
import {Link, useNavigate} from "react-router-dom";


function Abbonamenti (){

    const [consulenteData, setConsulenteData] = useState([]);
    const [abbonamenti, setAbbonamenti] = useState([{}]);

    const { user: currentUser } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    useEffect(() => {
        ConsulenteService.getConsulenteData(currentUser.username)
            .then(function (res) { setConsulenteData(res.data);})
            .catch(function () { setConsulenteData([])});


        axios.get('http://Consultingbagbackend-env.eba-ehqx28hk.us-east-1.elasticbeanstalk.com:5000/api/v1/abbonamento/all',{headers: authHeader()} )
            .then((res) =>{
                setAbbonamenti(res.data);

            })
            .catch((e)=>{
                console.log('Errore')
            })

    }, []);



    const iscrizione = () =>{
        axios.put('http://Consultingbagbackend-env.eba-ehqx28hk.us-east-1.elasticbeanstalk.com:5000/api/v1/consulenti/aggiornaAbbonamento/' + abb.id + '/' + currentUser.username, {},{headers: authHeader()} )
            .then((res) =>{
               console.log('Successo')
                navigate("/overview")

            })
            .catch((e)=>{
                console.log('Errore')
            })
    }


    const [account, setAccount] = useState([]);
    const [nome, setNome] = useState();
    const [abb, setAbb] = useState({});
    const [cont, setCont] = useState(0);
    const updateValue = ({ target }) => {
        setAbb(abbonamenti[target.value]);


    };

    return (

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
                <CardFieldset>
                    <CardHeading fontSize={"1.2rem"}>Abbonamenti</CardHeading>
                </CardFieldset>


                <CardFieldset style={{
                    display: "flex",
                    justifyContent: "left",

                }}>
                    <CardText margin="0 10% 0 0">Utenti</CardText>
                    <CardText margin="0 0 0 37%">{consulenteData.username}</CardText>
                </CardFieldset>

                <CardFieldset style={{
                    display: "flex",
                    justifyContent: "left",

                }}>
                    <CardText margin="0 10% 0 0">Nome</CardText>
                    <CardText margin="0 0 0 37%">{abb.nome}</CardText>
                </CardFieldset>
                <CardFieldset style={{
                    display: "flex",
                    justifyContent: "left",

                }}>
                    <CardText margin="0 10% 0 0">Costo</CardText>
                    <CardText margin="0 0 0 37%">{abb.costo}</CardText>
                </CardFieldset>
                <CardFieldset style={{
                    display: "flex",
                    justifyContent: "left",

                }}>
                    <CardText margin="0 10% 0 0">Durata</CardText>
                    <CardText margin="0 0 0 37%">{abb.durata}</CardText>
                </CardFieldset>
                <CardFieldset style={{
                    display: "flex",
                    justifyContent: "left",

                }}>
                    <CardText margin="0 10% 0 0">Numero massimo di offerte</CardText>
                    <CardText margin="0 0 0 37%">{abb.numMaxRilanciAsteAttive}</CardText>
                </CardFieldset>
                <CardFieldset style={{
                    display: "flex",
                    justifyContent: "left",

                }}>
                    <CardText margin="0 10% 0 0">Numero massimo di rilanci</CardText>
                    <CardText margin="0 0 0 37%">{abb.numMaxOfferteCaricate}</CardText>
                </CardFieldset>


                <CardFieldset style={{
                    display: "flex",
                    justifyContent: "left",
                }}>
                    <CardText margin="0 10% 0 0">Cod abbonamento</CardText>
                    <CardText margin="0 0 0 11%"><select value={nome}
                                                         onChange={updateValue}
                                                         id="professionale"
                                                         className="form-select"
                                                         aria-label="Default select example"
                    >
                            <option>Codice</option>
                        {abbonamenti.map((field, i) => (
                            <option value={i}>{field.id}</option>
                        ))}


                    </select></CardText>
                </CardFieldset>


                <CardFieldset style={{
                    display: "flex",
                    justifyContent: "left",

                }}>
                    <Link to="/overview">
                        <CardText margin="0 10% 0 0"><CardButton>Indietro</CardButton></CardText>
                    </Link>
                    <CardText margin="0 0 0 37%"><CardButton onClick={iscrizione}>Applica</CardButton></CardText>
                </CardFieldset>
            </CardBody>

        </CardWrapper>
);
};
export default Abbonamenti;
