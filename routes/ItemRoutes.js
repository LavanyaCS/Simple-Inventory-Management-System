const express = require("express");
const {getItems, createItems, editItems, deleteItems} = require("../controller/ItemController");
const router = express.Router();

//Get Methid
router.get("/items", getItems);
router.post("/items/add/", createItems);
router.put("/items/edit/:id", editItems);
router.delete("/items/:id", deleteItems);

module.exports = router;