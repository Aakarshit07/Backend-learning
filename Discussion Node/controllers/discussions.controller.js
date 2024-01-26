const DiscussionModel = require("../models/discussions.model");

//* Create discussion
const createDiscussion = async (req, res) => {
    try {
        const newDiscussion = await DiscussionModel(req.body);
        console.log("Body Creating before",newDiscussion);
        
        const isAuthorExists = await DiscussionModel.findOne({author: newDiscussion.author});
        
        if(isAuthorExists) {
            return res.status(404).json({message: "Fail to create new discussion", author, reason: "Author Already exists in DB"})
        } else {
            console.log(newDiscussion);
            const data = await newDiscussion.save();
            return res.status(201).json(data);
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

//* Get all discussions
const getAllDiscussion = async (req, res) => {
    try {
        const getAllDiscussions = await DiscussionModel.find({});
        console.log("Get all discussions: ",getAllDiscussions);
        return res.status(200).json(getAllDiscussions);

    } catch (error) {
        console.log(error.message);
        return res.status(500).json(error)
    }
}

const getAllDiscussionByUsername = async (req, res) => {
    try {
        console.log(req.params);
        const { author } = req.params;
        const getByUsername = await DiscussionModel.find({author: author});
        
        if(!getByUsername && getByUsername.length === 0) {
            return res.status(404).json({message: "No discussions found for this user", author})
        } 
        
        console.log("Get all discussions username: ", getByUsername);
        
        return res.status(200).json(getByUsername);

    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
    }
}

const getAllDiscussionByID = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const getById = await DiscussionModel.findOne({_id: id});
        
        if(!getById) {
            return res.status(404).json({message: "No discussions found for this user", id})
        } 
        
        console.log("Get all discussions Id: ", getById);
        
        return res.status(200).json(getById);

    } catch (error) {
        console.log(error.message);
        return res.status(500).json(error)
    }
}


module.exports = {
    createDiscussion,
    getAllDiscussion,
    getAllDiscussionByUsername,
    getAllDiscussionByID,
}