import mongoose from 'mongoose'

const headSchema = mongoose.Schema(
    {
      name: { type: String, required: true },
        },
  )
const headingSchema = mongoose.Schema(
    {
      heading:[headSchema]
      
    },
    {
      timestamps: true,
    }
  )
  
  const Heading = mongoose.model('Heading', headingSchema)
  export default Heading