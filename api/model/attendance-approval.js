const mongoose = require('mongoose');

const timesheetSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userID: { 
        type: String, 
        required: true, 
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ },
    date: { type: String, required: true },
    customerID: { type: String, required: true },
    projectID: { type: String, required: true },
    taskID: { type: String, required: true },
    durationInHrs: { type: String, required: true },
    comment: { type: String, required: true },
    status: { type: String, required: true }
});

module.exports = mongoose.model('Timesheet', timesheetSchema);