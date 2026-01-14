import attendanceStore from './attendance.store.js';
import { ENV } from '../config/env.js';
import { validateDistance } from './attendance.geo.service.js';

//si no existe el alumnoId en store, se crea en estado null
function initStudent (id) {
    if(!attendanceStore[id]){
        attendanceStore[id] = {
            entry:null,
            exit:null
        }
    };
};

export function registerEntry({alumnoId, qrToken, lat, lng}){
    if(qrToken !== ENV.QR_ENTRY_TOKEN){
        throwUnauthorized('QR de entrada invalido');
    }

    validateDistance(lat, lng);
    initStudent(alumnoId);

    if(attendanceStore[alumnoId].entry){
        throwConflict('Entrada ya registrada');
    }

    attendanceStore[alumnoId].entry = new Date();
    return attendanceStore[alumnoId];
}

export function registerExit({alumnoId, qrToken, lat, lng}){
    if(qrToken !== ENV.QR_EXIT_TOKEN){
        throwUnauthorized('QR de salida invalido');
    }

    validateDistance(lat, lng);
    initStudent(alumnoId);

    if(attendanceStore[alumnoId].exit){
        throwConflict('Salida ya registrada');
    }

    attendanceStore[alumnoId].exit = new Date();
    return attendanceStore[alumnoId];
}

export const getStatus = ({entry, exit}) => {
    if(entry && exit) return 'Presente';
    if(entry || exit) return 'Media falta';
    return 'Ausente';
}

//helpers internos
function throwUnauthorized(msg){
    const e = new Error(msg);
    e.status = 401;
    e.code = 'UNAUTHORIZED';
    throw e;
}
function throwConflict(msg){
    const e = new Error(msg);
    e.status = 409;
    e.code = 'CONFLICT';
    throw e;
}