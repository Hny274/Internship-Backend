const ApiResponse = require("./apiResponse.js");

const getController = (Model) => async (req, res) => {
  try {
    const projectId = req.params.projectId;
    if (!projectId) {
      return res
        .status(400)
        .json(new ApiResponse(400, [], "Project Id Missing!"));
    }
    const data = await Model.findOne({ projectId });
    return res
      .status(200)
      .json(new ApiResponse(200, data, "Data get Successfull!"));
  } catch (err) {
    return res.status(500).json(new ApiResponse(500, [], err.message));
  }
};

const modifyController = (Model, type) => async (req, res) => {
  try {
    const projectId = req.params.projectId;
    if (!projectId) {
      return res
        .status(400)
        .json(new ApiResponse(400, [], "Project Id Missing!"));
    }
    const existing = await Model.findOne({ projectId });
    let data;
    let message;
    if (existing) {
      message = "Data Updated!";
      if (type === "multiple") {
        if (req.files && req.files.length > 0) {
          const fileNames = req.files.map((file) => file.filename);
          data = await Model.findByIdAndUpdate(
            existing._id,
            { images: fileNames, ...req.body },
            { new: true }
          );
        } else {
          data = await Model.findByIdAndUpdate(existing._id, req.body, {
            new: true,
          });
        }
      } else {
        if (req.file) {
          data = await Model.findByIdAndUpdate(
            existing._id,
            {
              [req.file.filename.includes(".pdf") ? "pdf" : "image"]:
                req.file.filename,
              ...req.body,
            },
            { new: true }
          );
        } else {
          data = await Model.findByIdAndUpdate(existing._id, req.body, {
            new: true,
          });
        }
      }
    } else {
      message = "Data Added!";
      if (type === "multiple") {
        if (req.files && req.files.length > 0) {
          const fileNames = req.files.map((file) => file.filename);
          data = await Model.create({
            images: fileNames,
            ...req.body,
            projectId,
          });
        } else {
          data = await Model.create({ ...req.body, projectId });
        }
      } else if (req.file) {
        data = await Model.create({
          projectId,
          ...req.body,
          [req.file.filename.includes(".pdf") ? "pdf" : "image"]:
            req.file.filename,
        });
      } else {
        data = await Model.create({ projectId, ...req.body });
      }
    }
    res.status(201).json(new ApiResponse(201, data, message));
  } catch (err) {
    return res.status(500).json(new ApiResponse(500, [], err.message));
  }
};

module.exports = {
  getController,
  modifyController,
};
