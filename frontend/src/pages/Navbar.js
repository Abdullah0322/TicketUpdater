import React, { Component } from "react";

import { Navbar, Container, Nav, Dropdown, Button,NavDropdown} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
import "./animate.min.css";
import "./demo.css";

import "./light-bootstrap-dashboard-react.css"
const Navbars=()=>{
  const logout = () => {
    localStorage.removeItem("response");
    window.location.reload();
  };
  let comment = JSON.parse(localStorage.getItem("response"));
    console.log(comment);
  
    return (
        <Navbar bg="light" expand="lg" collapseOnSelect>
          <Container >
           
            
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="nav mr-auto" navbar>
              
              <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
            <LinkContainer to='/'>
            <Navbar.Brand>{`Daily Ticket Update`}</Navbar.Brand>
           
          </LinkContainer>

            </div>
                
              </Nav>
              <Nav className="ml-auto" navbar>
                <Nav.Item>
                <LinkContainer to='/sendmail'>
                <Nav.Link>
                {`Send Email`}
                </Nav.Link>
               
              </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                {comment? (
                <NavDropdown title={comment.data.user.name} id='username'>
                  <NavDropdown.Item onClick={logout}>
                    {`Logout`}
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    {`Sign In`} 
                  </Nav.Link>
                </LinkContainer>
              )}
               
            
                </Nav.Item>
               
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Navbars