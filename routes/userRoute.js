import Routes from 'express'
import { createUser, deleteUser, readAllUsers, readUsersById, updateUsers } from '../controllers/userController.js'
import { signin } from '../controllers/signup/login.js'
const router = Routes()

router.post("/signin",signin)


router.post("/",createUser)
router.get("/get",readAllUsers)
router.get("/getById/:id",readUsersById)
router.put("/put/:id",updateUsers)
router.delete("/del/:id",deleteUser)
const module = (router)
export default router