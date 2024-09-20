const express = require("express");
const router = express.Router();
const noteController = require("../controllers/noteController");

router.get("/notes", noteController.getAllNotes);
router.post("/notes", noteController.createNote);
router.put("/notes/:id", noteController.updateNote);
router.delete("/notes/:id", noteController.deleteNote);

module.exports = { noteRoutes: router };
