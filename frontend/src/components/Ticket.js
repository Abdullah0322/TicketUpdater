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

const Ticket = ({ ticket }) => {
  console.log("ticket: ", ticket);
  const [input, setInput] = useState(false);
  const [input1, setInput1] = useState(false);
  const [input2, setInput2] = useState(false);
  const [input3, setInput3] = useState(false);
  const [button, setButton] = useState(false);
  const [headingName, setHeadingName] = useState("");
  const [bodyName, setBodyName] = useState("");
  const [data, setData] = useState(ticket.heading);
  const handleClick = () => {
    const newData = data.map((item) => {
      return { ...item, name: "update" };
    });

    setData(newData);
    console.log(newData);
  };

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
  // const heading= name
  //  const updated = (id) => {
  //     //  dispatch(updateTicket(ticket._id,heading._id,{
  //     // name

  //     //  }));

  //     const elementsIndex= ticket.heading.findIndex(element=>element.id==id)
  //     let newHeading=[...ticket.heading]
  //     newHeading[elementsIndex] = {...newHeading[elementsIndex], completed: !newHeading[elementsIndex].completed}
  //     setArr({
  //       ticket:newHeading
  //     })
  //   };

  const submitHandle = (e) => {
    console.log(ticket._id);
    dispatch(
      updateTicket({
        _id: ticket._id,
        headingName,
      })
    );

    localStorage.removeItem("index");
  };

  const submitHandl = (e) => {
    console.log(ticket._id);
    dispatch(
      updateTicketbody({
        _id: ticket._id,
        bodyName,
      })
    );

    localStorage.removeItem("index");
  };

  const [localticket, setTicket] = useState(ticket);

  useEffect(() => {
    setTicket(ticket);
  }, [ticket]);

  // const [arr,setArr]=useState([])

  // const changeHandler = (name) => {
  //   return ticket.heading.find((element) => {
  //     return element.name === name;
  //   });
  //   console.log(name);
  // };

  // function getIndex(value) {
  //   for (var i = 0; i < ticket.heading.length; i++) {
  //     if (ticket.heading[i] === value) {
  //       return i;
  //     }
  //     console.log(i);
  //   }
  //   return -1; //to handle the case where the value doesn't exist
  // }

  // const onChange=(id,value,element)=>{
  //   ticket.heading.findIndex(element=>element.id==id)
  //   setArr({
  //     value:element.value
  //   })
  // }

  // const handleChange = (e, index) => {
  //   const clonedData = [...detail];

  //   clonedData[index][e.target.name] = e.target.value;

  //   setDetail(clonedData);
  // }

  const handleChange = (e, index, _id) => {
    const clonedData = [...headingName];
    console.log(index);
    console.log(_id);
    localStorage.setItem("id", _id);
    localStorage.setItem("index", index);
    console.log(e.target.value);
    // if(e.target.name){
    //   clonedData[index][e.target.name] = e.target.value;
    // }
    //  else{

    //   console.log("we dont have value")
    //  }
    setHeadingName(e.target.value);
  };

  const bodyChange = (e, index, _id) => {
    const clonedData = [...bodyName];
    console.log(index);
    console.log(_id);
    localStorage.setItem("id", _id);
    localStorage.setItem("index", index);
    console.log(e.target.value);
    // if(e.target.name){
    //   clonedData[index][e.target.name] = e.target.value;
    // }
    //  else{

    //   console.log("we dont have value")
    //  }
    setBodyName(e.target.value);
  };
  // const handleChange = (e) => {
  //   e.preventDefault()
  //   setDetail((detail) => ({
  //     ...detail,
  //     [e.target.name]: e.target.value,
  //   }));
  //   console.log(e.target.value)
  // };
  // const handleChange = (e) => {
  //   e.preventDefault()
  //   setDetail((detail) => ({
  //     ...detail,
  //     [e.target.name]: e.target.value,
  //   }));
  //   console.log(e.target.value)
  // };
  const update = () => {
    const objIndex = localStorage.getItem("indexes");
    console.log(objIndex);

    console.log(ticket.heading);
    //Log object to Console.
    console.log("Before update: ", ticket.heading[0]);

    //Update object's name property.
    ticket.heading[objIndex].name = headingName;

    //Log object to console again.
    console.log("After update: ", ticket.heading[0]);
  };
  console.log(localticket.heading);
  return (
    <div>
      {localStorage.getItem("response")?
       <Button
       variant="danger"
       className="btn-sm"
       onClick={() => deleteHandler(ticket._id)}
     >
       Delete Ticket
     </Button>
    :
    "" 
    }
    {localStorage.getItem("response")?
       <Button
       variant="primary"
       className="btn-sm"
       onClick={() => submitHandler(ticket._id)}
     >
       Add Heading
     </Button>
    :
    "" 
    }
     
      
      <Table className="table table-borderless" variant="dark">
        <thead>
          <tr>
            {localticket &&
              localticket.heading.map((head, i) => (
                <th key={head._id}>
                  {" "}
                  {input == false ? (
                    <h6 className="head">{head.name}</h6>
                  ) : (
                    <InputGroup className="mb-3" onClick={console.log(i)}>
                      <FormControl
                        placeholder={head.name}
                        name={head.headingName}
                        value={head.headingName}
                        onChange={(e) => handleChange(e, i, head._id)}
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
                    submitHandle();
                    // key = product;
                    // setButton(false);
                    // setInput(false);
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
              <td>
                {input1 == false ? (
                  <div className="body"> {body.name}</div>
                ) : (
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder={body.name}
                      name={body.bodyName}
                      value={body.bodyName}
                      onChange={(e) => bodyChange(e, i, body._id)}
                    />
                  </InputGroup>
                )}
              </td>
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
              {button == false ? (
                <Button
                  variant="primary"
                  className="btn-sm"
                  onClick={() => {
                    // key = product;

                    setInput1(true);
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
                    submitHandl();
                    // key = product;
                    // setButton(false);
                    // setInput(false);
                  }}
                >
                  Update
                </Button>
              )}
            </td>

            <td></td>
          </tr>
          <tr>
            {ticket.heading2.map((body, i) => (
              <td>
                {input2 == false ? (
                  <h6 className="head">{body.name}</h6>
                ) : (
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder={body.name}
                      name={body.bodyName}
                      value={body.bodyName}
                      onChange={(e) => bodyChange(e, i, body._id)}
                    />
                  </InputGroup>
                )}
              </td>
            ))}
            <td>
              {button == false ? (
                <Button
                  variant="primary"
                  className="btn-sm"
                  onClick={() => {
                    // key = product;

                    setInput2(true);
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
                    submitHandle();
                    // key = product;
                    // setButton(false);
                    // setInput(false);
                  }}
                >
                  Update
                </Button>
              )}
            </td>
          </tr>

          <tr>
            {ticket.body2.map((body, i) => (
              <td>
                {input3 == false ? (
                  body.name
                ) : (
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder={body.name}
                      name={body.bodyName}
                      value={body.bodyName}
                      onChange={(e) => bodyChange(e, i, body._id)}
                    />
                  </InputGroup>
                )}
              </td>
            ))}
            <td>
              {button == false ? (
                <Button
                  variant="primary"
                  className="btn-sm"
                  onClick={() => {
                    // key = product;

                    setInput3(true);
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
                    submitHandle();
                    // key = product;
                    // setButton(false);
                    // setInput(false);
                  }}
                >
                  Update
                </Button>
              )}
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
    </div>
  );
};

export default Ticket;
