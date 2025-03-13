const serviceDirector = require("../service/director.service");

const getAllDirectors = (req, res) =>{
    serviceDirector.getAllDirectors((err, data)=>{
        if(err){
            console.error(err);
        }else{
            res.status(200).json({directors: data});
        }
        return res.status(500).json({error: err});
    });
};

const getDirectorBySchoolNumber = (req, res) => {
    const {school_number} = req.params;
    serviceDirector.getDirectorBySchoolNumber(school_number, (err, results)=>{
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'Director not found' });
        }
        res.status(200).json({ director: results[0] });
    });
};

const createDirector = (req, res) => {
    const {school_number, director_name} = req.body;
    serviceDirector.createDirector(school_number, director_name, (err) => {
            if(err){
               console.error(err);
            }else{
                res.status(200).json({message: "Director is successfully created!"});
            }
            res.status(500).json({error: err});
        });
};

const putDirector = (req, res) => {
    const {school_number} = req.params
    const {director_name} = req.body;

    serviceDirector.putDirector(school_number, director_name, (err) => {
        if(err){
            console.error(err);
            res.status(500).json({error: err});
        }else{
            res.status(200).json({message: "Director is updated"});
        }
    });
};

module.exports = {
    getAllDirectors,
    getDirectorBySchoolNumber,
    createDirector,
    putDirector
}