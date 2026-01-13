import attendanceStore from "../services/attendance.store.js";

export const markEntry = (req, res) => {
    const {alumnoId, qrToken, lat, lng} = req.body;
    const alumnoIdStr = String(alumnoId ?? '').trim();

    if(!alumnoId || !qrToken){
        return res.status(400).json({
            ok:false,
            msg:'datos incompletos'
        });
    };

    if(!attendanceStore[alumnoIdStr]){
        attendanceStore[alumnoIdStr] = {
            entry:null,
            exit:null
        }
    }

    attendanceStore[alumnoIdStr].entry = new Date();
    
    //aca hay que:
    //-validar QR de entrada
    //-validar ubic
    //-registrar entrada
    console.log(attendanceStore);

    res.json({
        ok:true,
        msg:'entrada registrada',
        data:attendanceStore[alumnoIdStr]
    });
};

export const markExit = (req, res) => {
    const {alumnoId, qrToken, lat, lng} = req.body;
    const alumnoIdStr = String(alumnoId ?? '').trim();
    if(!alumnoId || !qrToken){
        return res.status(400).json({
            "ok":false,
            "msg":'datos incompletos'
        });
    };

    if(!attendanceStore[alumnoIdStr]){
        attendanceStore[alumnoIdStr] = {
            entry:null,
            exit:null
        }
    }

    attendanceStore[alumnoIdStr].exit = new Date();

    //aca hay que:
    //-validar QR de salida
    //-validar ubic
    //-registrar salida

    res.json({
        ok:true,
        msg:'salida registrada',
        data:attendanceStore[alumnoIdStr]
    });
}

