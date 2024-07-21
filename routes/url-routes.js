import express from 'express'
import {generateShortURL} from '../controller/url-controller.js'
const router=express.Router()

router.post("/url",generateShortURL)
export default router;