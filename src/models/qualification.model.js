const mongoose = require("mongoose");

const qualificationSchema = new mongoose.Schema(
  {
    certification: {
      type: String,
      required: false,
    },
    instituteName: {
      type: String,
      required: false,
    },
    graduationYear: {
      type: Number,
      required: false,
    },
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

module.exports = mongoose.model("qualification", qualificationSchema);
