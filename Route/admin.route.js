const express = require("express");
const {
  addAdminHandler,
  adminLoginHandler,
  updatePassword,
  forgotPassword,
} = require("../Controller/admin.controller.js");

const router = express.Router();

router.post("/login", adminLoginHandler);
router.post("/add-admin", addAdminHandler);
router.post("/forgot-password", forgotPassword);
router.post("/update-password", updatePassword);

module.exports = router;
