const router = require("express").Router();

const githubController = require("../../controllers/githubController");

router.route("/").get(githubController.search);

module.exports = router;
