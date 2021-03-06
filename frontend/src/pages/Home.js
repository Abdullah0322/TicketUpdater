import React, { useEffect, useState } from "react";
import { Table, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./home.css";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Ticket from "../components/Ticket";
import Paginate from "../components/Paginate";
import { InputGroup, FormControl, Container, Card } from "react-bootstrap";
import axios from "axios";

import {
  listTickets,
  deleteTicket,
  createTicket,
} from "../actions/ticketActions";
import Meta from "../components/Meta";

const Home = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const ticketList = useSelector((state) => state.ticketList);
  let { loading, error, tickets, page, pages } = ticketList;

  const ticketDelete = useSelector((state) => state.ticketDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = ticketDelete;

  const ticketCreate = useSelector((state) => state.ticketCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    ticket: createdTicket,
  } = ticketCreate;

  const ticketHeadingCreate = useSelector((state) => state.ticketHeadingCreate);
  const {
    success: successHeadingCreate,
    loading: loadingHeadingCreate,
    error: errorHeadingCreate,
  } = ticketHeadingCreate;
  const ticketUpdate = useSelector((state) => state.ticketUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = ticketUpdate;

  const ticketHeading2Create = useSelector(
    (state) => state.ticketHeading2Create
  );
  const {
    success: successHeading2Create,
    loading: loadingHeading2Create,
    error: errorHeading2Create,
  } = ticketHeading2Create;

  const ticketHeadingDelete = useSelector((state) => state.ticketHeadingDelete);
  const {
    success: successHeadingDelete,
    loading: loadingHeadingDelete,
    error: errorHeadingDelete,
  } = ticketHeadingDelete;

  const ticketDuplicate = useSelector((state) => state.ticketDuplicate);
  const {
    success: successticketDuplicate,
    loading: loadingticketDuplicate,
    error: errorticketDuplicate,
  } = ticketDuplicate;



  const ticketHeading2Delete = useSelector(
    (state) => state.ticketHeading2Delete
  );
  const {
    success: successHeading2Delete,
    loading: loadingHeading2Delete,
    error: errorHeading2Delete,
  } = ticketHeading2Delete;

  const [localtickets, setTickets] = useState([]);
  let comment = JSON.parse(localStorage.getItem("response"));

  useEffect(() => {
    dispatch(listTickets(keyword, pageNumber));
  }, [
    dispatch,
    keyword,
    pageNumber,
    successCreate,
    successDelete,
    createdTicket,
    successticketDuplicate,
    ticketDuplicate,
    // successHeadingCreate,
    successUpdate,
    // successHeading2Create,
    // successHeadingDelete,
    // successHeading2Delete,
  ]);

  useEffect(() => {
    setTickets(tickets);
  }, [tickets]);


  // useEffect(()=>{

  // },[tickets])

  const createProductHandler = () => {
    dispatch(createTicket());
  };

  const deleteAll = () => {
    axios.delete("api/tickets/");
    window.location.reload();
    console.log("tickets delete");
  };

  return (
    <React.Fragment>
      <Meta></Meta>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Container fluid>
          {localStorage.getItem("response")?
          <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                 
                  <Col xs="12">
                    <div className="numbers">
                      <p className="card-category">Number of Tickets</p>
                      <Card.Title as="h4">{tickets.length}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">Total Amount of Tickets</div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col md="12">
                    
                    <div className="numbers">
                      {localStorage.getItem("response") ? (
                        <Button
                          className="my-3"
                          onClick={createProductHandler}
                        >
                          <i className="fas fa-plus"></i> Create New Row
                        </Button>
                      ) : (
                        <h6>You must be admin to create </h6>
                      )}
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-calendar-alt mr-1"></i>
                  Ticket Creation
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  
                  <Col xs="12">
                    <div className="numbers">
                      <p className="card-category">User Details</p>
                      <Card.Title as="h6">
                        {comment ? comment.data.user.name : "Please Login"}
                      </Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  {comment ? comment.data.user.email : ""}
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                 
                  <Col xs="8">
                    <div className="numbers">
                      <p className="card-category">Delete All</p>
                      <Card.Title as="h4">
                        {" "}
                        {localStorage.getItem("response")?
                        <Button
                        variant="danger"
                        className="btn-sm"
                        onClick={deleteAll}
                      >
                        Delete All Rows
                      </Button>
                      :<h6>You must be admin to Delete</h6>
                      
                      }
                        
                      </Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-calendar-alt mr-1"></i>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        :""  
        }
        <br></br>
        <br></br>
          <Row>
            {localtickets &&
              localtickets.map((ticket) => (
                <Col key={ticket._id} md={12}>
                  <Ticket ticket={ticket} />
                </Col>
              ))}
          </Row>

          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </Container>
      )}
    </React.Fragment>
  );
};

export default Home;
