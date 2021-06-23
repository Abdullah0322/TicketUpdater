import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";

import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateTicket from "./pages/Createticket";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <main className="py-3">
          <Container>
            <Route path="/" exact component={Home} />

            <Route path="/create" component={CreateTicket} />
          </Container>
        </main>
      </Router>
    </>
  );
}

export default App;
