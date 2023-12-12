const express = require('express');
const { registerUser, getProfile, loginUser } = require('../controllers/user.controller');
const { authMiddleware, isDeletedMiddleware } = require('../middlewares/auth.middleware');
const routes = express.Router();

// routes.get("/:id", getSingleUsers)
routes.post("/registerUser", registerUser)

routes.post("/loginUser", loginUser)

routes.get("/profile", authMiddleware, isDeletedMiddleware, getProfile)

module.exports = routes
