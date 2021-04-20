const router = require("express").Router();

const jobRoutes = require("./jobs");
const githubRoutes = require("./github");

router.use("/jobs", jobRoutes);
router.use("/github", githubRoutes);

module.exports = router;
