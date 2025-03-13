const db = require("../db/db");

const Director = {
    getAllDirectors: (callback)=>{
        db.query("SELECT * FROM Director", callback);
    },

    getDirectorBySchoolNumber: (school_number, callback) => {
        db.query("SELECT director_name FROM Director WHERE school_number = ?", [school_number], callback);
    },

    createDirector: (school_number, director_name, callback) =>{
        db.query("INSERT INTO Director (school_number, director_name) VALUES (?, ?)", [school_number, director_name], callback);
    },

    putDirector: (director_name, school_number, callback) =>{
        db.query("UPDATE Director SET director_name = ? WHERE school_number = ? ", [director_name, school_number], callback);
    },
}

module.exports = Director;