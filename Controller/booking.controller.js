const express = require("express");
const router = express.Router();
const Booking = require("../Model/booking.model");
const ApiResponse = require("../Utils/apiResponse");

const addBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    res
      .status(200)
      .json(new ApiResponse(200, booking, "Booking Added Successfully!"));
  } catch (err) {
    res.status(400).json(new ApiResponse(400, null, err.message));
  }
};

const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("projectId");
    res
      .status(200)
      .json(new ApiResponse(200, bookings, "Bookings Fetched Successfully!"));
  } catch (err) {
    res.status(500).json(new ApiResponse(500, null, err.message));
  }
};

module.exports = {
  addBooking,
  getBookings,
};
