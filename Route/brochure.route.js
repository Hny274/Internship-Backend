const express = require("express");
const Brochure = require("../Model/brochure.model.js");
const {
  modifyController,
  getController,
} = require("../Utils/baseController.js");
const upload = require("../Middleware/multer.middleware.js");

const router = express.Router();

router.get("/get-brochure/:projectId", getController(Brochure));
router.post(
  "/modify-brochure/:projectId",
  upload.single("pdf"),
  modifyController(Brochure)
);

module.exports = router;
