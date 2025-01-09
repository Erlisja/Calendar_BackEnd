// routes/user.mjs
import express from 'express';
const router = express.Router();
import userController from '../controllers/user.mjs';


// this corresponds to register on the front end
//because register means add a new user
router.post('/', userController.create);

//this corresponds to login on the front end
router.post('/login', userController.login);

export default router;