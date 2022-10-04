import TestoPrivacy from "../../../components/testoPrivacy/TestoPrivacy";
import React from "react";

import Logo from "../../../static_assets/logo.png";
import { BsCircle } from "react-icons/bs";
import {
  CardWrapper,
  CardBody,
  CardFieldset,
  CardButton,
  CardHeading,
  CardHeader,
  CardButton2,
} from "../../../components/card/Card";
import { Col, Container, Row } from "react-bootstrap";
import {useEffect} from "react";

function StepTwoConsulente (props)  {
  const handleSubmit = (values) => {
    props.next(values);
  };
  return (
    <CardWrapper widht="37%" marginTop="9%" marginBottom="6%">
      <CardHeader>
        <Container>
          <Row style={{ justifyContent: "center" }}>
            <Col md="auto" style={{ paddingRight: "0" }}>
              <img src={Logo} alt="" style={{ height: "60px", width: "40x" }} />
            </Col>
            <Col md="auto" style={{ paddingTop: "4%", paddingLeft: "0" }}>
              <CardHeading fontSize={"1.5rem"}>CONSULTING BAG</CardHeading>
            </Col>
          </Row>
        </Container>
      </CardHeader>

      <CardBody>
        <CardHeading fontSize={"1.3rem"}>Informativa sulla privacy</CardHeading>
        <CardFieldset
          style={{
            marginTop: "10%",
            overflowY: "scroll",
              fontSize:"0.7rem",
              fontWeight:"normal",
            height: "75vh",
            border: "2px solid #ced4da",
              textAlign: "left"
          }}
        >
          <TestoPrivacy />
        </CardFieldset>
        <CardFieldset
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <CardButton2 type="button" onClick={() => props.prev()}>
            Non Accetto
          </CardButton2>
          <CardButton type="button" onClick={handleSubmit}>
            Accetto
          </CardButton>
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
            color="white"
            style={{
              border: "3px solid #009EE2",
              backgroundColor: "white",
              borderRadius: "15px",
              margin: "1.5%",
            }}
          ></BsCircle>
          <BsCircle
            size={15}
            color="#CED3DC"
            style={{
              backgroundColor: "#CED3DC",
              borderRadius: "15px",
              margin: "1.5%",
            }}
          ></BsCircle>
        </CardFieldset>
      </CardBody>
    </CardWrapper>
  );
};

export default StepTwoConsulente;
