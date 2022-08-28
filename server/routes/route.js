
const express=require("express");


const {addUser,getUsers,getUser,editUser,deleteUser}=require("../Controller/user-controller")


const router=express.Router();


router.post("/add", addUser)
router.get("/all", getUsers)
router.get("/:id", getUser)
router.put("/:id", editUser)
router.delete("/:id", deleteUser)


module .exports=router