const User = require("../model/UserModel");

//Login
const loginUser = (req,res) => {
    const {email,password} = req.body;
    if(!email || !password ){
       return res.status(404).json({message:"Both fields required"});
    }
    const loginUser = User.find(data => data.email === email && data.password === password);
    if(loginUser){
       return res.status(200).json(
        {
            message:"Login Successfully",
            user:{
                id:loginUser.id,
                name:loginUser.name,
                role:loginUser.role
            }
        }
       ) 
    }
    else{
        res.status(401).json({message:"User is not found"})
    }
}

module.exports = { loginUser }