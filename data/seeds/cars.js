exports.seed = function(knex) {
  return knex("cars")
    .del()
    .then(function() {
      return knex("cars").insert([
        {
          id: 1,
          manufacturer: "Mercedes",
          model: "G-Klasse 63 AMG",
          km: 0,
          color: "black",
          price: 140000
        },
        {
          id: 2,
          manufacturer: "Ferrari",
          model: "488 Pista Spider",
          km: 0,
          color: "red",
          price: 400000
        },
        {
          id: 3,
          manufacturer: "Lamborghini",
          model: "Aventador SVJ",
          km: 5000,
          color: "yellow",
          price: 470000
        },
        {
          id: 4,
          manufacturer: "Mercedes",
          model: "SLS AMG",
          km: 20000,
          color: "black",
          price: 275000
        },
        {
          id: 5,
          manufacturer: "Ferrari",
          model: "La Ferrari",
          km: 100,
          color: "red",
          price: 2500000
        },
        {
          id: 6,
          manufacturer: "Mercedes",
          model: "SLS AMG",
          km: 15000,
          color: "silver",
          price: 260000
        }
      ]);
    });
};
