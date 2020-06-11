const router = require("express").Router();
const store = require("../db/store")
const noteData = [];

// read the `db.json` file and return all saved notes as JSON.
router.get("/api/notes", (req,res) => {
    store.then(res.json(noteData));
});

module.exports = router