import Routes from "express";
import {
  createUser,
  deleteUser,
  readAllUsers,
  readUsersById,
  updateUsers,
} from "../controllers/userController.js";
import { login, signin } from "../controllers/auth/auth.js";
const router = Routes();

router.post("/signin", signin);
router.post("/login", login);

router.post("/", signin);
router.get("/get", readAllUsers);
router.get("/getById/:id", readUsersById);
router.put("/put/:id", updateUsers);
router.delete("/del/:id", deleteUser);
const module = router;
export default router;
