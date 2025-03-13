const modelDirector = require("../model/director.model");

const getAllDirectors = (callback) => {
    modelDirector.getAllDirectors(callback);
};

const getDirectorBySchoolNumber = (school_number, callback) =>{
    modelDirector.getDirectorBySchoolNumber(school_number, callback);
};

const createDirector = (school_number, director_name, callback) =>{
    modelDirector.createDirector(school_number, director_name, callback);
}

const putDirector = (director_name, school_number, callback)=>{
    modelDirector.putDirector(director_name, school_number, callback);
};

module.exports = {getAllDirectors, getDirectorBySchoolNumber, createDirector, putDirector,};