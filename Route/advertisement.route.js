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
router.post("/add-advertisement", upload.single("image"), addAdvertisement);
router.get("/get-advertisements", getAdvertisements);
router.put(
  "/update-advertisement/:id",
  upload.single("image"),
  updateAdvertisement
);
router.delete("/delete-advertisement/:id", deleteAdvertisement);

module.exports = router;
