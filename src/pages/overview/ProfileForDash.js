import React, { useCallback, useEffect, useState} from 'react';
import "./dash.css";
import { BsThreeDots, BsPencilSquare } from "react-icons/bs";
//import { BreakpointProvider, Breakpoint } from "react-socks";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import ConsulenteService from "../../services/consulente-service";
import UserService from "../../services/user.service";
import {CardLink} from "../../components/card/Card";
import 'reactjs-popup/dist/index.css';

import {logout} from "../../actions/auth";
import CvConsulenteService from "../../services/cvConsulente.service";




function ProfileForDash() {


  let navigate = useNavigate();
  
  function handleOnClick(e) {
    e.preventDefault();
    navigate("../modificaProfilo");
  }
  const style = { color: "#009EE2" };
  const bordo = { borderColor: "#009EE2" };
  const [consulenteData, setConsulenteData] = useState([]);
  const [userData, setUserData] = useState([]);
  const { user: currentUser } = useSelector((state) => state.auth);
  const [cv, setCv] = useState({});




  
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
    navigate("/login");
  }, [dispatch]);
  useEffect(()=>{

  })
  
  
  useEffect(() => {
      UserService.getUserData(currentUser.username)
          .then(function (res) { setUserData(res.data);})
          .catch(function () {logOut()});
      ConsulenteService.getConsulenteData(currentUser.username)
      .then(function (res) { setConsulenteData(res.data);})
      .catch(function () { setConsulenteData([])});

  }, []);
  useEffect(() => {
    CvConsulenteService.getCvById(currentUser.username)
        .then(function (res) { setCv(res.data); })
        .catch(function () {
          setCv([]);
          navigate("/*");//se quello che sto cercando di visualizzare non è un consulente devo redirezionare a PageNotFound
        });

  }, []);



console.log(cv);

  return (
      <div>
      {/* <BreakpointProvider>
      <Breakpoint customQuery="(min-width: 900px)">*/}
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
              <Col>{consulenteData.nome} {consulenteData.cognome}</Col>
            </Row>
            <Row>
              <Col>{consulenteData.alias}</Col>
            </Row>
            <Row>
              <Col>{consulenteData.indirizzo}-{consulenteData.cap} {consulenteData.localita}</Col>
            </Row>
            <Row>
              <Col>tel. {userData.telefono}</Col>
            </Row>
            <Row>
              <Col>{userData.email}</Col>
            </Row>
            <Row>
              <Col>cf. {consulenteData.cf}</Col>
            </Row>
            <Row>
              <Col>p. IVA: {consulenteData.piva}</Col>
            </Row>
            <Row>
              <Col>area professionale: {consulenteData.areaProfessionale}</Col>
            </Row>
            <Row>
              <Col>trasferta: {consulenteData.disponibileTrasferte ? "si" : "no"} </Col>
            </Row>
            <Row>
              <Col>tariffa: {consulenteData.tariffaGiornalieraRichiesta}</Col>
            </Row>
            <Row>
              <Link to="/abbonamenti">
                <CardLink style={{border:"none", fontSize:"0.9rem"}}>Abbonamento</CardLink>
              </Link>
            </Row>
            <Row>

              <Link to="/esperienze">
                <CardLink style={{border:"none", fontSize:"0.9rem"}}>Visualizza esperienze</CardLink>
              </Link>
              {Object.keys(cv).length===0 ?
                  <Link to="/addCv">
                    <CardLink style={{border: "none", fontSize: "0.9rem"}}>Aggiungi il cv</CardLink>
                  </Link>:
                  <Link to="/editCv">
                    <CardLink style={{border:"none", fontSize:"0.9rem"}}>Curriculum vitae</CardLink>
                  </Link>
              }
            </Row>
            <Row>
              <Col>
              <Link to={{pathname:"/profiloConsulente", state:currentUser.username}}>
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
  {/*  </Breakpoint>
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
                <Row>{consulenteData.nome} </Row>
                <Row>{consulenteData.alias} </Row>
                <Row>{consulenteData.indirizzo}-{consulenteData.cap} {consulenteData.localita} </Row>
              </Col>
              <Col md="auto" className="pad">
                <Row>{userData.telefono}</Row>
                <Row>{userData.email}</Row>
                <Row>area professionale: {consulenteData.areaProfessionale}</Row>
              </Col>
              <Col md="auto" className="pad">
                <Row>trasferta:{consulenteData.disponibileTrasferte ? "si" : "no"}</Row>
                <Row>Abbonamento</Row>
                  <Row> Curriculum Vitae</Row>


              </Col>
              <Row>
                <Col>
                <Link to={{pathname:"/profiloConsulente", state:currentUser.username}}>
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
    </BreakpointProvider>*/}
      </div>
  );
}
export default ProfileForDash;
