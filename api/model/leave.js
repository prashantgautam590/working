const mongoose = require('mongoose');

const leaveSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userID: { 
        type: String, 
        required: true, 
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ },
    fromDate: { type: String, required: true },
    toDate: { type: String, required: true },
    leaveType: { type: String, required: true },
    reason: { type: String, required: true }
});

module.exports = mongoose.model('Leave', leaveSchema);