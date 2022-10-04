import React, {Component, useCallback, useEffect, useState} from 'react';
import axios from "axios";
import "./dash.css";
import { BsThreeDots, BsPencilSquare } from "react-icons/bs";
import { BreakpointProvider, Breakpoint } from "react-socks";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
//import AziendaService from "../../services/azienda-service";
import UserService from "../../services/user.service";
import {CardLink} from "../../components/card/Card";

import {logout} from "../../actions/auth";




function ProfileForDashAzienda() {

  let navigate = useNavigate();
  
  function handleOnClick(e) {
    e.preventDefault();
    navigate("../modificaProfilo");
  }
  const style = { color: "#009EE2" };
  const bordo = { borderColor: "#009EE2" };
  const [aziendaData, setAziendaData] = useState([]);
  const [userData, setUserData] = useState([]);
  const { user: currentUser } = useSelector((state) => state.auth);
  
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
    navigate("/login");
  }, [dispatch]);
  
  
  
  useEffect(() => {
      UserService.getUserData(currentUser.username)
          .then(function (res) { setUserData(res.data);})
          .catch(function () {logOut()});
/*       
      AziendaService.getAziendaData(currentUser.username)
      .then(function (res) { setAziendaData(res.data);})
      .catch(function () { setAziendaData([])});
 */

  }, []);



  return (
    <BreakpointProvider>
      <Breakpoint customQuery="(min-width: 900px)">
          <Container className="rightDash text-center">
            <Row>
              <Col className="rounded-3">
                <img
                  src="src/ConsulDashComponent"
                  style={{
                    height: "150px",
                    width: "150px",
                    borderRadius: "15px",
                    border: "1px solid grey",
                  }}
                  alt=""
                ></img>
              </Col>
            </Row>
            <Row>
              <Col>{aziendaData.ragioneSociale}</Col>
            </Row>
            <Row>
              <Col>{aziendaData.alias}</Col>
            </Row>
            <Row>
              <Col>{aziendaData.indirizzo}-{aziendaData.cap} {aziendaData.localita}</Col>
            </Row>
            <Row>
              <Col>tel. {userData.telefono}</Col>
            </Row>
            <Row>
              <Col>{userData.email}</Col>
            </Row>
            <Row>
              <Col>p. IVA: {aziendaData.piva}</Col>
            </Row>
            <Row>
              <CardLink style={{border:"none", fontSize:"0.9rem"}}>Abbonamento</CardLink>
            </Row>
            <Row>
                <CardLink style={{border:"none", fontSize:"0.9rem"}}>Curriculum vitae</CardLink>
            </Row>
            <Row>
              <Col>
              <Link to={{pathname:"/profiloAzienda", state:currentUser.username}}>
                  <button type="button" className="botton">
                    {" "}
                    <BsThreeDots size={20} /> Più Dettagli{" "}
                  </button>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <button
                  type="button"
                  className="botton"
                  style={bordo}
                  onClick={handleOnClick}
                >
                  {" "}
                  <BsPencilSquare size={20} style={style} /> Modifica Profilo
                </button>
              </Col>
            </Row>
          </Container>
      </Breakpoint>
      <Breakpoint customQuery="(max-width: 899px)">
        <Container className="rightDashMobile">
            <Row>
              <Col md="auto">
                <Col className="rounded-3">
                  <img
                    src="src/ConsulDashComponent"
                    style={{
                      height: "150px",
                      width: "150px",
                      borderRadius: "15px",
                      border: "1px solid grey",
                    }}
                    alt=""
                  ></img>
                </Col>
              </Col>
              <Col md="auto" className="pad">
                <Row>{aziendaData.ragioneSociale} </Row>
                <Row>{aziendaData.alias} </Row>
                <Row>{aziendaData.indirizzo}-{aziendaData.cap} {aziendaData.localita} </Row>
              </Col>
              <Col md="auto" className="pad">
                <Row>{userData.telefono}</Row>
                <Row>{userData.email}</Row>
              </Col>
              <Col md="auto" className="pad">
                <Row>Abbonamento</Row>
              </Col>
              <Row>
                <Col>
                <Link to={{pathname:"/profiloAzienda", state:currentUser.username}}>
                  <button type="button" className="botton">
                    {" "}
                    <BsThreeDots size={20} /> Più Dettagli{" "}
                  </button>
                </Link>
                </Col>
                <Col>
                    <button
                    type="button"
                    className="botton"
                    style={bordo}
                    onClick={handleOnClick}
                  >
                    <BsPencilSquare size={20} style={style} /> Modifica Profilo
                  </button>
                </Col>
              </Row>
            </Row>
        </Container>
      </Breakpoint>
    </BreakpointProvider>
  );
}
export default ProfileForDashAzienda;
