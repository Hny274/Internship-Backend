const jwt = require("jsonwebtoken");
const ApiResponse = require("../Utils/apiResponse.js");
const Admin = require("../Model/admin.model.js");
// const Reset = require("../models/reset.model.js");
// const bcrypt = require("bcrypt");

const addAdminHandler = async (req, res) => {
  try {
    const admin = await Admin.create(req.body);
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          { id: admin._id, email: admin.email },
          "Admin Added Successfully!"
        )
      );
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(new ApiResponse(500, [], "Internal Server Error"));
  }
};

const adminLoginHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(404).json(new ApiResponse(404, [], "Admin Not Found!"));
    }
    const isPassword = await admin.isPasswordCorrect(password);
    if (isPassword) {
      const token = jwt.sign(
        JSON.stringify({ _id: admin._id }),
        process.env.JWTSECRETKEY
      );
      return res.json(new ApiResponse(200, { token }, "Login Successful"));
    } else {
      return res
        .status(401)
        .json(new ApiResponse(401, [], "Invalid Credentials!"));
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(new ApiResponse(500, [], "Internal Server Error"));
  }
};

module.exports = {
  adminLoginHandler,
  addAdminHandler,
};
