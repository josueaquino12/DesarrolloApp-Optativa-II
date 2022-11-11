const express = require("express");
const router = express.Router();
const componenteController = require("../controllers/componenteController");

router.get("/:id", componenteController.getFormularioId);

/*router.delete("/:id", componenteController.delete);*/

router.get("/:id/estadisticas", componenteController.getEstadisticas);

router.post("/", componenteController.post);

module.exports = router;