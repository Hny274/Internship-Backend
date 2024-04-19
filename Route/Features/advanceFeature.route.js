const express = require("express");
const AdvanceFeature = require("../../Model/Features/advanceFeature.model.js");
const {
  modifyController,
  getController,
} = require("../../Utils/baseController.js");
const upload = require("../../Middleware/multer.middleware.js");

const router = express.Router();

router.get("/get-advanceFeature/:projectId", getController(AdvanceFeature));
router.post(
  "/modify-advanceFeature/:projectId",
  upload.single("image"),
  modifyController(AdvanceFeature)
);

module.exports = router;
