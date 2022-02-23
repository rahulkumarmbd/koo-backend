const express = require("express");
const app = express();
app.use(express.json());



const qualificationController = require("./controllers/qualification.controller");
const userController = require("./controllers/user.controller");
const workExperienceController = require("./controllers/workExperience.controller");
const commentController = require("./controllers/comment.controller");
const postController = require("./controllers/post.controller");

app.use("/users",userController);
app.use("/qualifications",qualificationController);
app.use("/workExperiences",workExperienceController);
app.use("/comments",commentController);
app.use("/posts",postController);

module.exports = app;