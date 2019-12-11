const Cake = require("../models/cake.model");

module.exports.getAllCakes = (req, res) => {
    Cake.find()
        .then(AllCakes => res.json(AllCakes))
        .catch(err => res.json(err));
};

module.exports.createCake = (req, res) => {
    Cake.create(req.body)
        .then(cake => res.json(cake))
        .catch(err => res.json(err));
};

module.exports.updateCake = (req, res) => {
    Cake.update({ _id : req.params.id }, {$push: {CakeReviewIDs: req.body}})
        .then(cake => res.json(cake))
        .catch(err => res.json(err));
};

module.exports.deleteCake = (req, res) => {
    Cake.deleteOne({ _id: req.params.id })
        .then( cake => res.json(cake))
        .catch(err => res.json(err))
};

module.exports.getOneCake = (req, res) => {
    Cake.findOne({ _id: req.params.id })
        .then(cake => res.json(cake))
        .catch(err => res.json(err));
};