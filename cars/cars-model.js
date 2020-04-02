const db = require("../data/db-config");

function find() {
  return db("cars");
}

function findById(id) {
  return db("cars")
    .where({ id })
    .first();
}

module.exports = {
  find,
  findById
};
