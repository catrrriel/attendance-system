import { normalizeStr } from "../utils/normalize.js";

export function validateAttendanceBody (body){
    const {alumnoId, qrToken, lat, lng} = body;

    const alumnoIdStr = normalizeStr(alumnoId);

    if(!alumnoIdStr || !qrToken || lat == null || lng == null){
        const err = new Error('Datos incompletos');
        err.status = 400;
        err.code = 'BAD_REQUEST';
        throw err;
    }

    const latNum = Number(lat);
    const lngNum = Number(lng);

    if(Number.isNaN(latNum) || Number.isNaN(lngNum)){
        const err = new Error('lat/lng invalidas');
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

    return {
        alumnoId: alumnoIdStr,
        qrToken,
        lat: latNum,
        lng: lngNum
    };
}