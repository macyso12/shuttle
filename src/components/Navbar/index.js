import React from 'react'

import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';


const Navbar = () => {
    return (
        <div>
            <Nav>
                <NavLink to="/">
                    <h1>Shuttle</h1>
                </NavLink>

                <Bars />

                <NavMenu>

                    <input type="text" placeholder="Search..." />


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
                        <NavBtnLink to='/signin'>
                            Sign In
                        </NavBtnLink>
                    </NavBtn>

                </NavMenu>



            </Nav>
        </div>
    );
}

export default Navbar