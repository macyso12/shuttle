import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

export const Nav = styled.nav`
  background: #ba181b;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-weight: 500;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 1rem;
  margin-bottom: 0.5px
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #6a040f;
    border-bottom: 2px solid #6a040f;
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

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 10px;
  background: white;
  padding: 10px 22px;
  color: #a4161a;
  border: none;
  font-weight: 700;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #df8080;
    color: black;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
