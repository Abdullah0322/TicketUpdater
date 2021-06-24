import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createTicket } from "../actions/ticketActions";

import { TICKET_CREATE_RESET } from "../constants/ticketConstants";

const CreateTicket = () => {
    const [ticketdetails,setTicketDetails]=useState({title:"",url:"",status:"",priority:""});
 
  const dispatch = useDispatch();
  const ticketCreate = useSelector((state) => state.ticketCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
  } = ticketCreate;
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: TICKET_CREATE_RESET });
      window.location.reload();
    }
    else{
        setTicketDetails(ticketdetails)
    }
  },[dispatch, successCreate]);
  
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createTicket({
     ticketdetails
      })
    );
  };
  const onChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setTicketDetails({
      ...ticketdetails,
      [e.target.name]: e.target.value,
    });
  };

 
  return (
    <Container>
      <h1>Create a Ticket</h1>
      <br></br>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Ticket Title</Form.Label>
              <Form.Control
                type="title"
                placeholder="Enter Title"
                name="title"
                value={ticketdetails.title}
                onChange={onChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="name">
              <Form.Label>Ticket URL</Form.Label>
              <Form.Control
                type="url"
                placeholder="Enter URL"
                value={ticketdetails.url}
                name="url"
                onChange={onChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="name">
              <Form.Label>Status</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Status"
                name="status"
                value={ticketdetails.status}
                onChange={onChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="name">
              <Form.Label>Priority</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Priority"
                name="priority"
                value={ticketdetails.priority}
                onChange={onChange}
              ></Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary">
              Create Ticket
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default CreateTicket;
