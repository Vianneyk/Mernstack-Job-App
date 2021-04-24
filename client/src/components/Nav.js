import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Nav() {
    const {loginWithRedirect, logout, user, isLoading} = useAuth0();  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Job App
      </a>
      {!isLoading && !user && (
      <button
        className = "btn btn-primary btn-block"
        onClick = {() => loginWithRedirect()} 
      >
        login
      </button>
    )}
    {!isLoading && user && (
      <button
      className = "btn btn-primary btn-block"
      onClick = {() => logout()} 
    >
      Log Out
    </button>
    )}  
    </nav>
  );
}

export default Nav;
