const router = require("express").Router();

const jobController = require("../../controllers/jobController");

router.route("/").get(jobController.findAll).post(jobController.create);

router.route("/:id").delete(jobController.delete);

module.exports = router;

// const express = require("express");

// const router = express.Router();

// const JobPost = require("../models/jobPost");

// // Routes
// router.get("/", (req, res) => {
// 	JobPost.find({})
// 		.then(data => {
// 			console.log("Data: ", data);
// 			res.json(data);
// 		})
// 		.catch(error => {
// 			console.log("error: ", error);
// 		});
// });

// router.post("/save", (req, res) => {
// 	const data = req.body;

// 	const newJobPost = new JobPost(data);

// 	newJobPost.save(error => {
// 		if (error) {
// 			res.status(500).json;
// 		} else {
// 			res.json({
// 				msg: "Data Received!!!",
// 			});
// 		}
// 	});
// });

// router.get("/name", (req, res) => {
// 	const data = {
// 		username: "gabriele",
// 		age: 25,
// 	};
// 	res.json(data);
// });

// module.exports = router;
