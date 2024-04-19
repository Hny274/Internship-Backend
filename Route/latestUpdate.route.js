const express = require("express");

const {
  addLatestUpdate,
  getLatestUpdateById,
  getLatestUpdates,
  updateLatestUpdate,
  deleteLatestUpdate,
} = require("../Controller/latestUpdates.controller.js");

const upload = require("../Middleware/multer.middleware.js");

const router = express.Router();

router.get("/get-latestUpdate/:id", getLatestUpdateById);
router.post("/add-latestUpdate", upload.single("image"), addLatestUpdate);
router.get("/get-latestUpdates", getLatestUpdates);
router.put(
  "/update-latestUpdate/:id",
  upload.single("image"),
  updateLatestUpdate
);
router.delete("/delete-latestUpdate/:id", deleteLatestUpdate);

module.exports = router;
