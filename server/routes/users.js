import express from 'express';
import { signin, signup } from '../controllers/user.js';
//using curly braces for the name since we are not exporting default

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);

export default router;
