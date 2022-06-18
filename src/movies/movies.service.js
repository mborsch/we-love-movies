const knex = require("../db/connection");

const tableName = "movies";

function list() {
  return knex("movies").select("*");
}

module.exports = {
  list,
};
