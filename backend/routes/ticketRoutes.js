import express from 'express'
const router = express.Router()
import {

getTickets,
getTicketsById,
deleteTicket,
createTicket,
updateTicket

} from '../controllers/ticketController.js'


router.route('/').get(getTickets).post(createTicket)
router
  .route('/:id')
  .delete(deleteTicket)
  .get(getTicketsById)
  .put(updateTicket)
  
  export default router