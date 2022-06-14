import React from 'react';

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavLink to="/" style={{backgroundColor: '#C4C4C4'}}>
          <h1
            style={{
              fontSize: 20,
              padding: '10px',
              backgroundColor: '#C4C4C4',
              borderRadius: '10%',
            }}
          >
            Shuttle
          </h1>
        </NavLink>

        <Bars />

        <NavMenu>
          <input
            type="text"
            placeholder="Search..."
            style={{
              boxShadow: '4px 3px 10px rgb(0 0 0 / 0.2)',
              borderRadius: '5px',
              minWidth: '40rem',
              marginRight: '20px',
            }}
          />

          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/clubs" activeStyle>
            Clubs
          </NavLink>
          <NavLink to="/account" activeStyle>
            Account
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
