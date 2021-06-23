import React ,{ useEffect }from "react";
import { Table,Row,Col } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import "./home.css";
import Message from '../components/Message'
import Loader from '../components/Loader'
import Ticket from "../components/Ticket";
import Paginate from "../components/Paginate";
import { listTickets } from '../actions/ticketActions'


const Home = ({ match }) => {
   
    const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const ticketList = useSelector((state) => state.ticketList)
  const { loading, error, tickets, page, pages } = ticketList
  useEffect(() => {
    dispatch(listTickets(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
    
      
      
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {tickets.map((ticket) => (
            
                <Ticket ticket={ticket} />
              
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
