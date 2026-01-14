export function errorHandler(err, req, res, next){
    const status = err.status || 500;
    const code = err.code || 'INTERNAL_ERROR';
    const message = err.message || 'Error interno del servidor';

    //log solo errores graves
    if(status >= 500){
        console.error('[ERROR]', err);
    };

    res.status(status).json({
        ok: false,
        error: {
            code,
            msg:message
        }
    });
};