const User = require("../models/user.model");
const express = require("express");
const crudController = require("./crud.controller");
const router = express.Router();
const populate = "qualification workExperience posts";
const { uploadFile } = require("../middlewares/multer");

router.get("/", crudController(User, populate).get);
router.post("/", uploadFile("profilePic"), crudController(User, populate).post);
router.get("/:id", crudController(User, populate).getOne);
router.patch(
  "/:id",
  uploadFile("profilePic"),
  crudController(User, populate).patch
);
router.delete("/:id", crudController(User, populate).deleteOne);

module.exports = router;
