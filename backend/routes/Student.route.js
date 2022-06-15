const express = require('express')
const studentRoute = express.Router();


// Student model
let StudentModel = require('../modules/Student');

// Get all data

studentRoute.route('/').get((req,res ,next) =>{
    StudentModel.find((error, data) => {
        if(error){
            return next(error)
        } else{
            res.json(data)
        }
    })
})

// Create Student

studentRoute.route('/create-student').post((req,res,next)=>[
    StudentModel.create(req.body, (err,data) =>{
        if(err){
            return next(err)
        }else{
            res.json(data)
        }
    })
])

// Edit Student

studentRoute.route('/edit-student/:id').get((req,res,next) =>{
    StudentModel.findById(req.params.id, (err,data) =>{
        if(err){
            return next(err)
        }else{
            res.json(data)
        }
    })
})

studentRoute.route('/update-student/:id').put((req,res,next) =>{
    StudentModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (err,data) =>{
        if(err){
            return next(err)
        }else{
            res.json(data)
            console.log("student successfully updated");
        }
    })
})

// Delete

studentRoute.route('/delete-student/:id').delete((req,res,next) =>{
    StudentModel.findByIdAndDelete(req.params.id, (err,data) =>{
        if(err){
            return next(err)
        }else{
            res.status(200).json({
                message: data
            })
        }
    })
})

module.exports = studentRoute