const router = require("express").Router();

const reviewRoutes = require("./reviews");
const githubRoutes = require("./github");

router.use("/reviews", reviewRoutes);
router.use("/github", githubRoutes);

module.exports = router;
