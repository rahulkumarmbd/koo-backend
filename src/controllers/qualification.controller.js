const Qualification = require("../models/qualification.model");
const express = require("express");
const crudController = require("./crud.controller");
const router = express.Router();

router.get("/", crudController(Qualification).get);
router.post("/", crudController(Qualification).post);
router.get("/:id", crudController(Qualification).getOne);
router.patch("/:id", crudController(Qualification).patch);
router.delete("/:id", crudController(Qualification).deleteOne);

module.exports = router;
