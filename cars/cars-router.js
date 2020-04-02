const router = require("express").Router();

const getAllCars = require("./getAllCars");
const getCarById = require("./getCarById");

router.get("/", getAllCars);
router.get("/:id", getCarById);

module.exports = router;
