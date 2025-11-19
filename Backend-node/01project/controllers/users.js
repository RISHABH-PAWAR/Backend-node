const User = require("../models/users")

async function handleGetAllUsers(req,res){
  const allDbusers = await User.find({})
  return res.json(allDbusers)
}

async function handleGetUserById(req,res) {
  const user = await User.findById(req.params.id)
  if(!user) return res.status(404).json({error: "user not found" });
  return res.json(user)
  
}
async function handleUpdateUserByid(req,res) {
  await User.findByIdAndUpdate(req.params.id,{lastName : "changed"})
  return res.json ({status:"success"})
}

async function handleDeleteUserByid(req,res) {
  await User.findByIdAndUpdate(req.params.id,{lastName : "changed"})
  return res.json ({status:"success"})
}

async function handleCreateNewUser(req,res){
  const body  = req.body;
  if(
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ){
    return res.status(404).json({msg: "All field are req..."})
  }
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
    
  })
  return res.status(201).json({msg:"success", id: result._id});
}

module.exports={
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserByid,
  handleDeleteUserByid,
  handleCreateNewUser,
}