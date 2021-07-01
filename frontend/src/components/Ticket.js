import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table, InputGroup, FormControl } from "react-bootstrap";
import { Card } from "react-bootstrap";
import {
  deleteTicket,
  createTicketHeading,
  updateTicket,
  updateTicketbody,
} from "../actions/ticketActions";
import "./ticket.css";
import axios from "axios";

const Ticket = ({ ticket }) => {
  const [input, setInput] = useState(false);
  const [input1, setInput1] = useState(false);
  const [input2, setInput2] = useState(false);
  const [input3, setInput3] = useState(false);
  const [button, setButton] = useState(false);
  const [button1, setButton1] = useState(false);

  const [button2, setButton2] = useState(false);

  const [button3, setButton3] = useState(false);

  const [headingName, setHeadingName] = useState(ticket.heading);
  const [bodyName, setBodyName] = useState(ticket.body);
  const [bodyName2, setBodyName2] = useState(ticket.body2);
  const [headingName2, setheadingName2] = useState(ticket.heading2);

  const [data, setData] = useState(ticket.heading);

  const dispatch = useDispatch();
  const ticketDelete = useSelector((state) => state.ticketDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = ticketDelete;
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

  useEffect(() => {}, [successDelete, successHeadingCreate]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteTicket(id));
    }
  };

  const submitHandler = (e) => {
    dispatch(createTicketHeading(ticket._id, {}));
  };
  const handleChange = (e, i) => {
    const clonedData = [...headingName];
    console.log("Handle change => ", e.target.value, "index", i);

    ticket.heading[i] = e.target.value;
  };

  const updateTicke = (e, i) => {
    console.log("index", i);

    console.log("update headingName", headingName, "index", i);

    ticket.heading[i] = headingName;
    axios.post(`/api/tickets/${ticket._id}/heading`, ticket.heading);

    console.log("ticket.heading: ", ticket.heading);
  };

  const testfunction = (e, i) => {
    e.persist();
    console.log("-----------------", e.target.value, "ine", i);
    handleChange(e, i);
  };

  const testbody = (e, i) => {
    e.persist();
    console.log("-----------------", e.target.value, "ine", i);
    handleBody(e, i);
  };
  const updateBody = (e, i) => {
    ticket.body[i] = bodyName;
    axios.post(`/api/tickets/${ticket._id}/body`, ticket.body);
    console.log(ticket._id);
  };

  const handleBody = (e, i) => {
    const clonedData = [...bodyName];
    console.log("Handle change => ", e.target.value, "index", i);
    ticket.body[i] = e.target.value;
    console.log("ticket.body[i]: ", ticket.body);
  };
  const testHeading = (e, i) => {
    e.persist();
    console.log("-----------------", e.target.value, "ine", i);
    handleHeading2(e, i);
  };
  const updateHeading2 = (e, i) => {
    ticket.heading2[i] = headingName2;
    axios.post(`/api/tickets/${ticket._id}/heading2`, ticket.heading2);
    console.log(ticket._id);
  };
  const handleHeading2 = (e, i) => {
    const clonedData = [...headingName2];
    console.log("Handle change => ", e.target.value, "index", i);
    ticket.heading2[i] = e.target.value;
    console.log("ticket.body[i]: ", ticket.body);
  };

  const testBody2 = (e, i) => {
    e.persist();
    console.log("-----------------", e.target.value, "ine", i);
    handleBody2(e, i);
  };
  const updateBody2 = (e, i) => {
    ticket.body2[i] = bodyName2;
    axios.post(`/api/tickets/${ticket._id}/body2`, ticket.body2);
    console.log(ticket._id);
  };
  const handleBody2 = (e, i) => {
    const clonedData = [...bodyName2];
    console.log("Handle change => ", e.target.value, "index", i);
    ticket.body2[i] = e.target.value;
    console.log("ticket.body[i]: ", ticket.body);
  };

  return (
    <div>
      {localStorage.getItem("response") ? (
        <Button
          variant="danger"
          className="btn-sm"
          onClick={() => deleteHandler(ticket._id)}
        >
          Delete Ticket
        </Button>
      ) : (
        ""
      )}
      {localStorage.getItem("response") ? (
        <Button
          variant="primary"
          className="btn-sm"
          onClick={() => submitHandler(ticket._id)}
        >
          Add Heading
        </Button>
      ) : (
        ""
      )}
      

      <Table className="table table-borderless" variant="dark">
        <thead>
          <tr>
            {ticket &&
              ticket.heading.map((head, i) => (
                <th key={i}>
                  {" "}
                  {input == false ? (
                    <h6 className="head">{head}</h6>
                  ) : (
                    <InputGroup className="mb-3">
                      <FormControl
                        placeholder={head}
                        name={head.headingName}
                        value={head.headingName}
                        onChange={(e) => testfunction(e, i)}
                        // onChange={set}
                        // value={hea  d && head.name}
                        // onChange={(e) => {
                        //   console.log(head._id);
                        //   setArr(e.target.value);
                        //   // ticket.heading[i].name = e.target.value
                        //  console.log(e.target.name)
                        // }}
                      />
                    </InputGroup>
                  )}
                </th>
              ))}

            <th>
              {button == false ? (
                <Button
                  variant="primary"
                  className="btn-sm"
                  onClick={() => {
                    // key = product;

                    setInput(true);
                    setButton(true);
                  }}
                >
                  Edit
                </Button>
              ) : (
                <Button
                  variant="primary"
                  className="btn-sm"
                  onClick={() => {
                    // submitHandle();
                    updateTicke();
                    // key = product;
                    setButton(false);
                    setInput(false);
                  }}
                >
                  Update
                </Button>
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {ticket.body.map((body, i) => (
              <td key={i}>
                {input1 == false ? (
                  <div className="body"> {body}</div>
                ) : (
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder={body}
                      name={body.bodyName}
                      value={body.bodyName}
                      onChange={(e) => testbody(e, i)}
                    />
                  </InputGroup>
                )}
              </td>
            ))}
            <td>
              {" "}
              {button1 == false ? (
                <Button
                  variant="primary"
                  className="btn-sm"
                  onClick={() => {
                    // key = product;

                    setInput1(true);
                    setButton1(true);
                  }}
                >
                  Edit
                </Button>
              ) : (
                <Button
                  variant="primary"
                  className="btn-sm"
                  onClick={() => {
                    updateBody();

                    setButton1(false);
                    setInput1(false);
                  }}
                >
                  Update
                </Button>
              )}
            </td>
          </tr>
          <tr>
            {ticket.heading2.map((head2, i) => (
              <td key={i}>
                {input2 == false ? (
                  <h6 className="head">
                    <b>{head2}</b>
                  </h6>
                ) : (
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder={head2}
                      name={head2.bodyName}
                      value={head2.bodyName}
                      onChange={(e) => testHeading(e, i)}
                    />
                  </InputGroup>
                )}
              </td>
            ))}
            <td>
              {" "}
              {button2 == false ? (
                <Button
                  variant="primary"
                  className="btn-sm"
                  onClick={() => {
                    // key = product;

                    setInput2(true);
                    setButton2(true);
                  }}
                >
                  Edit
                </Button>
              ) : (
                <Button
                  variant="primary"
                  className="btn-sm"
                  onClick={() => {
                    updateHeading2();

                    setButton2(false);
                    setInput2(false);
                  }}
                >
                  Update
                </Button>
              )}
            </td>
          </tr>
          <tr>
            {ticket.body2.map((body2, i) => (
              <td key={i}>
                {input3 == false ? (
                  <b>{body2}</b>
                ) : (
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder={body2}
                      name={body2.bodyName}
                      value={body2.bodyName}
                      onChange={(e) => testBody2(e, i)}
                    />
                  </InputGroup>
                )}
              </td>
            ))}
            <td>
              {" "}
              {button3 == false ? (
                <Button
                  variant="primary"
                  className="btn-sm"
                  onClick={() => {
                    // key = product;

                    setInput3(true);
                    setButton3(true);
                  }}
                >
                  Edit
                </Button>
              ) : (
                <Button
                  variant="primary"
                  className="btn-sm"
                  onClick={() => {
                    updateBody2();

                    setButton3(false);
                    setInput3(false);
                  }}
                >
                  Update
                </Button>
              )}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Ticket;
