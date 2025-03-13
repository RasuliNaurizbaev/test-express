const studentService = require("../service/student.service");

const getAllStundent = (req, res)=>{
    studentService.getAllStundent((err, result)=>{
        if(err){
            console.error(err);
            res.status(500).json({error: err});
        };
        res.status(200).json({data: result});
    });
};

const getStudentByID = (req, res) => {
    const {student_id} = req.params;
    studentService.getStudentByID(student_id, (err, result)=>{
        if(err){
            console.error(err);
            res.status(500).json({error: err});
        };
        res.status(200).json({data: result});
    });
};

const createStudent = (req, res) => {
    const {student_name, school_number, teacher_id} = req.body;
    studentService.createStudent(student_name, school_number, teacher_id, (err, result) => {
        if(err){
            console.error(err);
            res.status(500).json({error: err});
        };
        res.status(200).json({message: "student is created"});
    });
};

const putStudent = (req, res)=>{
    const {student_id} = req.params;
    const {student_name, school_number} = req.body;
    studentService.putStudent(student_id, student_name, school_number, (err, result) => {
        if(err){
            console.error(err);
            res.status(500).json({error: err});
        };
        res.status(200).json({message: "Student update success"});
    });
};

const deleteStudent = (req, res) => {
    const {student_id} = req.params;

    studentService.deleteStudent(student_id, (err, result)=>{
        if(err){
            console.error(err);
            res.status(500).json({error: err});
        };
        res.status(200).json({message: "Student is deleted"});
    });
};

module.exports = {
    getAllStundent,
    getStudentByID,
    createStudent,
    putStudent,
    deleteStudent
};