const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const checkAuth = require('../middleware/check-auth');

const Timesheet = require('../model/attendance-approval');

router.post('/approval', checkAuth, (req, res, next) => {
    const timesheet = new Timesheet({
         _id: new mongoose.Types.ObjectId(),
        userID: req.body.userID,
        date: req.body.date,
        customerID: req.body.customerID,
        projectID: req.body.projectID,
        taskID: req.body.taskID,
        durationInHrs: req.body.durationInHrs,
        comment: req.body.comment,
        status: req.body.status
    });
        timesheet
        .save()
        .then(result => {
                console.log(result);
                res.status(201).json({
                message: 'Request created'
            });
        })
        .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
                
});

 router.get('/approval', (req, res, next) => {
    Timesheet.find().exec().then( docs => {
        const response = {
            count: docs.length,
            products: docs
        };
        res.status(200).json(response);
    }).catch(err => { 
        console.log(err);
        res.status(500).json({

        });
    });
});


module.exports = router;