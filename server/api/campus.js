const router = require('express').Router()
const db = require('../../db')
const {Campus, Student} = require('../../db/models')

router.param('id', (req, res, next, id) => {
    Campus.findById(id)
    .then(foundCampus => {
        if (foundCampus) {
            req.campus = foundCampus;
            next();
        }
        else {
            const err = new Error(`No campus with id ${id} exists`);
            err.status = 404;
            throw err;
        }
    })
    .catch(next);
})

router.get('/', (req, res, next) => {
    Campus.findAll({
        include: [{model: Student, as: 'Students'}]
    })
    .then(foundCampuses => {
        res.status(200).json(foundCampuses)
    })
    .catch(next);
})

router.get('/:id', (req, res, next) => {
    res.status(200).json(req.campus);
})

router.get('/:id/students', (req, res, next) => {
    req.campus.getStudents()
    .then(students => {
        res.json(students);
    })
    .catch(next);
})

router.put('/:id/students/:studentId', (req, res, next) => {
    Student.findById(+req.params.studentId)
    .then(foundStudent => {
        req.campus.addStudent(foundStudent)
        .then(campus => {
            res.json(campus);
        })
    })
    .catch(next);
})

router.post('/', (req, res, next) => {
    Campus.create(req.body)
    .then((campus) => {
        res.json(campus);
    })
    .catch(next);
})

router.put('/:id', (req, res, next) => {
    req.campus.update(req.body)
    .then(updatedCampus => {
        Campus.findById(updatedCampus.id, {
            include: [{model: Student, as: 'Students'}]
        })
        .then((inclusiveCampus) => {
            res.status(201).json(inclusiveCampus);
        })
    })
    .catch(next);
})

router.delete('/:id', (req, res, next) => {
    req.campus.destroy()
    .then(() => {
        res.send(204);
    })
})

module.exports = router;