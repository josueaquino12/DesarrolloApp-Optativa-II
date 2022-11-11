const express = require("express");
const router = express.Router();
const tipoComponenteController = require("../controllers/tipoComponenteController");

router.get("/:id", tipoComponenteController.getFormularioId);

//router.delete("/:id", tipoComponenteController.delete);

router.get("/:id/estadisticas", tipoComponenteController.getEstadisticas);

router.post("/", tipoComponenteController.post);

module.exports = router;