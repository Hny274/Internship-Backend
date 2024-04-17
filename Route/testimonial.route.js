const express = require("express");
const {
  addTestimonial,
  getTestimonialById,
  getTestimonials,
  updateTestimonial,
  deleteTestimonial,
} = require("../Controller/testimonial.controller.js");

const router = express.Router();

router.get("/get-testimonial/:id", getTestimonialById);
router.post("/add-testimonial", addTestimonial);
router.get("/get-testimonials", getTestimonials);
router.patch("/update-testimonial/:id", updateTestimonial);
router.delete("/delete-testimonial/:id", deleteTestimonial);

module.exports = router;
