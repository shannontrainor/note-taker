const http = require("http");
const fs = require("fs");
const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");
const app = express();

const PORT = process.env.PORT || 8080;


//taken from previous activities
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});