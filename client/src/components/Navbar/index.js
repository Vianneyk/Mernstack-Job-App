import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElement";

const Navbar = () => {
  const { loginWithRedirect, logout, user, isLoading } = useAuth0();
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>MERN Stack Job App</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/jobs" activeStyle>
            Find jobs
          </NavLink>
          <NavLink to="/reviews" activeStyle>
            Reviews
          </NavLink>

          {!isLoading && !user && (
            <button className= "btn btn-primary" onClick={() => loginWithRedirect()}>login</button>
          )}

          {!isLoading && user && (
            <button className= "btn btn-primary" onClick={() => logout()}>logout</button>
          )}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
