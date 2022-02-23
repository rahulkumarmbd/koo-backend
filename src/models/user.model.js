const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
      default: "null",
    },
    handle: {
      type: String,
      required: false,
      default: "null",
    },
    profession: {
      type: String,
      required: false,
      default: "null",
    },
    website: {
      type: String,
      required: false,
      default: "null",
    },
    gender: {
      type: String,
      required: false,
      default: "null",
    },
    maritalStatus: {
      type: String,
      required: false,
      default: "null",
    },
    email: {
      type: String,
      unique: true,
      required: false,
    },
    profilePic: {
      type: String,
      required: false,
      default: "https://i.postimg.cc/MTw0t80t/pngegg-1.png",
    },
    mobileNum: {
      type: Number,
      required: false,
    },
    qualification: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "qualification",
    },
    workExperience: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "workExperience",
    },
    posts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
