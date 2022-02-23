const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    commentImgs: [{
      type: String,
      required: false,
    }],
    likes: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

module.exports = mongoose.model("comment", commentSchema);


// comment => Comment create => comment id only
// next step => post update
// next step => user Update
