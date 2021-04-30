const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
	name: { type: String, required: true },
	company_name: { type: String, required: true },
	job_role: { type: String, required: true },
	location: { type: String, required: true },
	description: { type: String, required: true },
	date: {
		type: String,
		default: Date.now(),
	},
});

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
