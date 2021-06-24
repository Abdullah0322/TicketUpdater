import asyncHandler from "express-async-handler";
import Heading from '../models/headingModel.js'



const getHeadings  = asyncHandler(async (req, res) => {
    const headings = await Heading.find({})
    res.json(headings)
  })


  const createHeading = asyncHandler(async (req, res) => {
    const heading = new Heading({
      heading: [{'name':"Ticket Title"}],
    })
  
    const createdHeading = await heading.save()
    res.status(201).json(createdHeading)
  })


  export { getHeadings,createHeading };