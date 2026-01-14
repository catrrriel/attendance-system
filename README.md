# Attendance System (QR)

Sistema de control de asistencia mediante códigos QR y geolocalización,
orientado a cátedras universitarias.

----

## Descripción

El sistema permite:
- Registrar **entrada** y **salida** de alumnos mediante QR
- Validar la **ubicación geográfica** del estudiante
- Determinar el estado de asistencia:
  - Presente
  - Media falta
  - Ausente

La lógica está diseñada para permitir:
- Entrada sola
- Salida sola
- Entrada + salida

----

## Tecnologías

- Node.js
- Express.js
- JavaScript (ES Modules)
- dotenv
- Próximamente PostgreSQL

----

## Arquitectura

El proyecto sigue una arquitectura en capas:
- **Routes**: definición de endpoints
- **Middlewares**: validación y manejo de errores
- **Controllers**: manejo HTTP
- **Services**: lógica de negocio

----

## Flujo de funcionamiento

1. El docente genera un QR de entrada o salida
2. El alumno escanea el QR
3. Se envía:
   - ID del alumno
   - Token del QR
   - Ubicación (lat/lng)
4. El sistema valida:
   - Datos requeridos
   - Token del QR
   - Distancia al establecimiento
5. Se registra la asistencia

----

## Instalación y uso

- npm install
- npm run dev

----

## Estado del proyecto

En desarrollo.
