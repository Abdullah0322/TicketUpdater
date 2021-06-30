import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
const Email=()=>{
   
  
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const useremail=localStorage.getItem("email");
    console.log('email: ', useremail);
    

    const submitHandler = (e) => {
        e.preventDefault();

      const datatosend={
        name,
        email
      }
      axios.post(`/api/sendmail` ,datatosend)
      console.log(datatosend)
      console.log(name)
      console.log(email)
      }

    return (
        <Container>
         
          <br></br>
          <Row className="justify-content-md-center">
            <Col xs={12} md={6}>
            <h1>Send Template as Email</h1>
              <Form onSubmit={submitHandler}>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Enter Name"
                    name="name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Form.Group controlId="name">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    name="email"
                    onChange={(e)=>setEmail(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Button type="submit" variant="primary">
                  Send Mail
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      );


}


export default Email