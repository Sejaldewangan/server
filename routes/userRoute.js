import Routes from 'express'
import { createUser } from '../controllers/userController.js'
const router = Routes()

router.post("/",createUser)

const module = (router)
export default router