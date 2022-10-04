import {BsCircle} from "react-icons/bs";
import {useNavigate} from "react-router-dom";
import Logo from "../../../static_assets/logo.png";
import React, {useEffect, useState} from "react";
import CardHeader from "react-bootstrap/CardHeader";
import {Col, Container, Row} from "react-bootstrap";
import {CardBody, CardButton, CardFieldset, CardHeading, CardText, CardWrapper} from "../../../components/card/Card";
import {useDispatch, useSelector} from "react-redux";
import Spinner from "../../../components/spinner/Spinner";

function StepFourConsulente (props) {
    const {user: currentUser, isLoggedIn: isLoggedIn} = useSelector(
        (state) => state.auth
    );
    const [fiveSeconds, setFiveSeconds] = useState(false);
    useEffect(() => {
        window.scrollTo({
            top: 1,
            behavior: 'smooth',
        });
        setTimeout(() => {
            setFiveSeconds(true)
        }, 1500);
    }, []);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    if (isLoggedIn && currentUser.isActive) {
        navigate("*")
    }

    return (
        <>
            {(isLoggedIn && !currentUser.isActive && fiveSeconds) ? (
                <CardWrapper widht="35%" marginTop="9%" marginBottom="9%">
                    <CardHeader>
                        <Container>
                            <Row style={{justifyContent: "center"}}>
                                <Col md="auto" style={{paddingRight: "0"}}>
                                    <img src={Logo} alt="" style={{height: "60px", width: "40x"}}/>
                                </Col>
                                <Col md="auto" style={{paddingTop: "4%", paddingLeft: "0"}}>
                                    <CardHeading fontSize={"1.5rem"}>CONSULTING BAG</CardHeading>
                                </Col>
                            </Row>
                        </Container>
                    </CardHeader>

                    <CardBody>
                        <CardFieldset style={{ marginTop: "5%" }}>
                            <CardText fontSize={"1.1rem"} fontWeight={"bold"} color={"#009ee2"}>
                                Complimenti
                            </CardText>
                            <CardText fontSize={"1.1rem"} fontWeight={"bold"}>
                                ti sei registrato con successo
                            </CardText>
                        </CardFieldset>
                        <CardFieldset>
                            <CardText fontSize={"0.9rem"} >
                                Investi qualche minuto <br /> per completare <br /> il tuo profilo
                                professionale<br /><br />
                                Potrai partecipare subito <br /> alle aste e candidarti <br /> alle
                                migliori offerte
                            </CardText>
                        </CardFieldset>

                        <CardFieldset
                            style={{ display: "flex", justifyContent: "space-between" }}
                        >
                            <CardButton type="button" onClick={() => {
                                dispatch({type: "nextPage", payload:"/mod"})
                                navigate("/completaProfilo")
                            }}>Crea Profilo</CardButton>
                        </CardFieldset>
                        <CardFieldset>
                            <BsCircle
                                size={15}
                                color="#009EE2"
                                style={{
                                    backgroundColor: "#009EE2",
                                    borderRadius: "15px",
                                    margin: "1.5%",
                                }}
                            ></BsCircle>
                            <BsCircle
                                size={15}
                                color="#009EE2"
                                style={{
                                    backgroundColor: "#009EE2",
                                    borderRadius: "15px",
                                    margin: "1.5%",
                                }}
                            ></BsCircle>
                            <BsCircle
                                size={15}
                                color="#009EE2"
                                style={{
                                    backgroundColor: "#009EE2",
                                    borderRadius: "15px",
                                    margin: "1.5%",
                                }}
                            ></BsCircle>
                            <BsCircle
                                size={15}
                                color="#009EE2"
                                style={{
                                    backgroundColor: "#009EE2",
                                    borderRadius: "15px",
                                    margin: "1.5%",
                                }}
                            ></BsCircle>
                        </CardFieldset>
                    </CardBody>
                </CardWrapper>
            ) : (<Spinner/>)}

        </>
    );
};
export default StepFourConsulente;
