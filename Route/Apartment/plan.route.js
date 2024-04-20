const express = require("express");
const Plan = require("../../Model/Apartment/plan.model.js");
const {
  modifyController,
  getController,
} = require("../../Utils/baseController.js");
const upload = require("../../Middleware/multer.middleware.js");

const router = express.Router();

router.get("/get-plan/:projectId", getController(Plan));
router.post(
  "/modify-plan/:projectId",
  upload.single("image"),
  modifyController(Plan)
);

module.exports = router;
