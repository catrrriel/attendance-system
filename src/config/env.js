import dotenv from 'dotenv';
dotenv.config();

export const ENV = {
    PORT: Number(process.env.PORT),
    DATABASE_URL: process.env.DATABASE_URL,
    QR_ENTRY_TOKEN: process.env.QR_ENTRY_TOKEN,
    QR_EXIT_TOKEN: process.env.QR_EXIT_TOKEN,
    UNIVERSITY_LAT: Number(process.env.UNIVERSITY_LAT),
    UNIVERSITY_LNG: Number(process.env.UNIVERSITY_LNG),
    MAX_DISTANCE: Number(process.env.MAX_DISTANCE ?? 100),
};