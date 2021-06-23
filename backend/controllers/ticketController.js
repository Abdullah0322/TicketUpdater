import asyncHandler from 'express-async-handler'
import Ticket from '../models/ticketModel.js'

const getTickets = asyncHandler(async (req, res) => {
    const pageSize = 10
    const page = Number(req.query.pageNumber) || 1
  
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: 'i',
          },
        }
      : {}
  
    const count = await Ticket.countDocuments({ ...keyword })
    const tickets = await Ticket.find({ ...keyword })
      .limit(pageSize)
      .skip(pageSize * (page - 1))
  
    res.json({ tickets, page, pages: Math.ceil(count / pageSize) })
  })


  const getTicketsById = asyncHandler(async (req, res) => {
    const ticket = await Ticket.findById(req.params.id)
  
    if (ticket) {
      res.json(ticket)
    } else {
      res.status(404)
      throw new Error('Ticket not found')
    }
  })

  const deleteTicket = asyncHandler(async (req, res) => {
    const ticket = await Ticket.findById(req.params.id)
  
    if (ticket) {
      await ticket.remove()
      res.json({ message: 'Ticket removed' })
    } else {
      res.status(404)
      throw new Error('Ticket not found')
    }
  })
  

  const createTicket = asyncHandler(async (req, res) => {
    const ticket = new Ticket ({
      title: 'Sample Title',
      url: "https:www.facebook.com",
      status: 'Done',
      priority: 'High',
    })
  
    const createdTicket = await ticket.save()
    res.status(201).json(createdTicket)
  })


  const updateTicket = asyncHandler(async (req, res) => {
    const {
      title,
      url,
      status,
      priority,
      
    } = req.body
  
    const ticket = await Ticket.findById(req.params.id)
  
    if (ticket) {
      ticket.title = title
      ticket.url = url
      ticket.status = status
      ticket.priority = priority

  
      const updatedTicket = await ticket.save()
      res.json(updatedTicket)
    } else {
      res.status(404)
      throw new Error('Ticket not found')
    }
  })

export{


    getTickets,
    getTicketsById,
    createTicket,
    deleteTicket,
    updateTicket





}