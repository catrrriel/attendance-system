export const markEntry = (req, res) => {
    const {alumnoId, qrToken, lat, lng} = req.body;

    if(!alumnoId || !qrToken){
        return res.status(400).json({
            ok:false,
            msg:'datos incompletos'
        });
    };
    
    //aca hay que:
    //-validar QR
    //-validar ubic
    //-registrar asistencia

    res.json({
        ok:true,
        msg:'entrada registrada',
        data:{
            alumnoId,
            lat,
            lng
        }
    });
};


