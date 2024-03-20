const { json } = require("body-parser");
const Entry = require("../models/entry");
const User = require("../models/user");

module.exports.newEntry = async(req, res)=>{
    let [error_msg, success_msg, warn_msg] = [];
    await Entry.create({
        title: req.body.title,
        content: req.body.entryMatter,
        date : req.body.date,
        user: req.body.user_id
    }).then(async(data)=>{
        success_msg = ("🎉 Yay! Created New Entry..");
    }).catch((err)=>{
        error_msg = ("☹️ Error! Please try Again !");
    });

    return res.status(200).send({
        error_msg : error_msg,
        success_msg: success_msg,
        warn_msg: warn_msg
    });

}

module.exports.getEntries = async(req, res)=>{
    let user_id = req.body.id;
    let userEntriesData = [];
    await User.findById(user_id).then(async(user)=>{
        let userEmail = user.email;
        await Entry.find({}).populate('user').then(async(temp)=>{
            await temp.map(async(entry)=>{
                if(await entry.user.email === userEmail){
                    await userEntriesData.push(entry);
                }
            });
        });
    });
    return res.status(200).send({
        userEntriesData : userEntriesData
    });
}


module.exports.viewEntry = async(req, res)=>{
    let entry_id = req.body.entry_id;
    await Entry.findById(entry_id).then(async(entry)=>{
        return res.status(200).send({
            entryObj : entry
        });
    }).catch((err)=>{
        return res.status(200).send({
            error_msg: "Error in Fetching Entry !"
        });
    })
}

module.exports.editEntry = async(req, res)=>{
    const {editedTitle, editedDate, editedContent, entry_id} = req.body;
    await Entry.findByIdAndUpdate(entry_id, {
        title: editedTitle,
        date: editedDate,
        content: editedContent
    }).then(async(resp)=>{
        const default_msg = "Saved !";
        return res.status(200).send({
            default_msg: default_msg
        });
    }).catch(async(err)=>{
        const error_msg = "Error ! Not Saved";
        return res.status(200).send({
            error_msg: error_msg 
        });
    });
}