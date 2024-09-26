const mongoose = require('mongoose');

const contact = new mongoose.Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String
    },
    favorite_color: {
        type: String
    },
    birthday: {
        type: String
    }
});

module.exports  = Contact = mongoose.model('Contacts', contact);