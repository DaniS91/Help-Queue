import React from "react";
import Header from "./Header";
import TicketList from "./TicketList"

function App() {
  const name = "Thato";
  const name2 = "Haley";
  return (
    <React.Fragment>
      <Header />
      <h3>3a</h3>
      <h3>{name} and {name2}</h3>
      <p><em>Firebase entries not saving!</em></p>
      {/* This is a JSX comment */}
      <hr/>
    </React.Fragment>
  );
}

export default App;
