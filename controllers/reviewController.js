const db = require("../models");

// const { Review } = db;

module.exports = {
	create: function (req, res) {
		db.Review.create(req.body)
			.then(response => res.json(response))
			.catch(err => res.status(422).json(err));
	}
	// ,
	// delete: function (req, res) {
	// 	db.Review.findByIdAndDelete(req.params.id)
	// 		.then(response => res.json(response))
	// 		.catch(err => res.status(422).json(err));
	// },
	// findAll: function (req, res) {
	// 	db.Review.find({})
	// 		.then(response => res.json(response))
	// 		.catch(err => res.status(422).json(err));
	// },
};
