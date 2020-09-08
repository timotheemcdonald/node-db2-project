// const { table } = require("../connection");

exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl=> {
      tbl.increments('VIN');
      tbl.string('make').notNullable().index();
      tbl.string('model').notNullable().index();
      tbl.float('mileage').notNullable()
      tbl.string('transmission')
      tbl.string('title')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('car');
};


