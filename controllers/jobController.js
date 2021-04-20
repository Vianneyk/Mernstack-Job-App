const db = require("../models");

const { Job } = db;

module.exports = {
	create: function (req, res) {
		Job.create(req.body)
			.then(response => res.json(response))
			.catch(err => res.status(422).json(err));
	},
	delete: function (req, res) {
		Job.findByIdAndDelete(req.params.id)
			.then(response => res.json(response))
			.catch(err => res.status(422).json(err));
	},
	fundAll: function (req, res) {
		Job.find({})
			.then(response => res.json(response))
			.catch(err => res.status(422).json(err));
	},
};
