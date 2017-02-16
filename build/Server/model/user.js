const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name       : Number,
    password   : String,
    avatar     : String,
    collect    : [{type: mongoose.Schema.Types.ObjectId, ref: 'seller'}]
});

mongoose.model('user', userSchema);