import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: white;
  color: #009ee2;
  border: none;
  border-radius: 5px;
  margin-left: 2%;
  padding: 5px;
  width: 30vh;
`;

const LandingContainer = styled.div`
  color: white;
  text-align: center;
  margin-top: 15%;
  font-weight: 700;
`;

const H1 = styled.h1`
  font-weight: 700;
  margin-bottom: 2%;
`;

export default function NotFound(props) {
        document.body.style.backgroundColor = "#009EE2";
        return (
            <LandingContainer>
                <H1>Pagina non trovata</H1>
                <Link to={props.page}>
                    <Button>{props.name}</Button>
                </Link>
            </LandingContainer>
        );
}


