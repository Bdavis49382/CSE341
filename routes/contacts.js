const express = require("express");
const router = express.Router();
const contactsController = require("../controllers/contactsController");

router.get("/", async (req, res) => {
  res.send(await contactsController.getAllContacts());
});

router.get("/:id", async (req, res) => {
  res.send(await contactsController.getContactByID(req.params.id));
});

router.post("/", async (req, res) => {
  res.status(201).send({ id: await contactsController.saveContact(req.body) });
});

router.put("/:id", async (req, res) => {
  res
    .status(204)
    .send(await contactsController.updateContact(req.params.id, req.body));
});

router.delete("/:id", async (req, res) => {
  res.send(await contactsController.deleteContact(req.params.id));
});

module.exports = router;
