const express = require("express");
const Floor = require("../../Model/Features/floor.model.js");
const {
  modifyController,
  getController,
} = require("../../Utils/baseController.js");
const upload = require("../../Middleware/multer.middleware.js");

const router = express.Router();

router.get("/get-floor/:projectId", getController(Floor));
router.post(
  "/modify-floor/:projectId",
  upload.single("image"),
  modifyController(Floor)
);

module.exports = router;
