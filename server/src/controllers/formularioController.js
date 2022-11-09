const Formulario = require('../models/Formulario.js')
const Componente = require('../models/Componente.js')
const TipoComponente = require('../models/TipoComponente.js')
const database = require('../config/database.js');

exports.post = async (req, res, next) => {
    console.log(req.body)
    try { 
        console.log("creando en controller formulario");
        const formulario = await Formulario.create({
            //idformulario: req.body.idformulario,
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            linkacceso: req.body.linkacceso,
            codigoacceso: req.body.codigoacceso
        })
        console.log("saluendo de crear el formulario");
        return res.status(200).json({
            formulario: formulario,
            mensaje: 'Formulario creado correctamente.',
            error: false
        })
    } catch (error) {
        return next(error)
    }
}

/*exports.getFormularioId = async (req, res, next) => {

    let linkFormulario = req.params.idformulario

    try{
        formulario_resultado = await Formulario.findOne({ where: { idformulario:idformulario }})

        if (formulario_resultado === null){
            return res.status(200).json({
                error:true,
                mensaje: 'Formulario no valido.'
            })
        }

        return res.status(200).json({
            error:false,
            formulario: formulario_resultado,
            mensaje: 'Formulario obtenido correctamente.'
        })
    }catch (error) {
        return next(error)
    }
}
*/
exports.getEstadisticas = async (req, res, next) => {
    
}

exports.eliminar = async (req, res, next) => {

}

exports.getPrueba = async (req, res,next) => {
    try{
    return res.status(200).json({
        error:false,
        mensaje: 'respuesta correcta.'
    })
}catch(error){
    return next(error)
}
}
