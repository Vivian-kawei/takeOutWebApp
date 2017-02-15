const mongoose = require('mongoose');

let orderSchema = new mongoose.Schema({
    seller_id      : {type: mongoose.Schema.Types.ObjectId, ref: 'seller'},
    user_id        : {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    orderTime      : Number,
    food_name      : String
});

mongoose.model('order', orderSchema);