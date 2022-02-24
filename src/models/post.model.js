const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    profession: {
      type: String,
      required: false,
    },
    handle: {
      type: String,
      required: false,
    },
    userName: {
      type: String,
      required: false,
    },
    userPic: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    postImgs: [
      {
        type: String,
        required: false,
      },
    ],
    likes: {
      type: Number,
      required: false,
      default: 0,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment",
      },
    ],
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

module.exports = mongoose.model("post", postSchema);

// post request =>  post create
// user update
