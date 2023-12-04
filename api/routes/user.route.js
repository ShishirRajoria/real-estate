import express  from "express";
import { test } from "../controllers/user.controller.js";//never forget to add js in the end
const router = express.Router();//here Router whould be capital

router.get('/test',test)
export default router;