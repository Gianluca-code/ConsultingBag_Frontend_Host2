import React from "react";
import styled from "styled-components";

export const CardWrapper = styled.div`
  //overflow: hidden;
  padding: 2rem 0 2rem;
  margin: ${(props) => props.marginTop || "2rem"} auto
    ${(props) => props.marginBottom || "0"};
  background: white;
  width: ${(props) => props.widht || "40%"};
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.2), 0 0px 40px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
`;

export const CardHeader = styled.header`
  padding-top: 1rem;
  padding-bottom: 2rem;
`;

export const CardHeading = styled.h3`
  font-size: ${(props) => props.fontSize || "2rem"};
  font-weight: bold;
  margin: auto;
  text-align: center;
`;

export const CardText = styled.p`
  font-size: ${(props) => props.fontSize || "1rem"};
  font-weight: ${(props) => props.fontWeight || "normal"};
  margin: ${(props) => props.margin || "auto"};
  text-align: ${(props) => props.textAlign || "center"};
  color: ${(props) => props.color || "black"};
`;





export const CardBody = styled.div`
  padding-right: 5%;
  padding-left: 5%;
`;

export const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;
  text-align: center;

  & + & {
    margin-top: 2rem;
  }

  &:nth-last-of-type(2) {
    margin-top: 2rem;
  }

  &:last-of-type {
    text-align: center;
  }
`;

export const CardInput = styled.input`
  padding: 0.5rem;
  font-size: 0.8rem;
  color: #000;
  border: 1px solid #ced4da;
  background-color: #fff;
  border-radius: 5px;
  outline: none;
  width: 100%;
`;

export const CardButton = styled.button`
  display: block;
  padding: 0.35rem 1.5rem;
  background-color: #009ee2;
  color: #fff;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin: auto;
  width: auto;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;

  &:hover {
    background-color: #0074a8;
  }
`;
export const CardButton2 = styled.button`
  display: block;
  padding: 0.35rem 1.5rem;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin: auto;
  width: auto;
  background-color: #fff;
  text-decoration: underline;
  color: #009ee2;
`;
export const CardLink = styled.a`
  display: inline-block;
  font-size: 12px;
  text-decoration: none;
  color: #aaa;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: color 0.25s ease-in;

  &:hover {
    color: #777;
  }
`;
