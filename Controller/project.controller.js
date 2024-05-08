const ApiResponse = require("../Utils/apiResponse.js");

const Project = require("../Model/project.model.js");

const addProject = async (req, res) => {
  try {
    const project = new Project({ ...req.body, image: req.file.filename });
    const data = await project.save();
    return res.status(200).json(new ApiResponse(200, data, "Project Added!"));
  } catch (err) {
    return res.status(400).json(new ApiResponse(400, null, err.message));
  }
};

const getProjects = async (req, res) => {
  try {
    const { type } = req.query;
    let projects;
    if (type) {
      projects = await Project.find({ type });
    } else {
      projects = await Project.find();
    }
    return res.json(new ApiResponse(200, projects, "Projects Retrieved"));
  } catch (err) {
    return res.status(500).json(new ApiResponse(500, null, err.message));
  }
};

const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res
        .status(404)
        .json(new ApiResponse(404, null, "Project not found"));
    }
    return res.json(new ApiResponse(200, project, "Project Retrieved"));
  } catch (err) {
    return res.status(500).json(new ApiResponse(500, null, err.message));
  }
};

const updateProject = async (req, res) => {
  try {
    let updateFields = { ...req.body };
    if (req.file) {
      updateFields.image = req.file.filename;
    }
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      updateFields,
      { new: true }
    );
    if (!updatedProject) {
      return res
        .status(404)
        .json(new ApiResponse(404, null, "Project not found"));
    }
    return res.json(new ApiResponse(200, updatedProject, "Project Updated"));
  } catch (err) {
    return res.status(500).json(new ApiResponse(500, null, err.message));
  }
};


const deleteProject = async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (!deletedProject) {
      return res
        .status(404)
        .json(new ApiResponse(404, null, "Project not found"));
    }
    return res.json(new ApiResponse(200, null, "Project Deleted"));
  } catch (err) {
    return res.status(500).json(new ApiResponse(500, null, err.message));
  }
};

module.exports = {
  addProject,
  getProjectById,
  getProjects,
  updateProject,
  deleteProject,
};
