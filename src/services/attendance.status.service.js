import { findAttendance } from "../repositories/attendance.repository.js";
import { getStatus } from "./attendance.service.js";

export async function getAttendanceStatus(studentId, classSessionId) {
    const attendance = await findAttendance(studentId, classSessionId);

    if(!attendance){
        return {
            studentId,
            classSessionId,
            entryAt:null,
            exitAt:null,
            status:'Ausente'
        };
    };
    
    return {
        studentId,
        classSessionId,
        entryAt:attendance.entryAt,
        exitAt:attendance.exitAt,
        status:getStatus(attendance)
    };
};