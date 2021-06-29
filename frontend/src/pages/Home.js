import React, { useEffect, useState } from "react";
import { Table, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./home.css";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Ticket from "../components/Ticket";
import Paginate from "../components/Paginate";
import { InputGroup, FormControl } from "react-bootstrap";

import {
  listTickets,
  deleteTicket,
  createTicket,
} from "../actions/ticketActions";

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


  const [localtickets, setTickets] = useState([]);

  useEffect(() => {
    dispatch(listTickets(keyword, pageNumber));
  }, [
    dispatch,
    keyword,
    pageNumber,
    successCreate,
    successDelete,
    createdTicket,
    successHeadingCreate,
    successUpdate
  ]);

  useEffect(() => {
    setTickets(tickets);
  }, [tickets]);

  const [name, setName] = useState("");

  // useEffect(()=>{

  // },[tickets])

  const createProductHandler = () => {
    dispatch(createTicket());
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
           
          {localStorage.getItem("response")?
       <Button className="my-3" onClick={createProductHandler}>
       <i className="fas fa-plus"></i> Create Ticket
     </Button>
    :
    "" 
    }
            
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
        </>
      )}
    </>
  );
};

export default Home;
