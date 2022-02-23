const mongoose = require("mongoose");

const workExperienceSchema = new mongoose.Schema(
  {
    certification: {
      type: String,
      required: false,
    },
    instituteName: {
      type: String,
      required: false,
    },
    from: {
      type: String,
      required: false,
    },
    to: {
      type: String,
      required: false,
    },
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

module.exports = mongoose.model("workExperience", workExperienceSchema);
