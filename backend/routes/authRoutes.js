import express from 'express';
import { createContact, getContactDetails, loginController, registerController } from '../controllers/authController.js';
//router bject
const router = express.Router();


//Register ||POST
router.post('/register',registerController);

//Login ||POST

router.post('/login',loginController);

router.post("/contact",createContact);
router.get("/get-contact",getContactDetails);

export default router;