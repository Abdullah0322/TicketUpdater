import React from 'react'
import { Route } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Button } from '@material-ui/core';
import userService from "../userServices";

const getLoggedInUser = () => {
  try {
   localStorage.getItem("user");
      
  } catch (ex) {
    return null;
  }
};
const logout = () => {
  localStorage.removeItem("response");
  window.location.reload();
};
let comment = JSON.parse(localStorage.getItem("response"));
  console.log(comment);


const Header = () => {


  return (
    
    <header>
      <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect className="header">
        <Container>
         
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
          <LinkContainer to='/'>
            <Navbar.Brand>{`Daily Ticket Update`}</Navbar.Brand>
           
          </LinkContainer>
        
           
            <Nav className='ml-auto'>
           
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
    </header>
  )
}

export default Header
