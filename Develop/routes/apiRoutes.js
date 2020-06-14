const router = require("express").Router();
const store = require("../db/store")
// const noteData = [];

// read the `db.json` file and return all saved notes as JSON.
router.get("/api/notes", (req,res) => {
    store.getNotes().then(res.json(notes));
});
//rec new note, add to db, return new note 
router.post("/api/notes", (req, res) => {
    store.addNotes().then(res.json(notes));
});

//find note by id, delete note, rewrite to db
router.delete("/api/notes:id", (req, res) => {
    store.deleteNotes().then(() => res.json({ok: true}))
});

module.exports = router