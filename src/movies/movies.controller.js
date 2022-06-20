const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res, next) {
  const data = await service.list(req.query.is_showing);
  const query = req.query;
  console.log(query);
  res.json({ data });
}

async function listInTheaters(req, res, next) {
  const data = await service.listInTheaters();
  console.log(data);
  console.log("hello");
  res.json({ data });
}

async function read(req, res) {
  const { movie: data } = res.locals;
  res.json({ data });
}

async function movieExists(req, res, next) {
  const movie = await service.read(req.params.movieId);
  console.log(req.params.movieId);
  console.log(movie);
  if (movie) {
    res.locals.movie = movie;
    return next();
  }
  next({ status: 404, message: `Movie cannot be found.` });
}

async function listReviews(req, res, next) {
  const reviews = await service.listReviews(req.params.movieId);
  console.log(req.params.movieId);
  console.log(reviews);
  res.json({ reviews });
}

module.exports = {
  list: asyncErrorBoundary(list),
  listInTheaters: asyncErrorBoundary(listInTheaters),
  read: [asyncErrorBoundary(movieExists), read],
  listReviews: asyncErrorBoundary(listReviews),
};
