exports.up = function(knex) {
  return knex.schema.createTable("cars", table => {
    table.increments();
    table.string("manufacturer").notNullable();
    table.string("model").notNullable();
    table.integer("km").notNullable();
    table.string("color").notNullable();
    table.integer("price").notNullable();
    table
      .timestamp("created_at")
      .notNullable()
      .defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .notNullable()
      .defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
