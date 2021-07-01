import asyncHandler from "express-async-handler";
import Ticket from "../models/ticketModel.js";

const getTickets = asyncHandler(async (req, res) => {
  const pageSize = 100;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const count = await Ticket.countDocuments({ ...keyword });
  const tickets = await Ticket.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ tickets, page, pages: Math.ceil(count / pageSize) });
});

const getTicketsById = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);

  if (ticket) {
    res.json(ticket);
  } else {
    res.status(404);
    throw new Error("Ticket not found");
  }
});

const deleteTicket = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);

  if (ticket) {
    await ticket.remove();
    res.json({ message: "Ticket removed" });
  } else {
    res.status(404);
    throw new Error("Ticket not found");
  }
});

// const Ticketcreate = asyncHandler(async (req, res) => {

//   const ticket = new Ticket({
//     heading: [
//       { name: req.body },

//       { name: req.body },
//       { name: req.body },
//       { name: req.body },
//     ],
//     body: [
//       { name: req.body },
//       { name: "Sample name" },
//       { name: "Sample name" },
//       { name: "Sample name" },
//     ],
//   });

//   const createdTicket = await ticket.save();
//   res.status(201).json(createdTicket);
// });

const createTicket = asyncHandler(async (req, res) => {
  const ticket = new Ticket({
    heading: ["Ticket Title", "Priority", "Comments"],
    body: ["Sample name", "Sample name", "Sample name"],
    heading2: ["Ticket URL", "Status", "ETA"],
    body2: ["Sample name", "Sample name", "0 days"],
  });

  const createdTicket = await ticket.save();
  res.status(201).json(createdTicket);
});

const updateTicket = asyncHandler(async (req, res) => {
  const { ticketId, headingId } = req.params;

  console.log(req.body);

  // /'items.$.name': 'updated item2',

  console.log("headingId", req.params);

  const ticketFound = await Ticket.findOneAndUpdate(
    { "heading._id": headingId },
    {
      $set: { "heading.$.name": req.body.headingName },
    },
    { new: true }
  );

  // ticketFound.heading.forEach(element => {
  //   if(element._id == headingId) {
  //     element.name == req.body.headingName;
  //     return;
  //   }
  // });

  // console.log('ticketFound', ticketFound.heading[0])

  // await ticketFound.save();

  res.status(200).json(ticketFound);

  console.log(ticketFound);

  // const head = {
  //   name: req.body,
  // };

  // console.log('ticket', ticket);

  // if (ticket) {
  //   ticket.heading  = head.findById(req.params.id);
  //   const updatedTicket = await ticket.save();
  //   res.json(updatedTicket);
  // } else {
  //   res.status(404);
  //   throw new Error("Ticket not found");
  // }
});

const updateBody = asyncHandler(async (req, res) => {
  const { ticketId, bodyId } = req.params;

  console.log(req.body);

  // /'items.$.name': 'updated item2',

  console.log("bodyId", req.params);

  const ticketFound = await Ticket.findOneAndUpdate(
    { "body._id": bodyId },
    {
      $set: { "body.$.name": req.body.bodyName },
    },
    { new: true }
  );

  // ticketFound.heading.forEach(element => {
  //   if(element._id == headingId) {
  //     element.name == req.body.headingName;
  //     return;
  //   }
  // });

  // console.log('ticketFound', ticketFound.heading[0])

  // await ticketFound.save();

  res.status(200).json(ticketFound);

  console.log(ticketFound);

  // const head = {
  //   name: req.body,
  // };

  // console.log('ticket', ticket);

  // if (ticket) {
  //   ticket.heading  = head.findById(req.params.id);
  //   const updatedTicket = await ticket.save();
  //   res.json(updatedTicket);
  // } else {
  //   res.status(404);
  //   throw new Error("Ticket not found");
  // }
});

const createHeading = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);
  const head = "sample name";

  ticket.heading.push(head);
  ticket.body.push(head);

  await ticket.save();
  res.status(201).json({ message: "Heading added" });
});

const updateTicke = asyncHandler(async (req, res) => {
  const {body} = req;
  const ticket = await Ticket.findById(req.params.id);

  // const body = ticket.body;
  // console.log('body: ', body);
  //let bodyName = ["name","ok","check"]

  // body.splicebody(body.indexOf("sample name"), 1, "newValue");
  // var arr = new Array(10), anotherArr = [1, 2, 3], result;
  ticket.body = body

  const newticket=await ticket.save();
  res.json(newticket)
  console.log('this is the ticket body',ticket.body)

});


const updateHeading = asyncHandler(async (req, res) => {
  const {body} = req;
  const ticket = await Ticket.findById(req.params.id);

  // const body = ticket.body;
  // console.log('body: ', body);
  //let bodyName = ["name","ok","check"]

  // body.splicebody(body.indexOf("sample name"), 1, "newValue");
  // var arr = new Array(10), anotherArr = [1, 2, 3], result;
  ticket.heading = body

  const newticket=await ticket.save();
  res.json(newticket)
  console.log('this is the ticket body',ticket.body)

});

const updateHeading2 = asyncHandler(async (req, res) => {
  const {body} = req;
  const ticket = await Ticket.findById(req.params.id);

  // const body = ticket.body;
  // console.log('body: ', body);
  //let bodyName = ["name","ok","check"]

  // body.splicebody(body.indexOf("sample name"), 1, "newValue");
  // var arr = new Array(10), anotherArr = [1, 2, 3], result;
  ticket.heading2 = body

  const newticket=await ticket.save();
  res.json(newticket)
  console.log('this is the ticket body',ticket.body)

});

const updateBody2 = asyncHandler(async (req, res) => {
  const {body} = req;
  const ticket = await Ticket.findById(req.params.id);

  // const body = ticket.body;
  // console.log('body: ', body);
  //let bodyName = ["name","ok","check"]

  // body.splicebody(body.indexOf("sample name"), 1, "newValue");
  // var arr = new Array(10), anotherArr = [1, 2, 3], result;
  ticket.body2 = body

  const newticket=await ticket.save();
  res.json(newticket)
  console.log('this is the ticket body',ticket.body2)

});



export {
  getTickets,
  getTicketsById,
  createTicket,
  deleteTicket,
  updateTicket,
  createHeading,
  updateBody,
  updateTicke,
  updateHeading,
  updateHeading2,
  updateBody2
};
