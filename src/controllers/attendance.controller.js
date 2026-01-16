import { registerEntry, registerExit } from '../services/attendance.service.js';
import { asyncHandler } from '../middlewares/asyncHandler.js';
import { getAttendanceStatus } from '../services/attendance.status.service.js';

export const markEntry = asyncHandler(async(req, res) => {
    const data = await registerEntry(req.attendance);
        
    res.json({
        ok: true,
        msg: 'Entrada registrada',
        data
    });
});

export const markExit = asyncHandler(async (req, res) => {
    const data = await registerExit(req.attendance);

    res.json({
        ok: true,
        msg: 'Salida registrada',
        data
    });
});

export const getStatusController = asyncHandler(async (req, res) => {
    const { studentId, classSessionId } = req.params;

    const data = await getAttendanceStatus(studentId, Number(classSessionId));

    res.json({
        ok:true,
        data
    });
});
