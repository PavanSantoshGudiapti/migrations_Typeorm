const loginModel = require('../models/loginModel');


// async function getAllLOgins(req,res){
//   const login = loginModel.fing({});
//   res.send(login)
// }


async function createLogin (req,res) {
const login = await new loginModel({
    name:req.body.name,
    email:req.body.email,
    Phone:req.body.Phone,

});
login.save().then(()=> res.send("Created sucssfully"))
.catch((err)=>res.send("failed"))
}

module.exports = {
    createLogin,
    
}