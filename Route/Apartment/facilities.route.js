const express = require("express");
const Facilities = require("../../Model/Apartment/facilities.model.js");
const {
  modifyController,
  getController,
} = require("../../Utils/baseController.js");
const upload = require("../../Middleware/multer.middleware.js");

const router = express.Router();

router.get("/get-facilities/:projectId", getController(Facilities));
router.post(
  "/modify-facilities/:projectId",
  upload.single("image"),
  modifyController(Facilities)
);

module.exports = router;
