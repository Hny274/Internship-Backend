const express = require("express");
const router = express.Router();
const Testimonial = require("../Model/testimonial.model");
const ApiResponse = require("../Utils/apiResponse");

const addTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.create(req.body);
    res
      .status(200)
      .json(
        new ApiResponse(200, testimonial, "Testimonial Added Successfully!")
      );
  } catch (err) {
    res.status(400).json(new ApiResponse(400, null, err.message));
  }
};

const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res
      .status(200)
      .json(
        new ApiResponse(200, testimonials, "Testimonials Fetched Successfully!")
      );
  } catch (err) {
    res.status(500).json(new ApiResponse(500, null, err.message));
  }
};

const getTestimonialById = async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    if (!testimonial) {
      return res
        .status(404)
        .json(new ApiResponse(404, null, "Testimonial not found"));
    }
    res
      .status(200)
      .json(
        new ApiResponse(200, testimonial, "Testimonial Fetched Successfully!")
      );
  } catch (err) {
    res.status(500).json(new ApiResponse(500, null, err.message));
  }
};

const updateTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!testimonial) {
      return res
        .status(404)
        .json(new ApiResponse(404, null, "Testimonial not found"));
    }
    res
      .status(200)
      .json(
        new ApiResponse(200, testimonial, "Testimonial Updated Successfully!")
      );
  } catch (err) {
    res.status(500).json(new ApiResponse(500, null, err.message));
  }
};

const deleteTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndDelete(req.params.id);
    if (!testimonial) {
      return res
        .status(404)
        .json(new ApiResponse(404, null, "Testimonial not found"));
    }
    res
      .status(200)
      .json(new ApiResponse(200, {}, "Testimonial Deleted Successfully!"));
  } catch (err) {
    res.status(500).json(new ApiResponse(500, null, err.message));
  }
};

module.exports = {
  addTestimonial,
  getTestimonials,
  getTestimonialById,
  updateTestimonial,
  deleteTestimonial,
};
