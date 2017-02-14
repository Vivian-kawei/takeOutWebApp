const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Ratings = mongoose.model('rating');


//根据商家ID查询ratings的关联查询
router.all('/getSellerRatings', function(req, res) {
    let seller_id = req.query.seller_id;
    if (seller_id) {
        Ratings.find({seller_id}).exec((err,ratings) => {
            console.log(err,ratings);
            res.json({
                status: 200,
                ratings: ratings
            });
        })
    } else {
        res.json({
            status: 404,
            ratings: []
        });
    }
});

module.exports = router;