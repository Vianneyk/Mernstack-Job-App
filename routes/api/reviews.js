const router = require("express").Router();

// const reviewController = require("../../controllers/reviewController");
const Review = require("../../models/review");

// router.route("/").get(reviewController.findAll).post(reviewController.create);

// router.route("/:id").delete(reviewController.delete);

router.get('/', (req, res) => {

    Review.find({  })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);
        });
});

router.post('/save', (req, res) => {
    const data = req.body;

    const newReview = new Review(data);

    newReview.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        // Review
        return res.json({
            msg: 'Your data has been saved!!!!!!'
        });
    });
});

module.exports = router;
