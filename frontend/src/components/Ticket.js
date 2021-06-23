import React from "react";
import { Table } from "react-bootstrap";

const Ticket=({ticket})=>{
    console.log(ticket)
return(

    <Table className="table table-borderless" variant="dark">
    <thead>
      <tr>
        <th>Ticket Title</th>
        <th>Priority</th>
        <th>QA Comments</th>
        <th>Daniels Comments</th>

      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          {ticket.title}
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
        </td>
      </tr>
      <tr>
        <td>Ticket URL</td>
        <td>Status</td>
        <td>ETA</td>
      </tr>
      <tr>
        <td><a href="http://example.com">
  
    click here to view the ticket
  
</a></td>
        <td>Done</td>
        <td>2 hours</td>
      </tr>
    </tbody>
  </Table>
    
);


}

export default Ticket