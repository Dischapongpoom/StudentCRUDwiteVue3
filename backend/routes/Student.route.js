const express = require('express')
const router = express.Router();


// Student model
let StudentModel = require('../modules/Student');

// Get all data

router.get('/', (req, res, next) => {
    StudentModel.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Create Student

router.post('/', (req, res, next) => [
    StudentModel.create(req.body, (err, data) => {
        if (err) {
            return next(err)
        } else {
            res.json(data)
        }
    })
])

// Edit Student

router.get('/:id', (req, res, next) => {
    StudentModel.findById(req.params.id, (err, data) => {
        if (err) {
            return next(err)
        } else {
            res.json(data)
        }
    })
})

router.put('/:id', (req, res, next) => {
    StudentModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (err, data) => {
        if (err) {
            return next(err)
        } else {
            res.json(data)
            console.log("student successfully updated");
        }
    })
})

// Delete

router.delete('/:id', (req, res, next) => {
    StudentModel.findByIdAndDelete(req.params.id, (err, data) => {
        if (err) {
            return next(err)
        } else {
            res.status(200).json({
                message: data
            })
        }
    })
})

module.exports = router