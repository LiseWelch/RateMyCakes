const reviewController = require("../controllers/review.controller");

module.exports = app => {
    app.get("/api/reviews/:id", reviewController.getAllReviewsForCake);
    app.post("/api/reviews/new", reviewController.createReview);
}