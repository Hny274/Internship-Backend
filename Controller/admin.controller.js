const jwt = require("jsonwebtoken");
const ApiResponse = require("../Utils/apiResponse.js");
const Admin = require("../Model/admin.model.js");
const ResetToken = require("../Model/resetToken.model");
const { sendMail } = require("../Utils/resetMail.js");
const bcrypt = require("bcrypt");

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

const generateToken = (adminId) => {
  return jwt.sign({ adminId }, process.env.JWTSECRETKEY, { expiresIn: "1h" });
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    const token = generateToken(admin._id);
    const resetToken = new ResetToken({ token });
    await resetToken.save();
    sendMail(admin.email, resetToken._id);
    return res.status(200).json({ message: "Reset password email sent" });
  } catch (error) {
    console.error("Error resetting password:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const updatePassword = async (req, res) => {
  const { token, password } = req.body;
  try {
    if (!token) {
      return res.status(404).json({ message: "Token not found" });
    }
    const resetTokenData = await ResetToken.findById(token);
    if (!resetTokenData) {
      return res.status(404).json({ message: "Token not found" });
    }
    try {
      const tokenData = jwt.verify(
        resetTokenData.token,
        process.env.JWTSECRETKEY
      );

      const hashedPassword = await bcrypt.hash(password, 10);

      await Admin.findByIdAndUpdate(tokenData.adminId, {
        password: hashedPassword,
      });

      await ResetToken.findByIdAndDelete(token);

      return res.status(200).json({ message: "Password updated successfully" });
    } catch (error) {
      console.error("Error verifying JWT:", error);
      return res.status(401).json({ message: "Invalid Token" });
    }
  } catch (error) {
    console.error("Error resetting password:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  adminLoginHandler,
  addAdminHandler,
  forgotPassword,
  updatePassword,
};
