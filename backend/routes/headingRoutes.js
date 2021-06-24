import express from 'express'
const router = express.Router();
import {

getHeadings,
createHeading

} from '../controllers/headingController.js'


router.route('/').get(getHeadings).post(createHeading)

export default router