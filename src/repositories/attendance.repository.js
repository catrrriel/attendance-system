import prisma from "../config/prisma.js";

// busca un alumno por su ID en la db
// devuelve:
// - el alumno si existe
// - null si no existe
export async function findStudentById(studentId) {
    return prisma.student.findUnique({
        where: { id: studentId}
    });
};

// inserta un alumno nuevo en la db
export async function createStudent(studentId) {
    return prisma.student.create({
        data: { id: studentId}
    });
};

// busca la asistencia de un alumno para una clase puntual
// un alumno puede tener una sola asistencia por clase
// por eso en schema => @@unique([studentId, classSessiomId])
// devuelve:
// - la asistencia si existe
// - null si no existe
export async function findAttendance(studentId, classSessionId) {
    return prisma.attendance.findUnique({
        where: {
            studentId_classSessionId: {
                studentId,
                classSessionId
            }
        }
    });
};

// inserta registro de asistencia
// data tiene algo como:
//{
//  studentId: '123',
//  classSessionId: 'clase-1',
//  entryAt: new Date()
//}
// pero no valida si es entrada o salida, eso es responsabilidad del service
export async function createAttendance(data) {
    return prisma.attendance.create({
        data
    });
};

// actualiza un registro ya existente
export async function updateAttendance(id, data) {
    return prisma.attendance.update({
        where: { id },
        data
    });
};

