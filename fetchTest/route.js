const express= require("express");
const router = express.Router();
const {getUserData}=require("./controller/user.controller")

router.get("/data",getUserData);

module.exports=router;
