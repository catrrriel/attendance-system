// const express = require('express'); <= manera antigua.
import express from 'express';
import dotenv from 'dotenv';
import attendancerRoutes from './src/routes/attendance.router.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;


//middleware para json
app.use(express.json());

//para montar rutas 
app.use('/attendance', attendancerRoutes);

app.get("/", (req, res) => {
    res.send("hola mundo anashe");
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
    console.log('PORT desde env:', process.env.PORT);
});


