import Routes from 'express'
import { createUser, readAllUsers } from '../controllers/userController.js'
const router = Routes()

router.post("/",createUser)
router.get("/get",readAllUsers)
const module = (router)
export default router