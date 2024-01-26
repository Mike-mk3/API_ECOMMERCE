const {Schema, model} = require('mongoose');





const ProductsSchema = Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    stock: {
        type: Number
    },
    categories: {
        type: Array
    },
    manufacturer: {
        type: String
    },
    sku: {
        type: String
    },
    image: {
        type: String
    },
    active: {
        type: Number
    },
}, {versionKey: false});





module.exports = model('Product', ProductsSchema);