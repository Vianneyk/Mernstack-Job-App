const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobPostSchema = new Schema({
	title: { type: String, required: true },
	skills: { type: String, required: true },
	location: { type: String, required: true },
	salary: { type: String, required: true },
	description: { type: String, required: true },
	email: { type: String, required: true },
	date: {
		type: String,
		default: Date.now(),
	},
});

const JobPost = mongoose.model("JobPost", JobPostSchema);

module.exports = JobPost;
