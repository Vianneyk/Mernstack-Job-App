const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;
const JobPostSchema = new Schema({
	title: String,
	skills: String,
	location: String,
	salary: String,
	description: String,
	email: String,
	date: {
		type: String,
		default: Date.now(),
	},
});

// Model
const JobPost = mongoose.model("JobPost", JobPostSchema);

module.exports = JobPost;
