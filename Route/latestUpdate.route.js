const express = require("express");

const {
  addLatestUpdate,
  getLatestUpdateById,
  getLatestUpdates,
  updateLatestUpdate,
  deleteLatestUpdate,
} = require("../Controller/latestUpdates.controller.js");

const router = express.Router();

router.get("/get-latestUpdate/:id", getLatestUpdateById);
router.post("/add-latestUpdate", addLatestUpdate);
router.get("/get-latestUpdates", getLatestUpdates);
router.put("/update-latestUpdate/:id", updateLatestUpdate);
router.delete("/delete-latestUpdate/:id", deleteLatestUpdate);

module.exports = router;
