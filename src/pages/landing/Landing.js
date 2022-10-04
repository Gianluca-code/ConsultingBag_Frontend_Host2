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
  width: 17vh;
`;

const LandingContainer = styled.div`
  color: white;
  text-align: left;
  margin-top: 15%;
  font-weight: 700;
`;

const H1 = styled.h1`
  font-weight: 700;
  margin-bottom: 2%;
`;

function Landing (){
    document.body.style.backgroundColor = "#009EE2";
    return (
      <LandingContainer>
        <H1>Offri o cerchi consulenza?<br/>
        Iscriviti in pochi semplici passi</H1>
        <Link to="/registrazione">
          <Button>Iscriviti</Button>
        </Link>
      </LandingContainer>
    );
}

export default Landing;
