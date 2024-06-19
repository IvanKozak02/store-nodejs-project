const mongoose = require('mongoose');


module.exports = mongoose.model('Product', {
    name: {
        type: String,
        maxLength: [20,'Name cannot be more than 20 characters'],
        trim: true,
        required: [true, 'Name must be provided.']
    },
    company: {
        type: String,
        trim: true,
        enum: {
            values: ['ikea', 'liddy', 'marcos', 'caressa'],
            message: '{VALUE} is not supported.'
        },
        required: [true, 'Company must be provided.']
    },
    price: {
        type: Number,
        validate:{
            validator: function (value) {
                return value > 0;
            },
            message: 'Price must be greater than 0.'
        },
        required: [true, 'Price must be provided.']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    rating: {
        type: Number,
        default: 4.5,
        validator: function (value) {
            return value >= 0;
        },
        message: 'Rating must be greater than 0.'
    },
    featured:{
        type: Boolean,
        default: false,
    }

})
