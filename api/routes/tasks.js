const express = require('express');
const router = express.Router();
const Task = require('../models/task');
const mongoose = require('mongoose');

router.get('/', (req, res, next) => {
    Task.find()
        .exec()
        .then(tasks => {
            console.log(tasks);
            res.status(200).json(tasks)
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
});

router.post('/', (req, res, next) => {
    console.log('BODY:', req.body);
    const task = new Task({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.task_title,
        location: req.body.location,
        description: req.body.task_description,
        priority: req.body.task_priority,
        first: req.body.first,
        last: req.body.last
    });
    task.save()
        .then(result => {
            console.log(result);
            res.setHeader('Content-Type', 'application/json');
            res.status(201).json({
                message: "Handling POST requests to /tasks",
                createdTask: result
            });
        })
        .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            }
        );
});


router.get('/:taskId', (req, res, next) => {
    const id = req.params.taskId;
    Task.findById(id)
        .exec()
        .then(doc => {
            console.log('task:', doc);
            //To handle non-existing id error...
            if (doc) {
                return res.status(200).json(doc);
            }else{
                return res.status(404).json({
                    message: 'No VALID ENTRY'
                });
            }
        })
        .catch(err => {
            console.log(err);
            // //To handle INVALID format id error...
            res.status(500).json({
                error: err
            });
        });
});

router.patch('/:taskId', (req, res, next) => {
    const id = req.params.taskId;
    res.status(200).json({
        message: `Updated the task w/ ${id} Id`
    });
});

router.delete('/:taskId', (req, res, next) => {
    const id = req.params.taskId;
    Task.remove({_id: id})
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
});


module.exports = router;