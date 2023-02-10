const {getUserService}=require("../service/user.service")
const httpStatus = require("http-status");

const getUserData=(async(req,res)=>{
    const data= await getUserService();
    if(data==null)
    {
        res.status(httpStatus.NOT_FOUND)
    }
    res.send(data).status(200);

})


module.exports={
    getUserData
}