//require FS in store.js
const fs = require("fs");
//require util
const util = require("util");
//package for unique IDs
const uuid = require("uuid/v1");

const readFile = util.promisify(fs.readFileSync)
const writeFile = util.promisify(fs.writeFileSync);

class Store {
    read() {
        return 
    };

    write (note) {
    };


    getNotes() {

    };

    addNotes(){


    };

    deleteNotes(){

    };


}







//store class object
    //inside store.js

//***5 functions in store class object/file */
//function to read note
//function to write notes
//function to get notes
//functon to add note
//function to remove notes

//need html & api routes


// get/add/remove notes - 3 API routes
    // get/post/delete

    //routes folder
        //api route files
        //html routes
        //server.js




//import express& api routes
//create port
//body parsing w/ static data
    //from activities

//initialize routes
    // /api routes
    // app.use

//app.listen

//START ON STORE.JS


//doing reading and writing in here
        //writing includes deleting

        //need util npm package

//module.exports on api & html route pages


//push to git, THEN Push to heroku

