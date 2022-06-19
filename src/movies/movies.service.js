const knex = require("../db/connection");

const tableName = "movies";

function list() {
  return knex("movies").select("*");
}

function listInTheaters() {
  return knex("movies as m")
    .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
    .select("m.*", "mt.movie_id")
    .where({ "mt.is_showing": true });
}

function read(movie_id) {
  return knex("movies").select("*").where({ movie_id }).first();
}

module.exports = {
  list,
  listInTheaters,
  read,
};
