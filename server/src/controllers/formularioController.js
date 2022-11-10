const Formulario = require('../models/Formulario.js')
const Componente = require('../models/Componente.js')
const TipoComponente = require('../models/TipoComponente.js')
const database = require('../config/database.js');

exports.post = async (req, res, next) => {

    try { 
        const formulario = await Formulario.create({
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            linkacceso: req.body.linkacceso,
            codigoacceso: req.body.codigoacceso
        })
        for(x in req.body.componentes){
            await Componente.create({
                idformulario:formulario.idformulario,
                idtipocomponente:req.body.componentes[x].idtipocomponente,
                labelname:req.body.componentes[x].labelname
            })
        }

        return res.status(200).json({
            formulario: formulario,
            mensaje: 'Formulario creado correctamente.',
            error: false
        })
    } catch (error) {
        return next("ESTE ES EL ERROR: "+ error)
    }
}

exports.getFormularioId = async (req, res, next) => {

    let idformulario = req.params.id

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

exports.delete = async (req, res, next) => {

    let idformulario = req.params.id
    const t = await database.transaction();

    try {
        formulario_resultado = await Formulario.findOne({ where: { idformulario:idformulario } })

        if (formulario_resultado === null) {
            return res.status(200).json({
                error: true,
                mensaje: 'Formulario no valido.'
            })
        }

        await Formulario.destroy({
            where: {idformulario: idformulario},
        },{ transaction: t })

        /*await PersonaPuntaje.destroy({
            where: {persona_id: persona_id},
        },{ transaction: t })
        */
        await t.commit()

        return res.status(200).json({
            error: false,
            mensaje: 'Formulario eliminado correctamente.'
        })

    } catch (error) {
        await t.rollback();
        return next(error)
    }
}

exports.getEstadisticas = async (req, res, next) => {
    
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
