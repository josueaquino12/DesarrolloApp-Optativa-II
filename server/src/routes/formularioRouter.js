const express = require("express");
const router = express.Router();
const formularioController = require("../controllers/formularioController");

router.get("/:id", formularioController.getFormularioId);

router.delete("/:id", formularioController.delete);

router.post("/", formularioController.post);

//router.get("/:id/estadisticas", formularioController.getEstadisticas);

module.exports = router;