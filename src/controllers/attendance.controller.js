import { registerEntry, registerExit } from '../services/attendance.service.js';
import { asyncHandler } from '../middlewares/asyncHandler.js';

export const markEntry = asyncHandler(async(req, res) => {
    const data = registerEntry(req.attendance);
        
    res.json({
        ok: true,
        msg: 'Entrada registrada',
        data
    });
});

export const markExit = asyncHandler(async (req, res) => {
    const data = registerExit(req.attendance);

    res.json({
        ok: true,
        msg: 'Salida registrada',
        data
    });
});

