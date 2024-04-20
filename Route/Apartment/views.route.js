const express = require("express");
const Views = require("../../Model/Apartment/views.model.js");
const {
  modifyController,
  getController,
} = require("../../Utils/baseController.js");
const upload = require("../../Middleware/multer.middleware.js");

const router = express.Router();

router.get("/get-views/:projectId", getController(Views));
router.post(
  "/modify-views/:projectId",
  upload.array("images", 5),
  modifyController(Views, "multiple")
);

module.exports = router;
