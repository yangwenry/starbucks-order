const mongoose = require('mongoose');

const coffeeSchema = mongoose.Schema({

    name: {
        type: String,
        maxlength: 200
    },
    eng_name: {
        type: String,
        maxlength: 200
    },
    type: String,
    categories: String,
    calories: String,
    price: {
        type: Number,
        default: 0
    },
    description: String

});

const Coffee = mongoose.model('Coffee', coffeeSchema);

module.exports = { Coffee }
