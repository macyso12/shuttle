import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: #800000;
  height: 80px;
  display: flex;
  justify-content: space-around;
  padding: 0.5rem 1rem;
  z-index: 10;
  background: transparent;
`;

export const NavLink = styled(Link)`
  color: #000;
  font-weight: 500;
  font-size: 12px;
  display: flex;
  align-items: center;
  font-family: Lato;
  text-decoration: none;
  background-color:#800000;
  margin: 1rem;
  margin-bottom: 0.5px
  height: 100%;
  cursor: pointer;
  justify-content: space-between;
    color: #ffffff;

  &:hover {
    color: #FF5454;
    border-bottom: 2px solid #FF5454;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: white;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  background-color: #800000;

  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  font-size: 12px;
  box-shadow: 4px 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 10px;
  margin-right: 24px @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 10px;
  background: white;
  padding: 10px 22px;
  color: #000;
  border: none;
  font-family: Lato;
  font-weight: 700;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #ff5454;
    color: white;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
