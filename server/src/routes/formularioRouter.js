const express = require("express");
const router = express.Router();
const personaController = require("../controllers/personaController");

router.get("/:id", formularioController.getFormularioId);

router.delete("/:id", formularioController.delete);

router.get("/:id/estadisticas", formularioController.getEstadisticas);

router.post("/", formularioController.post);

module.exports = router;