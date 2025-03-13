const request = require("supertest");
const app = require("../index");

describe("Teacher API", () => {
    it("should return all teachers", async () => {
        const res = await request(app).get("/teachers"); 
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty("data");
        expect(Array.isArray(res.body.data)).toBe(true);
    });

    it("should return a single teacher by ID", async () => {
        const teacher_id = 1; 
        const res = await request(app).get(`/teachers/${teacher_id}`); 
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty("data");
    });

    it("should create a new teacher", async () => {
        const res = await request(app).post("/teachers") 
            .send({
                teacher_name: "Test Teacher",
                school_number: "1"
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty("message", "teacher is created");
    });

    it("should update a teacher by school_number", async () => {
        const school_number = "1"; 
        const res = await request(app).put(`/teachers/${school_number}`) 
            .send({
                teacher_name: "Jassi"
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty("message", "Teacher update success");
    });

    it("should delete a teacher by school_number and name", async () => {
        const school_number = "1"; 
        const teacher_name = "AsadTeacher-2"; 
        const res = await request(app).delete(`/teachers/${school_number}/${teacher_name}`); 
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty("message", "Teacher is deleted");
    });
});
