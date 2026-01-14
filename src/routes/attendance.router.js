import { Router } from "express";
import { markEntry } from "../controllers/attendance.controller.js";
import { markExit } from "../controllers/attendance.controller.js";
import { getStatus } from "../services/attendance.service.js";
import { normalizeStr } from "../utils/normalize.js";
import attendanceStore from "../services/attendance.store.js";
import { validateAttendance } from "../middlewares/validateAttendance.middleware.js";

const router = Router();

//endpoints qr
router.post('/entry', validateAttendance, markEntry);
router.post('/exit', validateAttendance, markExit);


//endpoint test
router.get('/:alumnoId', (req, res)=>{
    const { alumnoId } = req.params;
    const alumnoIdStr = normalizeStr(alumnoId);
    const record = attendanceStore[alumnoIdStr];

    if(!record){
        return res.json({status: 'ausente'})
    }

    res.json({
        alumnoId,
        ...record,
        status: getStatus(record)
    })
})

export default router;
