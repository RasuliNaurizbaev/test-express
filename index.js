const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.status(200).json({ message: "Home page" });
});

const schoolRouter = require('./router/router.school');
const directorRouter = require("./router/router.director");
const teacherRouter = require("./router/router.teachers");
const studentRouter = require("./router/router.students");

app.use('/schools', schoolRouter);
app.use("/directors", directorRouter);
app.use("/teachers", teacherRouter);
app.use("/student", studentRouter);

module.exports = app;

if (require.main === module) {
    const PORT = 8080;
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
}
