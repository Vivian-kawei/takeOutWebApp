const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Order = mongoose.model('order');


//根据用户ID查询order和seller的关联查询
router.post('/getUserOrderAndSeller', function(req, res) {
    let userid = req.body.userid;
    if (userid) {
        Order.find({user_id: userid}).populate('seller_id').exec((err,order) => {
            console.log(err,order);
            res.json({
                status: 200,
                order: order
            });
        })
    } else {
        res.json({
            status: 404,
            order: []
        });
    }
});

module.exports = router;