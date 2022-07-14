import React from "react";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

import Logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <div
      style={{
        backgroundColor: "#800000",
        alignItems: "center",
        flex: 1,
        alignSelf: "center",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <Nav>
        <NavLink to="/">
          <img
            src={Logo}
            alt="Shuttle Logo"
            style={{
              height: "150%",
              backgroundColor: "transparent",
              marginTop: "40%",
            }}
          />
        </NavLink>

        <NavMenu>
          <input
            type="text"
            placeholder="Search..."
            style={{
              boxShadow: "4px 3px 10px rgb(0 0 0 / 0.2)",
              borderRadius: "5px",
              minWidth: "40rem",
              marginRight: "20px",
            }}
          />

          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/clubs" activeStyle>
            Clubs
          </NavLink>

          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </div>
  );
};

export default Navbar;
