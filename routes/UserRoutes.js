const express = require("express");
const router = express.Router();
const { loginUser } = require("../controller/UserController");

router.post('/auth/login',loginUser);

module.exports = router;
