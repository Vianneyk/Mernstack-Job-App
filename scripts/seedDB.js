const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/mern_app"
);

const reviewSeed = [
  {
    name: "Eva",
    company_name: "Next",
    job_role: "Trainee Developer",
    location: "Leicester",
    description: "Not great so far",
    date: new Date(Date.now())
  },
 
];

db.Review
  .remove({})
  .then(() => db.Review.collection.insertMany(reviewSeed))
  .then(data => {
    console.log(data.result.n + " reviews inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
