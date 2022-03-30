const Register = require("../models/registerModel");

async function IdIsAdmin(req, res, next) {
  let adminId;
  try {
    adminId = await Register.findById(req.body.id);
    adminId = adminId.isAdmin;
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "this id is not valid" });
  }

  if (adminId) {
    return res.status(401).json({ message: "You cannot remove admins" });
  }
  next();
}

module.exports = IdIsAdmin;
