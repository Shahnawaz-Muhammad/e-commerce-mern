const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const authMiddleware = (req, res, next) => {
  // Get the Token from the Header
  const { authorization } = req.headers;
  const token = authorization;
    // Check If not token

  if (!token) return res.status(401).send("Access denied");
    
  // Verify token
  try {
    const decode = jwt.verify(token.split(" ")[1], process.env.JWT_PRIVATE_KEY);
    req.user = decode;
    next();
  } catch (err) {
    res.status(400).send("Access Denied ");
  }
};

//check if user is deleted or not
const isDeletedMiddleware = async (req, res, next) => {
  const { id } = req.user;
  const user = await User.findOne({ _id: id, isDeleted: false });
  if (!user) {
    return res.status(400).send({
      message: "User Not found",
    });
  }
  next();
};

module.exports = {
  authMiddleware,
  isDeletedMiddleware,
};
