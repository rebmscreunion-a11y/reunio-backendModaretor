import express from 'express';
import Student from '../Models/Student.js';

const router = express.Router();


router.post('/register', async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).json({ message: 'Student registered successfully!' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


router.get('/all', async (req, res) => {
    try {
        const students = await Student.find().sort({ createdAt: -1 });
        res.status(200).json(students);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
