const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    postImgs: [{
      type: String,
      required: false,
    }],
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
