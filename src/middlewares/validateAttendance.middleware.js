import { validateAttendanceBody } from "../controllers/attendance.validators.js";

export function validateAttendance(req, res, next) {
    try {
        //guardo el resultado valido en req
        req.attendance = validateAttendanceBody(req.body);
        next();
    } catch (err) {
        next(err);
    };
};