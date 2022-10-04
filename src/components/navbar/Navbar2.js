import React, { useState } from "react";
import styled from "styled-components";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo href="">
        Counsulting Bag
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="">Our Work</MenuLink>
        <MenuLink href="">About</MenuLink>
        <MenuLink href="">Careers</MenuLink>
        <MenuLink href="">Contact</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;

const MenuLink = styled.a`
  padding: 1.3rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #000;
  transition: all 0.3s ease-in;
  font-size: 0.8rem;
  font-weight: normal;

  &:hover {
    color: #7b7fda;
  }
`;

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;
const Button = styled.button`
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
const Logo = styled.a`
  color: #000;
  padding: 1rem 0rem;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.3rem;
  text-transform: uppercase;
  span {
    font-weight: 300;
    font-size: 1.0rem;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-left: 3%;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;

  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
