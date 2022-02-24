const express = require("express");
const app = express();
const fast2sms = require("fast-two-sms");
const transporter = require("./config/email");

app.use(express.json());

const qualificationController = require("./controllers/qualification.controller");
const userController = require("./controllers/user.controller");
const workExperienceController = require("./controllers/workExperience.controller");
const commentController = require("./controllers/comment.controller");
const postController = require("./controllers/post.controller");

app.use("/users", userController);
app.use("/qualifications", qualificationController);
app.use("/workExperiences", workExperienceController);
app.use("/comments", commentController);
app.use("/posts", postController);

app.post("/phoneotp", async (req, res) => {
  try {
    function random(Number) {
      return Math.round(Number * Math.random());
    }

    const otp = random(1000000);

    var options = {
      authorization: process.env.YOUR_API_KEY,
      message: `Dear Customer your otp is ${otp}. Please Don't Share with anyone`,
      numbers: [`${req.body.mobileNum}`],
    };
    const response = await fast2sms.sendMessage(options);
    res.status(201).send({response,otp});
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/gmailotp", (req, res) => {
  try {
    function random(Number) {
      return Math.round(Number * Math.random());
    }

    const otp = random(1000000);

    const mailOptions = {
      from: "kooappclone@gmail.com", // sender address
      to: req.body.email, // list of receivers
      subject: "Confirm your gmail account", // Subject line
      html: `<h1>Dear Customer your otp is ${otp}. Please Don't Share with anyone</h1>`, // plain text body
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) console.log(err);
      else console.log(info);
    });

    res.status(201).send({ success: "success", otp });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
