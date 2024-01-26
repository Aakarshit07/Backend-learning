const express = require("express");
const connectionToDB =  require("./database/config");
const discussionRouter = require("./routes/discussions.route");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use("/discussions", discussionRouter);

//Invaild Routes;
app.get("*", (req, res) => {
    return res.send("Invaild Page");
});

app.listen(PORT, async (req, res) => {
    await connectionToDB();
    console.log(`Server Running..at ${PORT}`);
});