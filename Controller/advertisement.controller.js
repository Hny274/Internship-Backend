const express = require("express");
const Advertisement = require("../Model/advertisement.model");
const ApiResponse = require("../Utils/apiResponse");

const addAdvertisement = async (req, res) => {
  try {
    let image = "";
    if (req.file) {
      image = req.file.filename;
    }
    const advertisement = await Advertisement.create({
      ...req.body,
      image: image,
    });
    res
      .status(200)
      .json(
        new ApiResponse(200, advertisement, "Advertisement Added Successfully!")
      );
  } catch (err) {
    res.status(400).json(new ApiResponse(400, null, err.message));
  }
};

const getAdvertisements = async (req, res) => {
  try {
    const advertisements = await Advertisement.find();
    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          advertisements,
          "Advertisements Fetched Successfully!"
        )
      );
  } catch (err) {
    res.status(500).json(new ApiResponse(500, null, err.message));
  }
};

const getAdvertisementById = async (req, res) => {
  try {
    const advertisement = await Advertisement.findById(req.params.id);
    if (!advertisement) {
      return res
        .status(404)
        .json(new ApiResponse(404, null, "Advertisement not found"));
    }
    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          advertisement,
          "Advertisement Fetched Successfully!"
        )
      );
  } catch (err) {
    res.status(500).json(new ApiResponse(500, null, err.message));
  }
};

const updateAdvertisement = async (req, res) => {
  try {
    let updateFields = { ...req.body };
    let image = "";
    if (req.files && req.files.length > 0) {
      image = req.files[0].filename;
    }
    updateFields.image = image;
    const advertisement = await Advertisement.findByIdAndUpdate(
      req.params.id,
      updateFields,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!advertisement) {
      return res
        .status(404)
        .json(new ApiResponse(404, null, "Advertisement not found"));
    }
    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          advertisement,
          "Advertisement Updated Successfully!"
        )
      );
  } catch (err) {
    res.status(500).json(new ApiResponse(500, null, err.message));
  }
};

const deleteAdvertisement = async (req, res) => {
  try {
    const advertisement = await Advertisement.findByIdAndDelete(req.params.id);
    if (!advertisement) {
      return res
        .status(404)
        .json(new ApiResponse(404, null, "Advertisement not found"));
    }
    res
      .status(200)
      .json(new ApiResponse(200, {}, "Advertisement Deleted Successfully!"));
  } catch (err) {
    res.status(500).json(new ApiResponse(500, null, err.message));
  }
};

module.exports = {
  addAdvertisement,
  getAdvertisements,
  getAdvertisementById,
  updateAdvertisement,
  deleteAdvertisement,
};
