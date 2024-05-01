const express = require("express");
const {
  addAdvertisement,
  getAdvertisements,
  getAdvertisementById,
  updateAdvertisement,
  deleteAdvertisement,
} = require("../Controller/advertisement.controller.js");
const upload = require("../Middleware/multer.middleware.js");

const router = express.Router();

router.get("/get-advertisementById/:id", getAdvertisementById);
router.post("/add-advertisement", upload.array("images", 3), addAdvertisement);
router.get("/get-advertisements", getAdvertisements);
router.put(
  "/update-advertisement/:id",
  upload.array("images", 3),
  updateAdvertisement
);
router.delete("/delete-advertisement/:id", deleteAdvertisement);

module.exports = router;
