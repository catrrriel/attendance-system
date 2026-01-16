import { Router } from "express";
import { getStatusController, markEntry } from "../controllers/attendance.controller.js";
import { markExit } from "../controllers/attendance.controller.js";
import { validateAttendance } from "../middlewares/validateAttendance.middleware.js";

const router = Router();

//endpoints qr
router.post('/entry', validateAttendance, markEntry);
router.post('/exit', validateAttendance, markExit);

//endpoint test
router.get('/status/:studentId/:classSessionId',getStatusController);

export default router;