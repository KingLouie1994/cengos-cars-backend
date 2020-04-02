const router = require("express").Router();

const carRouter = require("../cars/cars-router");

router.use("/api/cars", carRouter);

router.get("/", (req, res) => {
  res.send("Welcome to the Cengo Cars API service!");
});

module.exports = router;
