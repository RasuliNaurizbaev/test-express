const mysql = require("mysql2");

const connect = mysql.createConnection({
    host: "localhost",
    password: "root",
    database: "education",
    user: "root"
});

connect.connect((err) =>{
    if(err){
        console.log(err);
    }
    console.log("connect ", connect.threadId);
    
})

module.exports = connect;