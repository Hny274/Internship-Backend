const express = require("express");
const {
  addAdminHandler,
  adminLoginHandler,
} = require("../Controller/admin.controller.js");

const router = express.Router();

router.post("/login", adminLoginHandler);
router.post("/add-admin", addAdminHandler);

module.exports = router;
