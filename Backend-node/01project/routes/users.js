const express = require("express");
const {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserByid,
  handleDeleteUserByid,
  handleCreateNewUser,
} = require("../controllers/users")

const router = express.Router();


// REST api
router.route("/").get(handleGetAllUsers).post(handleCreateNewUser);

router.route('/:id')
.get(handleGetUserById)
.delete (handleDeleteUserByid)
.patch (handleUpdateUserByid)

module.exports =router;

