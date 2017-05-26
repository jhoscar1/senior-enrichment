const router = require('express').Router()
const db = require('../../db')
const {Campus, User} = require('../../db/models')

router.param('id', (req, res, next, id) => {
    User.findById(id)
    .then(foundStudent => {
        if (foundStudent) {
            req.student = foundStudent;
            next();
        }
        else {
            const err = new Error(`No student with id ${id} exists`);
            err.status = 404;
            throw err;
        }
    })
    .catch(next);
})

router.get('/', (req, res, next) => {
    User.findAll({
        include: [Campus]
    })
    .then(foundStudent => {
        res.status(200).json(foundStudent)
    })
    .catch(next);
})

router.get('/:id', (req, res, next) => {
    res.status(200).json(req.student);
})

router.post('/', (req, res, next) => {
    User.create(req.body)
    .then((student) => {
        User.findById(student.id, {
            include: [Campus]
        })
        .then((inclusiveStudent) => {
            console.log(inclusiveStudent);
            res.status(201).json(inclusiveStudent);
        })
        
    })
    .catch(next);
})

router.put('/:id', (req, res, next) => {
    req.student.update(req.body)
    .then(updatedStudent => {
        User.findById(updatedStudent.id, {
            include: [Campus]
        })
        .then((inclusiveStudent) => {
            console.log(inclusiveStudent);
            res.status(201).json(inclusiveStudent);
        })
    })
    .catch(next);
})

router.delete('/:id', (req, res, next) => {
    req.student.destroy()
    .then(() => {
        res.send(204);
    })
})

module.exports = router;
