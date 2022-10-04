import CustomCheckbox from "../../../components/customFormElements/CustomCheckbox";
import CustomInput from "../../../components/customFormElements/CustomInput";
import { schema } from "../../../components/schemas/schema";
import { Form, Formik } from "formik";
import React, { useState} from "react";
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
import { Container, Row, Col } from "react-bootstrap";
import "../../../components/customFormElements/formStyle.css"
import {useDispatch, useSelector} from "react-redux";
import {checkCredentials} from "../../../actions/auth";


function StepOneConsulente (props){
const [error, setError]=useState(false);
  const dispatch = useDispatch();
  const { message } = useSelector(state => state.message);


  const handleSubmit = (values) => {
    dispatch(checkCredentials(values.username, values.email, values.telefono))
        .then(() => {
          props.next(values);
        })
        .catch(() => {
          setError(true);
          window.scrollTo({
            top: 1,
            behavior: 'smooth',
          });
        });
  };


  return (
    <CardWrapper widht="35%" marginTop="6%" marginBottom="9%">
      <CardHeader>
        <Container>
          <Row style={{ justifyContent: "center" }}>
            <Col md="auto" style={{ paddingRight: "0" }}>
              <img src={Logo} alt="" style={{ height: "60px", width: "40x" }} />
            </Col>
            <Col md="auto" style={{ paddingTop: "4%", paddingLeft: "0" }}>
              <CardHeading fontSize={"1.4rem"}>CONSULTING BAG</CardHeading>
            </Col>
          </Row>
        </Container>
      </CardHeader>
      <CardBody>
        <CardFieldset style={{ marginTop: "-3%" }}>
          <CardHeading fontSize={"1.2rem"}>I tuoi dati</CardHeading>
        </CardFieldset>
        <Formik
          initialValues={props.data}
          validationSchema={schema.pick([
              "username",
             "email",
             "telefono",
             "password",
             "confirmPassword",
             "acceptedTos",
          ])}
          onSubmit={handleSubmit}
        >
          {({ values }) => {
            return (
              <>
                <Form
                  style={{
                    width: "100%",
                    padding: "3% 8% 0",
                    border: "none",
                  }}
                >
                  { error && <div className="error">{message}</div>}
                    <CustomInput
                        label="Username"
                        name="username"
                        type="text"
                        placeholder="Inserisci username"
                    />
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
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Inserisci password"
                  />
                    <CustomInput
                        label="Conferma password"
                        name="confirmPassword"
                        type="password"
                        placeholder="Inserisci password"
                    />
                  <CustomCheckbox
                    type="checkbox"
                    name="acceptedTos"

                    label={undefined}
                  />
                  <CardFieldset
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "10%",
                      width: "150%",
                      marginLeft: "-25%",
                    }}
                  >
                    <CardButton2
                      type="button"
                      onClick={() => props.prev(values, true)}
                    >
                      Indietro
                    </CardButton2>
                    <CardButton type="submit" >
                      Continua
                    </CardButton>
                  </CardFieldset>
                </Form>

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
              </>
            );
          }}
        </Formik>
      </CardBody>
    </CardWrapper>
  );
};
export default StepOneConsulente;
