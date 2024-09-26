const Contact = require('../models/Contact');

const getAllContacts = async () => {
    return await Contact.find();
}

const getContactByID = async (id) => {
    return await Contact.find({_id:id});
}

module.exports = {getAllContacts, getContactByID};