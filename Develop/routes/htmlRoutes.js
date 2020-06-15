const router = require("express").Router();
// const store = require("../db/store")
const path = require("path");

//**2 Routes for HTML */
// * for default route

const file = (res, filename) => {
    return res.sendFile(path.join(__dirname,"..", "public", "assets", filename ));
}

//return`index.html` file
router.get("*", (req,res) => {
    // const file = path.join(__dirname, "../public/assets/index.html");
    return file(res, "index.html");
    // res.sendFile(file);
});


//return the `notes.html` file.
router.get("/notes", (req,res) => {
    return file(res, "notes.html");
    // const file = path.join(__dirname, "../public/assets/notes.html");
    // res.sendFile(file);
});


module.exports = router