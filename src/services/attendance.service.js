import {
    findStudentById,
    createStudent,
    findAttendance,
    createAttendance,
    updateAttendance
} from '../repositories/attendance.repository.js';
import { ENV } from '../config/env.js';
import { validateDistance } from './attendance.geo.service.js';
import { AppError } from '../errors/AppError.js';

export async function registerEntry({alumnoId, qrToken, lat, lng, classSessionId}){
    if(qrToken !== ENV.QR_ENTRY_TOKEN){
        throwUnauthorized('QR de entrada invalido');
    };

    validateDistance(lat, lng);
    
    let student = await findStudentById(alumnoId);
    if(!student){
        student = await createStudent(alumnoId);
    };

    let attendance = await findAttendance(alumnoId, classSessionId);
    
    if(attendance?.entryAt){        // == if(attendance && attendance.entryAt)
        throwConflict('Entrada ya registrada');
    };

    if(!attendance){
        attendance = await createAttendance({
            studentId: alumnoId,
            classSessionId,
            entryAt: new Date()
        });
    } else {
        attendance = await updateAttendance(attendance.id, {
            entryAt: new Date()
        });
    };

    return attendance;
};

export async function registerExit({alumnoId, qrToken, lat, lng, classSessionId}){
    if(qrToken !== ENV.QR_EXIT_TOKEN){
        throwUnauthorized('QR de salida invalido');
    }

    validateDistance(lat, lng);

    let student = await findStudentById(alumnoId);
    if(!student){
        student = await createStudent(alumnoId);
    };

    let attendance = await findAttendance(alumnoId, classSessionId);
    
    if(attendance?.exitAt){        // == if(attendance && attendance.exitAt)
        throwConflict('Salida ya registrada');
    };

    if(!attendance){
        attendance = await createAttendance({
            studentId: alumnoId,
            classSessionId,
            exitAt: new Date()
        });
    } else {
        attendance = await updateAttendance(attendance.id, {
            exitAt: new Date()
        });
    };

    return attendance;
}

export const getStatus = ({entryAt, exitAt}) => {
    if(entryAt && exitAt) return 'Presente';
    if(entryAt || exitAt) return 'Media falta';
    return 'Ausente';
}

//helpers internos
function throwUnauthorized(msg){
    throw new AppError(msg, 401, 'UNAUTHORIZED');
}
function throwConflict(msg){
    throw new AppError(msg, 409, 'CONFLICT');
}