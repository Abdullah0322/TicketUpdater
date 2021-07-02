import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";

import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateTicket from "./pages/Createticket";
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import Email from "./pages/Email";

function App() {
  return (
    
      <Router>
        <Header></Header>
        {/* <Navbars></Navbars> */}
        
        <main className="py-3">
          <Container>
            <Route path="/" exact component={Home} />

            <Route path="/create" component={CreateTicket} />
            <Route path="/login" component={Login} />
            <Route path="/sendmail" component={Email} />
            
            

          </Container>

        </main>
      </Router>
    
  );
}

export default App;
