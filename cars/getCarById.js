const Cars = require("./cars-model");

function getCarById(req, res) {
  const { id } = req.params;
  Cars.findById(id)
    .then(car => {
      if (car) {
        res.status(200).json(car);
      } else {
        res.status(404).json({
          message: "There was an error retrieving this car"
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "There was an error retrieving this car"
      });
    });
}

module.exports = getCarById;
