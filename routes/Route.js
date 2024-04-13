const express = require("express");
const router = express.Router();
const { home_page } = require("../controllers/mainController.js");

router.get("/", home_page);

module.exports = router;
