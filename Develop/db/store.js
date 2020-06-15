//require FS in store.js
const fs = require("fs");
//require util
const util = require("util");
//package for unique IDs
const { v4: uuidv4 } = require('uuid');


const readFile = util.promisify(fs.readFileSync)
const writeFile = util.promisify(fs.writeFileSync);

class Store {
    //function to read notes
    read() {
        return readFile("db/db.json");
    }
    //function to write notes
    write (note) {
        return writeFile ("db/db.json", JSON.stringify(note));
    }
    //function to get notes
    getNotes() {
        return this.read().then(notes => {
            let parseNote;
            try {
                parseNote = [].concat(JSON.parse(notes))
            } catch (err) {
                parseNote = []
            }
            return parseNote;
        });
    }

    //function to add new note to db
    addNotes(note){
        const {title, text} = note;

        const newNote = {title, text, id: uuid()};
        return this.getNotes().then(notes => [...notes, newNote])
        .then(updatedNotes => this.write(updatedNotes))
        .then(() => newNote);
    };
    //function to delete notes by assigned id
    deleteNotes(id){
        return this.getNotes().then(notes => notes.filter(note => note.id !== id))
        .then(filteredNotes => this.write(filteredNotes));
    };

};

module.exports = new Store();



//import express& api routes
//create port
//body parsing w/ static data
    //from activities

//initialize routes
    // /api routes
    // app.use


//push to git, THEN Push to heroku

