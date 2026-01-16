import { normalizeStr } from "../utils/normalize.js";

export function validateAttendanceBody (body){
    const {alumnoId, qrToken, lat, lng, classSessionId} = body;

    const alumnoIdStr = normalizeStr(alumnoId);

    if(!alumnoIdStr || !qrToken || lat == null || lng == null || classSessionId == null){
        const err = new Error('Datos incompletos');
        err.status = 400;
        err.code = 'BAD_REQUEST';
        throw err;
    }

    const latNum = Number(lat);
    const lngNum = Number(lng);
    const classSessionIdNum = Number(classSessionId);

    if(Number.isNaN(latNum) || Number.isNaN(lngNum) || Number.isNaN(classSessionIdNum)){
        const err = new Error('Datos invalidos');
        err.status = 400;
        err.code = 'BAD_REQUEST';
        throw err;
    };


    if (latNum < -90 || latNum > 90 || lngNum < -180 || lngNum > 180) {
        const err = new Error('Coordenadas fuera de rango');
        err.status = 400;
        err.code = 'BAD_REQUEST';
        throw err;
    }

    if(!Number.isInteger(classSessionIdNum) || classSessionIdNum <= 0){
        const err = new Error('classSessionId invalido');
        err.status = 400;
        err.code = 'BAD_REQUEST';
        throw err;
    }

    return {
        alumnoId: alumnoIdStr,
        qrToken,
        lat: latNum,
        lng: lngNum,
        classSessionId: classSessionIdNum
    };
}