const router = require("express").Router();

//**2 Routes for HTML */
// * for default route (will load index.html)

//return`index.html` file
router.get("*", (req,res) => {
    const file = path.join(__dirname, "public", "assets", "index.html");
    res.sendFile(file);
});


//return the `notes.html` file.
router.get("/notes", (req,res) => {
    const file = path.join(__dirname, "public", "assets", "notes.html");
    res.sendFile(file);
});




module.exports = router