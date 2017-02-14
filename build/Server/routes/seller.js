const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Seller = mongoose.model('seller');



//查询所有（如果指定查询，参数顺序：条件对象，回调函数）
router.all('/getAll', function(req, res) {
    Seller.find(function (err, sellers) {
        if (err) {
            res.json({
                status: 200,
                error: JSON.stringify(err)
            });
        } else {
            res.json({
                status: 200,
                sellers: sellers
            });
        }
    });
});

module.exports = router;
