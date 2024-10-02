const Contact = require("../models/Contact");

const getAllContacts = async () => {
  return await Contact.find();
};

const getContactByID = async (id) => {
  return await Contact.find({ _id: id });
};

const saveContact = async (newContact) => {
  const contact = new Contact(newContact);
  const result = await contact.save(newContact);
  return result._id;
};

const updateContact = async (id, contact) => {
  const result = Contact.updateOne({ _id: id }, contact);
  return result;
};

const deleteContact = async (id) => {
  const result = Contact.deleteOne({ _id: id });
  return result;
};

module.exports = {
  getAllContacts,
  getContactByID,
  saveContact,
  updateContact,
  deleteContact,
};
