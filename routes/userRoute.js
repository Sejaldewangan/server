import Routes from 'express'
import { createUser, readAllUsers, readUsersById } from '../controllers/userController.js'
const router = Routes()

router.post("/",createUser)
router.get("/get",readAllUsers)
router.get("/getById/:id",readUsersById)
const module = (router)
export default router