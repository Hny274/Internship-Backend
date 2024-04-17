const express = require("express");
const BHK = require("../../Model/Features/bhk.model.js")
const { modifyController, getController } = require("../../Utils/baseController.js");

const router = express.Router();

router.get("/get-bhk/:projectId", getController(BHK));
router.post("/modify-bhk/:projectId", modifyController(BHK));


module.exports = router;
