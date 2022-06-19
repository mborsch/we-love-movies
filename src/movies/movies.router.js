const router = require("express").Router({ mergeParams: true });
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const { Router } = require("express");

/*
Router.route("/:movieId/theaters").get().all(methodNotAllowed);

Router.route("/:movieId/reviews");
*/
router.route(`/:movieId`).get(controller.read).all(methodNotAllowed);

router.route("/").get(controller.list).all(methodNotAllowed);

module.exports = router;
