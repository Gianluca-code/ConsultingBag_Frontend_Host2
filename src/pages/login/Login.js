import React, { useState, useEffect } from "react";
import { login } from "../../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import CustomCheckbox from "../../components/customFormElements/CustomCheckbox";
import CustomInput from "../../components/customFormElements/CustomInput";
import { schema } from "../../components/schemas/schema";
import { Form, Formik } from "formik";
import Logo from "../../static_assets/logo.png";
import {
  CardWrapper,
  CardBody,
  CardFieldset,
  CardButton,
  CardHeading,
  CardHeader, CardLink,
} from "../../components/card/Card";
import { Container, Row, Col } from "react-bootstrap";
import "../../components/customFormElements/formStyle.css";
import {Link, useNavigate} from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const nextPage = useSelector((state) => state.nextPage);
  const {message} = useSelector((state) => state.message);

  const handleSubmit = (values) => {
    dispatch(login(values.username, values.password))
      .then(() => {
        navigate(nextPage===undefined ? "../overview" : "../"+nextPage);
      })
      .catch(() => {
        setError(true);
      });
  };

  useEffect(() => {
    window.scrollTo({
      top: 1,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <CardWrapper widht="35%" marginTop="6%" marginBottom="9%">
        <CardHeader>
          <Container>
            <Row style={{ justifyContent: "center" }}>
              <Col md="auto" style={{ paddingRight: "0" }}>
                <img
                  src={Logo}
                  alt=""
                  style={{ height: "60px", width: "40x" }}
                />
              </Col>
              <Col md="auto" style={{ paddingTop: "4%", paddingLeft: "0" }}>
                <CardHeading fontSize={"1.4rem"}>CONSULTING BAG</CardHeading>
              </Col>
            </Row>
          </Container>
        </CardHeader>
        <CardBody>
          <CardFieldset style={{ marginTop: "-3%" }}>
            <CardHeading fontSize={"1.2rem"}>Accedi al tuo account</CardHeading>
          </CardFieldset>
          <Formik
            initialValues={{ username: "", password: "" }}
            validationSchema={schema.pick(["username", "password"])}
            onSubmit={handleSubmit}
          >
            {({ values }) => {
              return (
                <>
                  <Form
                    style={{
                      width: "100%",
                      padding: "1% 8% 0",
                      border: "none",
                    }}
                  >
                    {error && <div className="error">{message}</div>}
                    <CustomInput
                      label={undefined}
                      name="username"
                      type="text"
                      placeholder="Inserisci username"
                    />
                    <CustomInput
                      label={undefined}
                      name="password"
                      type="password"
                      placeholder="Inserisci password"
                    />
                    <CardFieldset style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "5%",
                    }}>
                    <CustomCheckbox
                      type="checkbox"
                      name="acceptedTos"
                      span="Ricordami"
                      label={undefined}
                    />
                    </CardFieldset>
                    <CardFieldset
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "10%",
                      }}
                    >
                      <CardButton type="submit">Login</CardButton>
                    </CardFieldset>

                  </Form>
                </>
              );
            }}
          </Formik>
          <CardFieldset style={{marginTop: "4%",}}>
            <CardLink>Hai dimenticato la password</CardLink>
          </CardFieldset>
          <CardFieldset style={{marginTop: "2%",}}>
            <Link to="/registrazione">
              <CardLink>Sei un nuovo utente? Iscriviti</CardLink>
            </Link>
          </CardFieldset>
        </CardBody>
      </CardWrapper>
    </>
  );
}

export default Login;
