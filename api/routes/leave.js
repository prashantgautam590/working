const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../middleware/check-auth');

const Leave = require('../model/leave');

router.post('/', checkAuth, (req, res, next) => {
                    const leave = new Leave({
                        _id: new mongoose.Types.ObjectId(),
                        userID: req.body.userID,
                        fromDate: req.body.fromDate,
                        toDate: req.body.toDate,
                        leaveType: req.body.leaveType,
                        reason: req.body.reason
                    });
                    leave
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

 router.get('/', (req, res, next) => {
    Leave.find().exec().then( docs => {
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