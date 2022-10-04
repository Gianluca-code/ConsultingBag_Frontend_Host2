import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import './overview.css';
import {MdSell} from "react-icons/md";
import {BsCalendar, BsGeoAltFill} from "react-icons/bs";
import {AiFillBank} from "react-icons/ai";
import {RiRedPacketFill} from "react-icons/ri";
import {useSelector} from "react-redux";
import {useNavigate, Link} from "react-router-dom";
import OfferteOnDashboard from "../../components/offerteOnDashboard/OfferteOnDashboard";
import cronologiaConsulenteService from "../../services/cronologiaConsulente.service";


function Overview ({ children }) {
    const [account, setAccount] = useState([]);
    const navigate = useNavigate();

    const [lastTwoHistory, setLastTwoHistory] = useState();

    useEffect(() => {
 
        cronologiaConsulenteService.getLastTwoHistory(currentUser.username)
            .then(function (res) { setLastTwoHistory(res.data)})
            .catch(function () {
                setLastTwoHistory(null);
                navigate("/*");
        });
    }, []);


//    const allowedRoutes = getAllowedRoutes(children);
    const { user: currentUser, isLoggedIn: isLoggedIn } = useSelector((state) => state.auth);
    return (
        <>

        {isLoggedIn &&
        <>

            <Container fluid className="overview">
            <Row>Overview</Row>


            <Row style={{color:"#009EE2"}}>Situazione Offerte caricate</Row>
            <Row className="shadow-sm bordo_generale"><OfferteOnDashboard consulente={currentUser.username}/></Row>


            <Row style={{color:"#009EE2"}}>Azioni e Modifiche sul Portale</Row>
            <Row className="shadow-sm bordo_generale" style={{fontWeight:"700", fontSize:"0.85rem", padding:"1%"}}>
                <Row className="m-1">
                    <Col className="col-8">
                        {lastTwoHistory? (<>
                        {lastTwoHistory.map((field) => (<Row>{field.timestamp} - {cronologiaConsulenteService.RisolviCodice(field.evento)} {field.info}</Row>))}
                        {lastTwoHistory.length === 0 ? (<Row><Col>Nessuna Azione Presente</Col></Row>):("")}
                        </>):(<>Nessuna Azione Presente</>)}
                    </Col>
                    <Col className="col-4">
                        <Link className="mt-2" to="/cronologiaConsulente"><button className="btn btn-primary">Vedi Cronologia</button></Link>
                    </Col>
                </Row>
            </Row>


            <Row style={{color:"#009EE2"}}>Aste in corso</Row>

            <Row className="shadow-sm bordo_aste">
                <Row >
                    <Col className="mt-2">
                        <MdSell/>
                        <p className="fix"></p>
                    </Col>
                    <Col className="mt-2">
                        <BsCalendar/>
                        <p className="fix"></p>
                    </Col>
                    <Col className="mt-2">
                        <BsGeoAltFill/>
                        <p className="fix"></p>
                    </Col>
                    <Col>
                        <button className="botton1">120$</button>
                    </Col>
                </Row>
                <span style={{width:'70%', color:'#CED3DC',borderTop:'1px solid #CED3DC', marginLeft:'2%'}}></span>
                <Row >
                    <Col className="mt-3">
                        <AiFillBank />
                        <p className="fix"></p>
                    </Col>
                    <Col className="mt-3">
                        <RiRedPacketFill />
                        <p className="fix"></p>
                    </Col>
                    <Col className="mt-3">
                        <RiRedPacketFill />
                        <p className="fix"></p>
                    </Col>
                    <Col><button className="botton2">Rilancia</button></Col>
                </Row>

            </Row>
        </Container>

        </>}
</>

    );
};
export default Overview;