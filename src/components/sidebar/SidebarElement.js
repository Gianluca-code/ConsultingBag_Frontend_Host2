import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
//import  { Breakpoint } from 'react-socks';

export default function SidebarElement(props) {

      return (
        <NavLink exact to={{ pathname: props.link }} activeClassName="active">
              <div className="sottomenu shadow-sm">
                  <Container className="noPad">
                      <Row>
                        <Col md="1">
                        {props.icon}
                        </Col>
                          {/*<Breakpoint className="col-md-auto" customQuery="(min-width: 1000px)" style={{ paddingLeft: "13%", paddingTop: "1%"}}>
                         {props.text}
                      </Breakpoint>*/}
                      </Row>
                  </Container>
              </div>
          </NavLink>
      );
}


