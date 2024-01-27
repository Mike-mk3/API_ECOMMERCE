const {Schema, model} = require('mongoose');





const UsersSchema = Schema({
    name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    active: {
        type: Boolean
    },
    dob: {
        type: Date
    },
    notes: {
        type: String
    },
}, {versionKey: false});





module.exports = model('User', UsersSchema);