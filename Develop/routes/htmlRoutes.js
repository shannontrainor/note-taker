const router = require("express")
const store = require("../db/store")
const path = require("path");

//**2 Routes for HTML */
// * for default route

//return`index.html` file
app.get("*", (req,res) => {
    const file = path.join(__dirname, "../public/assets/index.html");
    res.sendFile(file);
});


//return the `notes.html` file.
app.get("/notes", (req,res) => {
    const file = path.join(__dirname, "../public/assets/notes.html");
    res.sendFile(file);
});


module.exports = router