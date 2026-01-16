import { Router } from "express";
import { markEntry } from "../controllers/attendance.controller.js";
import { markExit } from "../controllers/attendance.controller.js";
import { getStatus } from "../services/attendance.service.js";
import { normalizeStr } from "../utils/normalize.js";
import { validateAttendance } from "../middlewares/validateAttendance.middleware.js";
import { asyncHandler } from "../middlewares/asyncHandler.js";
import { findAttendance } from "../repositories/attendance.repository.js";

const router = Router();

//endpoints qr
router.post('/entry', validateAttendance, markEntry);
router.post('/exit', validateAttendance, markExit);


//endpoint test
router.get('/:studentId/:classSessionId',asyncHandler(async (req, res)=>{
    const { studentId, classSessionId } = req.params;
    //const alumnoIdStr = normalizeStr(alumnoId);
    const attendance = await findAttendance(
        studentId,
        Number(classSessionId)
    );

    if(!attendance){
        return res.json({status: 'ausente'})
    }

    res.json({
        status: getStatus(attendance),
        attendance
    });
}));

export default router;
