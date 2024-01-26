const DiscussionModel = require("../models/discussions.model");

const verifyAuth = async (req, res, next) => {
    try {
        const { authorization } = req.headers;

        if(!authorization) {
            return res.status(403).json({message: "Unauthorized Access"})
        }

        if(authorization !== process.env.API_KEY) {
            return res.status(403).json({message: "Unauthorized Token"})
        } 

        if(authorization === process.env.API_KEY) {
            const isDiscussionExists = await DiscussionModel.find({});
            
            if(!isDiscussionExists){
                return res.status(404).json({message: "No Discussions found"});
            }
        } 

        next();

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({message: "Internal Server Error"}); 
    }

}

module.exports = {
    verifyAuth,

}