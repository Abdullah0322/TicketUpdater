
import React from 'react';
import { Form, Button } from "react-bootstrap";
import { Container, Row, Col } from 'react-bootstrap'

const CreateTicket=()=>{
  return(
    <Container>
         <h1>Create a Ticket</h1>
    <Row className='justify-content-md-center'>
      <Col xs={12} md={6}>
      <Form >
            <Form.Group controlId="name">
              <Form.Label>Ticket Title</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
         <Button type="submit" variant="primary">
              Create
            </Button>
          </Form>
      </Col>
    </Row>
  </Container>
       
         
   
    );
}
export default CreateTicket