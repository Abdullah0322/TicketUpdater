import mongoose from 'mongoose'
const headSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
      },
)

const bodySchema = mongoose.Schema(
  {
    name: { type: String, required: true },
      },
)

const ticketSchema = mongoose.Schema(
    {
      heading:[headSchema],

      body:[bodySchema]

      
    },
    {
      timestamps: true,
    }
  )
  
  const Ticket = mongoose.model('Ticket', ticketSchema)
  
  export default Ticket