import {
  CardWrapper,
  CardBody,
  CardFieldset,
  CardButton,
  CardLink,
  CardHeading,
  CardButton2,
} from "../../../components/card/Card";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { BsCircle } from "react-icons/bs";
import Logo from "../../../static_assets/logo.png";
import CustomInput from "../../../components/customFormElements/CustomInput";
import { schema } from "../../../components/schemas/schema";
import { Form, Formik } from "formik";

function StepThreeConsulente (props) {
  const handleSubmit = (values) => {
    props.next(values, true);
  };

  return (
    <CardWrapper widht="35%" marginTop="9%" marginBottom="9%">
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
          <CardHeading fontSize={"1.1rem"}>
            Inserisci il codice che <br />
            hai ricevuto al:
          </CardHeading>
          <CardHeading fontSize={"1.3rem"}>
            +39 {props.data.telefono}
          </CardHeading>
          <CardLink>modifica numero</CardLink>
        </CardFieldset>

        <Formik
          initialValues={props.data}
          validationSchema={schema.pick([
            // "cognome",
            // "nome",
            // "iva",
            // "email",
            // "telefono",
            // "password",
            // "acceptedTos",
          ])}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values }) => {
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
                    label="Codice di 4 cifre"
                    name="codice"
                    type="text"
                    placeholder="Inserisci codice"
                  />
                  <CardFieldset
                    style={{
                      marginTop: "8%",
                    }}
                  >
                    <CardLink>Non ho ricevuto il codice</CardLink>
                  </CardFieldset>
                  <CardFieldset
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "10%",
                      width: "175%",
                      marginLeft: "-42%",
                    }}
                  >
                    <CardButton2
                      type="button"
                      onClick={() => props.prev(values)}
                    >
                      Indietro
                    </CardButton2>
                    <CardButton type="submit" disabled={isSubmitting}>
                      Continua
                    </CardButton>
                  </CardFieldset>
                </Form>

                <CardFieldset style={{
                  marginTop: "8%",
                }}>
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
                    color="white"
                    style={{
                      border: "3px solid #009EE2",
                      backgroundColor: "white",
                      borderRadius: "15px",
                      margin: "1.5%",
                    }}
                  ></BsCircle>
                </CardFieldset>
              </>
            );
          }}
        </Formik>
      </CardBody>
    </CardWrapper>
    // <div className="card text-center contenitore">
    //   <div className="logo_container text-center">
    //     <img src={Logo} alt="" style={{ height: "60px", width: "60px" }} />
    //     CONSULTING BAG
    //   </div>
    //   <div className="card-body text-center">
    //     <h5>Inserisci il codice che hai ricevuto al: </h5>
    //     <h5>+39 {props.data.telefono}</h5>
    //     <a href="/mod" style={{ fontSize: "10px" }}>
    //       Modifica numero
    //     </a>
    //     <div className="container mt-4">
    //       <div className="row">
    //         <p
    //           style={{
    //             fontSize: "10px",
    //             display: "flex",
    //             padding: "0",
    //             margin: "0",
    //           }}
    //         >
    //           Codice di 4 cifre
    //         </p>
    //         <input
    //           type="text"
    //           style={{ borderRadius: "10px", border: "1px solid #CED3DC" }}
    //         />
    //         <a href="/mod" style={{ fontSize: "10px", marginTop: "4%" }}>
    //           Non ho ricevuto il codice
    //         </a>
    //       </div>
    //     </div>
    //     <div
    //       className="text-center"
    //       style={{ display: "flex", justifyContent: "center" }}
    //     >
    //       <button
    //         className="button2"
    //         style={{ marginRight: "4%" }}
    //         onClick={() => props.prev()}
    //       >
    //         Indietro
    //       </button>
    //       <button
    //         className="btn btn-primary button"
    //         style={{ marginLeft: "4%" }}
    //         onClick={handleSubmit}
    //       >
    //         Continua
    //       </button>
    //     </div>
    //   </div>
    //   <div className="text-center">

    //   </div>
    // </div>
  );
};
export default StepThreeConsulente;
