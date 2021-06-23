import React from 'react'
import { Route } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'


const Header = () => {


  return (
    <header>
      <Navbar bg='primary' variant='dark ' expand='lg' collapseOnSelect>
        <Container>
         
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
          <LinkContainer to='/'>
            <Navbar.Brand>{`Dailt Ticket Update`}</Navbar.Brand>
          </LinkContainer>
           
            <Nav className='ml-auto'>
           
              <LinkContainer to='/create'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Create a Ticket
                </Nav.Link>
              </LinkContainer>
           
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
