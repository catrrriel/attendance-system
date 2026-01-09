import { Router } from "express";
import { markEntry } from "../controllers/attendance.controller.js";

const router = Router();

//endpoint real
router.get('/entry', markEntry);

//endpoint test
//router.get('/test', (req, res)=>{
//    res.json({ok:true, qsy:912, msg:'attendance routes funcionan'})
//})

export default router;
