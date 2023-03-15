const express = require("express");

const router = express.Router();

const vehicleControllers = require("./controllers/vehicleControllers");

router.get("/vehicles", vehicleControllers.browse);
router.get("/vehicles/:id", vehicleControllers.read);
router.post("/vehicles", vehicleControllers.add);
router.put("/vehicles/:id", vehicleControllers.edit);
router.delete("/vehicles/:id", vehicleControllers.destroy);

module.exports = router;
