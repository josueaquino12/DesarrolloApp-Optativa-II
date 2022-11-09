const express = require("express");
const router = express.Router();
const formularioController = require("../controllers/formularioController");

//router.get("/:id", formularioController.getFormularioId);

//router.delete("/:id", formularioController.delete);

router.get("/:id/estadisticas", formularioController.getEstadisticas);

router.post("/", formularioController.post);

router.get("/prueba", formularioController.getPrueba);

module.exports = router;