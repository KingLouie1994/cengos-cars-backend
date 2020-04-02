const Cars = require("./cars-model");

function getAllCars(req, res) {
  Cars.find()
    .then(cars => {
      if (cars) {
        res.status(200).json(cars);
      } else {
        res.status(404).json({
          message: "There was an error retrieving all cars"
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error retrieving all cars"
      });
    });
}

module.exports = getAllCars;