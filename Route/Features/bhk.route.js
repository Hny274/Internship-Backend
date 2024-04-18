const express = require("express");
const BHK = require("../../Model/Features/bhk.model.js");
const {
  modifyController,
  getController,
} = require("../../Utils/baseController.js");
const upload = require("../../Middleware/multer.middleware.js");

const router = express.Router();

router.get("/get-bhk/:projectId", getController(BHK));
router.post(
  "/modify-bhk/:projectId",
  upload.single("image"),
  modifyController(BHK)
);

module.exports = router;
