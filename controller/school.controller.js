const schoolService = require("../service/school.service");

const getAllSchools = (req, res) => {
    schoolService.getAllSchools((err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Internal Server Error' });
        };
        res.status(200).json(data);
    });
};

const getSchoolById = (req, res) => {
    const { id } = req.params;
    schoolService.getSchoolById(id, (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.status(200).json(data[0]);
    });
};

const createSchool = (req, res) => {
    const { school_number } = req.body;
    schoolService.createSchool(school_number, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.status(200).json({ message: 'School is created' });
    });
};

const putSchool = (req, res) => {
    const { id } = req.params;
    const { school_number } = req.body;

    schoolService.putSchool(id, school_number, (err) => {
        if(err){
            console.error(err);
            return res.status(500).json({error: err});
        }
        res.status(200).json({message: "School puted successfully"});
    })
};

const deleteSchool = (req, res) => {
    const { school_number } = req.body;
    schoolService.deleteSchool(school_number, (err) =>{
        if(err){
            console.error(err);
            return res.status(500).json({error: err});
        };
        res.status(200).json({ message: "school is successfully deleted"});
    });
};

module.exports = { getAllSchools, getSchoolById, createSchool, putSchool, deleteSchool };
