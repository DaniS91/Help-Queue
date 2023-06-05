import React from "react";
import ticketsImage from "./../img/tickets-image.png"

function Header() {
  return (
    <React.Fragment>
      <h1><img src={ticketsImage} alt="a ticket" height="32"/>Help Queue</h1>
    </React.Fragment>
  );
}

export default Header;