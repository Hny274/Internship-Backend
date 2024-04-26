const express = require("express");
const {
  addBooking,
  getBookings,
} = require("../Controller/booking.controller.js");

const router = express.Router();

router.post("/add-booking", addBooking);
router.get("/get-bookings", getBookings);

module.exports = router;
