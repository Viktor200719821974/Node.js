import { Router } from 'express';
import { studentModel } from '../models/student';
// import { teacherModel } from '../models/teacher';

const router = Router();

router.post('/', async (req, res, next) => {
    try {
        const createdStudent = await studentModel.create(req.body);
        res.json(createdStudent);
    } catch (e) {
        next(e);
    }
});
router.get('/', async (req, res, next) => {
    try {
        const students = await studentModel.find({}).populate('teacher');
        // await teacherModel.create({
        //     name: 'Viktor',
        //     age: 25,
        //     email: 'viktor@gmail.com',
        // });
        res.json(students);
    } catch (e) {
        next(e);
    }
});

export const studentRouter = router;
