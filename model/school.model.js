const db = require("../db/db");

const School = {
    getAllSchools: (callback) => {
        db.query("SELECT * FROM School", callback);
    },

    getSchoolById: (id, callback) => {
        db.query("SELECT * FROM School WHERE school_id = ?", [id], callback);
    },

    createSchool: (school_number, callback) => {
        db.query("INSERT INTO School (school_number) VALUES (?)", [school_number], callback);
    },

    putSchool: (id, school_number, callback) => {
        db.query(
            "UPDATE School SET school_number = ? WHERE school_id = ?",
            [school_number, id],
            callback
        );
    },    

    deleteSchool: (school_number, callback) => {
        db.query("DELETE FROM School (school_number) VALUE (?)", [school_number], callback);
    }
};

module.exports = School;
