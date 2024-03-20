const User = require("../models/user");

module.exports.home = function(req, res){
    res.send("This is the home page of Server");
}

module.exports.register = async function(req, res){
    let [error_msg, success_msg, warn_msg] = [];
    let user_email = req.body.email;
    await User.findOne({email: user_email}).then(async(user)=>{
        if(!user){
            await User.create(req.body).then((user)=>{
                success_msg = "Account Created.. Please Login !";
            }).catch((err)=>{
                error_msg = "Error.. Please try again !!";
            });
        }
        else{
            error_msg = "Account already Exists.. !";
            warn_msg = "Please Login !";
        }
    });
    return res.status(200).send({
        error_msg : error_msg,
        success_msg: success_msg,
        warn_msg: warn_msg
    });
}

module.exports.login = async function(req, res){
    let [error_msg, success_msg, warn_msg] = [];
    let user_email = req.body.email;
    let user_password = req.body.password;
    await User.findOne({email: user_email}).then(async(user)=>{
        if(!user){
            warn_msg = "Email not found !";
            return res.status(200).send({
                warn_msg : warn_msg
            });
        }
        else if(user){
            if(user.password !== user_password){
                error_msg = "Incorrect password !";
                return res.status(200).send({
                    error_msg : error_msg
                });
            }
            else{
                success_msg = "Login Success !"
                return res.status(200).send({
                    id: user._id, 
                    success_msg :success_msg
                });
            }
        }
    })
}