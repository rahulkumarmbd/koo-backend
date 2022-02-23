const Comment = require("../models/comment.model");
const express = require("express");
const crudController = require("./crud.controller");
const router = express.Router();
const { uploadFiles } = require("../middlewares/multer");

router.get("/", crudController(Comment).get);
router.post("/", uploadFiles("commentImgs"), crudController(Comment).post);
router.get("/:id", crudController(Comment).getOne);
router.patch("/:id",uploadFiles("commentImgs"), crudController(Comment).patch);
router.delete("/:id", crudController(Comment).deleteOne);

module.exports = router;