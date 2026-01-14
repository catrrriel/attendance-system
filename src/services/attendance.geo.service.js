import { ENV } from '../config/env.js';
import { calculateDistance } from '../utils/geo.js';

export function validateDistance(lat, lng){
    const distance = calculateDistance(lat, lng, ENV.UNIVERSITY_LAT, ENV.UNIVERSITY_LNG);
    
    if(distance>ENV.MAX_DISTANCE){
        const err = new Error('Fuera del establecimiento');
        err.code = 'OUT_OF_RANGE';
        err.status = 403;
        throw err;
    }
}