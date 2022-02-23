const Post = require("../models/post.model");
const express = require("express");
const crudController = require("./crud.controller");
const router = express.Router();
const populate = "comments";
const { uploadFiles } = require("../middlewares/multer");

router.get("/", crudController(Post, populate).get);
router.post("/", uploadFiles("postImgs"), crudController(Post, populate).post);
router.get("/:id", crudController(Post, populate).getOne);
router.patch(
  "/:id",
  uploadFiles("postImgs"),
  crudController(Post, populate).patch
);
router.delete("/:id", crudController(Post, populate).deleteOne);

module.exports = router;
