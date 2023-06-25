import React from "react";
import ticketsImage from "./../img/tickets-image.png"
import { Link } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <h1><img src={ticketsImage} alt="a ticket" height="32"/> Help Queue</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sign-in">Sign In</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Header;