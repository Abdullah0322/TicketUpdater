import mongoose from "mongoose";
const headSchema = mongoose.Schema({
  name: { type: String },
});

const bodySchema = mongoose.Schema({
  name: { type: String },
});

const ticketSchema = mongoose.Schema(
  {
    heading: [headSchema],
    body: [bodySchema],
    heading2:[headSchema],
    body2:[bodySchema]
  },
  
  {
    timestamps: true,
  }
);

const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;
