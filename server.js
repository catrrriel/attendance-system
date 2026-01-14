// const express = require('express'); <= manera antigua.
import express from 'express';
import attendancerRoutes from './src/routes/attendance.router.js';
import { ENV } from './src/config/env.js';
import { errorHandler } from './src/middlewares/error.middleware.js';

const app = express();
const PORT = ENV.PORT || 3001;

//middleware para json
app.use(express.json());

//para montar rutas 
app.use('/attendance', attendancerRoutes);

app.get("/", (req, res) => {
    res.send("hola mundo anashe");
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
    console.log('PORT desde env:', ENV.PORT);
});

app.use(errorHandler);


