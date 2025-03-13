const request = require("supertest");
const app = require("../index");

describe("Students Test API", ()=>{
    it("should return all students", async () =>{
        const res = await request(app).get("/student");
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty("data");
        expect(Array.isArray(res.body.data)).toBe(true);
    });

    it("should return a single student by ID", async () => {
        const student_id = 4; 
        const res = await request(app).get(`/student/${student_id}`); 
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty("data");
    });

    it("should create a new student", async () => {
        const res = await request(app).post("/student") 
            .send({
                student_name: "Komil",
                school_number: 1,
                teacher_id : 1
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty("message", "student is created");
    });

    it("should update a student by school_number", async () => {
        const student_id = 2; 
        const res = await request(app).put(`/student/${student_id}`) 
            .send({
                student_name: "firdavs",
                school_number: 333,
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty("message", "Student update success");
    });

    it("should delete a student by school_number and name", async () => {
        const student_id = "4"; 
        const res = await request(app).delete(`/student/${student_id}`); 
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty("message", "Student is deleted");
    });
})