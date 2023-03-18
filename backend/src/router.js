const express = require("express");

const router = express.Router();

const vehicleControllers = require("./controllers/vehicleControllers");
const userControllers = require("./controllers/userControllers");

router.post("/login", userControllers.validateUser);

router.get("/vehicles", vehicleControllers.browse);
router.get("/vehicles/:id", vehicleControllers.read);
router.post("/vehicles", vehicleControllers.add);
router.put("/vehicles/:id", vehicleControllers.edit);
router.delete("/vehicles/:id", vehicleControllers.destroy);

module.exports = router;
