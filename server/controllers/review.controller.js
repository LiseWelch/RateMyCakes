const Review = require("../models/review.model");

module.exports.getAllReviewsForCake= (req, res) => {
    Review.find({ CakeID: req.params.id })
        .then(AllReviews => res.json(AllReviews))
        .catch(err => res.json(err));
};

module.exports.createReview = (req, res) => {
    Review.create(req.body)
        .then(cake => res.json(cake))
        .catch(err => res.json(err));
};
