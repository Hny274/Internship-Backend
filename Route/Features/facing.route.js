const express = require("express");
const Facing = require("../../Model/Features/facing.model.js");
const {
  modifyController,
  getController,
} = require("../../Utils/baseController.js");
const upload = require("../../Middleware/multer.middleware.js");

const router = express.Router();

router.get("/get-facing/:projectId", getController(Facing));
router.post(
  "/modify-facing/:projectId",
  upload.single("image"),
  modifyController(Facing)
);

module.exports = router;
