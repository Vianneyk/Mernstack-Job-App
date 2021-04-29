const router = require("express").Router();

const jobController = require("../../controllers/jobController");

router.route("/").get(jobController.findAll).post(jobController.create);

router.route("/:id").delete(jobController.delete);

module.exports = router;
