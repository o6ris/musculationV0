const express = require("express");

const router = express.Router();

const vehicleControllers = require("./controllers/vehicleControllers");

// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

router.get("/vehicles", vehicleControllers.browse);
router.get("/vehicles/:id", vehicleControllers.read);
router.post("/vehicles", vehicleControllers.add);
router.put("/vehicles/:id", vehicleControllers.edit);

module.exports = router;
