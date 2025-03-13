const School = require("../model/school.model");

const getAllSchools = (callback) => {
    School.getAllSchools(callback);
};

const getSchoolById = (id, callback) => {
    School.getSchoolById(id, callback);
};

const createSchool = (school_number, callback) => {
    School.createSchool(school_number, callback);
};

const putSchool = (id, school_number, callback) => {
    School.putSchool(id, school_number, callback);
}

const deleteSchool = (school_number, callback) => {
    School.deleteSchool(school_number, callback);
}


module.exports = { getAllSchools, getSchoolById, createSchool, deleteSchool, putSchool };