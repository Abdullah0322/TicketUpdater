import React ,{ useEffect } from "react";
import { Table,Row,Col,Button} from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import "./home.css";
import Message from '../components/Message'
import Loader from '../components/Loader'
import Ticket from "../components/Ticket";
import Paginate from "../components/Paginate";
import { listTickets,deleteTicket, createTicket } from '../actions/ticketActions'


const Home = ({ match }) => {
   
    const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const ticketList = useSelector((state) => state.ticketList)
  const { loading, error, tickets, page, pages } = ticketList
  
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

  
  console.log(tickets)
  useEffect(() => {
    dispatch(listTickets(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber,successCreate,successDelete,
    createdTicket
    ,])

  
  const createProductHandler = () => {
    dispatch(createTicket());
  };
  return (
    <>
    
      
      
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>

          <Row>
          <Button className="my-3" onClick={createProductHandler}>
            <i className="fas fa-plus"></i> Create Product
          </Button>
            {tickets && tickets.map((ticket) => (
             <Col key={ticket._id}  md={12} >
                <Ticket ticket={ticket} />
                
                </Col>
            ))}
            
          </Row>
          
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        
        </>
      )}
    </>
  );
};


export default Home;
