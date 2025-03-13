const teacherService = require("../service/teacher.service");

const getAllTeachers = (req, res)=>{
    teacherService.getAllTeachers((err, result)=>{
        if(err){
            console.log(err);
            res.status(500).json({error: err});
        }
        res.status(200).json({data: result});
    });
};

const getTeacherByID = (req, res) => {
    const {teacher_id} = req.params;

    teacherService.getTeacherByID(teacher_id, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: err });
        }
        res.status(200).json({ data: result });
    });
};

const createTeacher = (req, res)=>{
    const {teacher_name, school_number} = req.body;

    teacherService.createTeacher(teacher_name, school_number, (err)=>{
        if(err){
            console.error(err);
            res.status(500).json({error: err});
        };
        res.status(200).json({message: "teacher is created"});
    });
};

const putTeacher = (req, res) =>{
    const {teacher_name} = req.body;
    const {school_number} = req.params;
    teacherService.putTeacher(school_number, teacher_name, (err)=>{
        if(err){
            console.error(err);
            res.status(500).json({error: err});
        }
        res.status(200).json({message: "Teacher update success"});
    });
};

const deleteTeacher = (req, res) => {
    const {school_number, teacher_name} = req.params;

    teacherService.deleteTeacher(school_number, teacher_name,  (err)=>{
        if(err){
            console.error(err);
            res.status(500).json({error: err });
        }
        res.status(200).json({message: "Teacher is deleted"});
    });
};

module.exports = {
    getAllTeachers,
    getTeacherByID,
    createTeacher,
    putTeacher,
    deleteTeacher
};