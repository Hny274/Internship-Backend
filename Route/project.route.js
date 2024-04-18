const express = require("express");
const {
  addProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
} = require("../Controller/project.controller.js");
const upload = require("../Middleware/multer.middleware.js");

const router = express.Router();

router.post("/add-project", upload.single("image"), addProject);
router.get("/get-projects", getProjects);
router.get("/get-project/:id", getProjectById);
router.put("/update-project/:id", upload.single("image"), updateProject);
router.delete("/delete-project/:id", deleteProject);

module.exports = router;
