const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const contactsController = require('../controllers/contactsController');


router.get('/', async (req, res) => {
    res.send(await contactsController.getAllContacts());
});

router.get('/:id', async (req, res) => {
    res.send(await contactsController.getContactByID(req.params.id));
})

module.exports = router;