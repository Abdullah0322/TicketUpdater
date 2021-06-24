import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table, InputGroup, FormControl } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { deleteTicket } from "../actions/ticketActions";
import "./input.css";
const Ticket = ({ ticket }) => {
  console.log(ticket);
  const [input, setInput] = useState(false);
  const dispatch = useDispatch();
  const ticketDelete = useSelector((state) => state.ticketDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = ticketDelete;
  useEffect(() => {}, [successDelete]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteTicket(id));
    }
  };

  return (
    <Table className="table table-borderless" variant="dark">
      <thead>
        <tr>
          {ticket.heading.map((head) => (
            <th>{head.name}</th>
          ))}

          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {ticket.body.map((body) => (
            <td>{body.name}</td>
          ))}
          {/* <td>
           {input==false? ticket.title :
            <InputGroup className="mb-3" >
          
            <FormControl
              placeholder={ticket.title}
            />
          </InputGroup>
           } 
         
            
           
            </td>
          <td>{ticket.priority}</td>
          <td>
            Zubair is creating exports for triangle question and waiting for
            response about the number of samples in a set. Dmitrii is creating
            charts for triangle test.
          </td>
          <td>
            Zubair is creating exports for triangle question and waiting for
            response about the number of samples in a set. Dmitrii is creating
            charts for triangle test.
          </td> */}
          <td>
            {" "}
            <Button
              variant="primary"
              className="btn-sm"
              onClick={() => {
                // key = product;

                setInput(true);
              }}
            >
              Edit
            </Button>
            <Button
              variant="danger"
              className="btn-sm"
              onClick={() => deleteHandler(ticket._id)}
            >
              Delete
            </Button>
          </td>
        </tr>
        {/* <tr>
          <td>Ticket URL</td>
          <td>Status</td>
          <td>ETA</td>
        </tr>
        <tr>
          <td>
            <a href={ticket.url}>click here to view the ticket</a>
          </td>
          <td>{ticket.status}</td>
          <td>2 hours</td>
        </tr> */}
      </tbody>
    </Table>
  );
};

export default Ticket;
