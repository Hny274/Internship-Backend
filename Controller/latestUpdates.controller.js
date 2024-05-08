const LatestUpdate = require("../Model/latestUpdate.model");
const ApiResponse = require("../Utils/apiResponse");

const addLatestUpdate = async (req, res) => {
  try {
    let image = "";
    if (req.file) {
      image = req.file.filename;
    }
    const latestUpdate = await LatestUpdate.create({
      ...req.body,
      image: image,
    });
    res
      .status(201)
      .json(
        new ApiResponse(201, latestUpdate, "Latest Update Added Successfully!")
      );
  } catch (err) {
    res.status(400).json(new ApiResponse(400, null, err.message));
  }
};


const getLatestUpdates = async (req, res) => {
  try {
    const latestUpdates = await LatestUpdate.find();
    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          latestUpdates,
          "Latest Updates Fetched Successfully!"
        )
      );
  } catch (err) {
    res.status(500).json(new ApiResponse(500, null, err.message));
  }
};

const getLatestUpdateById = async (req, res) => {
  try {
    const latestUpdate = await LatestUpdate.findById(req.params.id);
    if (!latestUpdate) {
      return res
        .status(404)
        .json(new ApiResponse(404, null, "Latest Update not found"));
    }
    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          latestUpdate,
          "Latest Update Fetched Successfully!"
        )
      );
  } catch (err) {
    res.status(500).json(new ApiResponse(500, null, err.message));
  }
};

const updateLatestUpdate = async (req, res) => {
  try {
    let updateFields = { ...req.body };
    if (req.file) {
      updateFields.image = req.file.filename;
    }
    const latestUpdate = await LatestUpdate.findByIdAndUpdate(
      req.params.id,
      updateFields,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!latestUpdate) {
      return res
        .status(404)
        .json(new ApiResponse(404, null, "Latest Update not found"));
    }
    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          latestUpdate,
          "Latest Update Updated Successfully!"
        )
      );
  } catch (err) {
    res.status(500).json(new ApiResponse(500, null, err.message));
  }
};

const deleteLatestUpdate = async (req, res) => {
  try {
    const latestUpdate = await LatestUpdate.findByIdAndDelete(req.params.id);
    if (!latestUpdate) {
      return res
        .status(404)
        .json(new ApiResponse(404, null, "Latest Update not found"));
    }
    res
      .status(200)
      .json(new ApiResponse(200, {}, "Latest Update Deleted Successfully!"));
  } catch (err) {
    res.status(500).json(new ApiResponse(500, null, err.message));
  }
};

module.exports = {
  addLatestUpdate,
  getLatestUpdateById,
  getLatestUpdates,
  updateLatestUpdate,
  deleteLatestUpdate,
};
