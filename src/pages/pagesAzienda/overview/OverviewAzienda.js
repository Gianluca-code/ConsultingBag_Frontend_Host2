import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import './overviewAzienda.css';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";


function OverviewAzienda ({ children }) {
    const [account, setAccount] = useState([]);
    const navigate = useNavigate();
//    const allowedRoutes = getAllowedRoutes(children);
    const { user: currentUser, isLoggedIn: isLoggedIn } = useSelector((state) => state.auth);
    
    return (
        <>

        {isLoggedIn &&
            <>
                <Container fluid className="overview">
                <Row>Overview</Row>


                <Row style={{color:"#009EE2"}}>Situazione Proposte caricate</Row>
                <Row className="shadow-sm bordo_generale"></Row>


                <Row style={{color:"#009EE2"}}>Visite e ricerche sul portale</Row>
                <Row className="shadow-sm bordo_generale"></Row>


                <Row style={{color:"#009EE2"}}>Aste caricate</Row>

                <Row className="shadow-sm bordo_aste">
                    

                </Row>
            </Container>
            </>
        }
</>

    );
};
export default OverviewAzienda;