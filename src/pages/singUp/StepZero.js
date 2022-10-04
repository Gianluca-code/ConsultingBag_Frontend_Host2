import {
  CardWrapper,
  CardBody,
  CardFieldset,
  CardButton,
  CardLink,
  CardHeading,
} from "../../components/card/Card";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { BsCircle } from "react-icons/bs";
import Logo from "../../static_assets/logo.png";
import {Link} from "react-router-dom";

const StepZero = (props) => {
  const handleNextCons = () => {
    props.next(true);
  };
  return (
    <CardWrapper widht="35%" marginTop="8%">
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
        <CardFieldset style={{ marginTop: "10%" }}>
          <CardHeading fontSize={"1.0rem"}>
            Sei un consulente o un'azienda?
          </CardHeading>
        </CardFieldset>

        <CardFieldset
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <CardButton type="button" onClick={handleNextCons}>
            Consulente
          </CardButton>
          <CardButton type="button">Azienda</CardButton>
        </CardFieldset>

        <CardFieldset>
            <Link to="/login">
                <CardLink>Se sei già registrato, clicca qui per accedere</CardLink>
            </Link>
        </CardFieldset>
        <CardFieldset>
          <BsCircle
            size={15}
            color="white"
            style={{
              border: "3px solid #009EE2",
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
          <BsCircle
            size={15}
            color="#CED3DC"
            style={{
              backgroundColor: "#CED3DC",
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
export default StepZero;
