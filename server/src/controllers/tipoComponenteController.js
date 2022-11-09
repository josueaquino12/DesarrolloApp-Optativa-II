const Formulario = require('../models/Formulario.js')
const Componente = require('../models/Componente.js')
const TipoComponente = require('../models/TipoComponente.js')
const database = require('../config/database.js');

exports.getFormularioId = async (req, res, next) => {

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

exports.getEstadisticas = async (req, res, next) => {
    
}

exports.eliminar = async (req, res, next) => {

}

exports.post = async (req, res, next) => {
    
}