import express from 'express'
const router = express.Router()
import {

getTickets,
getTicketsById,
deleteTicket,
createTicket,
updateTicket,
createHeading,
updateBody,
updateTicke


} from '../controllers/ticketController.js'


router.route('/').get(getTickets).post(createTicket)
router
  .route('/:id')
  .delete(deleteTicket)
  .get(getTicketsById)
  .put(updateTicket)
  router.route('/:id/headings').post(createHeading)
  router.route('/:ticketId/headings/:headingId').put(updateTicket);
  router.route('/:ticketId/body/:bodyId').put(updateBody);
  router.post('/:id/heading',updateTicke)
  export default router