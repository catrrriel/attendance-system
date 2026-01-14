import { registerEntry, registerExit } from '../services/attendance.service.js';
import { validateAttendanceBody } from './attendance.validators.js';

export const markEntry = (req, res) => {
    try{
        const validate = validateAttendanceBody(req.body);
        const data = registerEntry({
            alumnoId: validate.alumnoId,
            qrToken: validate.qrToken,
            lat: validate.lat,
            lng: validate.lng
        });
        
        res.json({
            ok: true,
            msg: 'Entrada registrada',
            data
        });
    } catch (err) {
        res.status(err.status || 500).json({
            ok: false,
            error: {
                code: err.code || 'INTERNAL_ERROR',
                msg: err.message
            }
        });
    };
};

export const markExit = (req, res) => {
    try {
        const validate = validateAttendanceBody(req.body);
        const data = registerExit({
            alumnoId: validate.alumnoId,
            qrToken: validate.qrToken,
            lat: validate.lat,
            lng: validate.lng
        });

        res.json({
            ok: true,
            msg: 'Salida registrada',
            data
        });
    } catch (err) {
        res.status(err.status || 500).json({
            ok: false,
            error: {
                code: err.code || 'INTERNAL_ERROR',
                msg: err.message
            }
        });
    };
};

