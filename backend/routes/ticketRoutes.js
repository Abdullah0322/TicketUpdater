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
updateTicke,
updateHeading,
updateHeading2,
updateBody2,
deleteAll


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
  router.post('/:id/body',updateTicke)
  router.post('/:id/heading',updateHeading)
  router.post('/:id/heading2',updateHeading2)
  router.post('/:id/body2',updateBody2)
  router.delete('/',deleteAll)

  export default router