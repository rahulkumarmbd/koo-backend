const WorkExperience = require("../models/workExperience.model");
const express = require("express");
const crudController = require("./crud.controller");
const router = express.Router();

router.get("/", crudController(WorkExperience).get);
router.post("/", crudController(WorkExperience).post);
router.get("/:id", crudController(WorkExperience).getOne);
router.patch("/:id", crudController(WorkExperience).patch);
router.delete("/:id", crudController(WorkExperience).deleteOne);

module.exports = router;
