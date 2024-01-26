const router = require("express").Router();
const { verifyAuth } = require("../middlewares/discussions.middleware");
const {
    createDiscussion, 
    getAllDiscussion,
    getAllDiscussionByUsername,
    getAllDiscussionByID,
} = require("../controllers/discussions.controller");

router.post("/new", createDiscussion);
router.get("/all", verifyAuth, getAllDiscussion);
router.get("/user/:author", getAllDiscussionByUsername);
router.get("/id/:id", getAllDiscussionByID);

// router.patch("/id/:id")
// router.put("/:id/comment")
// router.delete("/id/:id")

module.exports = router;