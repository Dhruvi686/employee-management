const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    profilePicture: {
        type: String,
        required: true,
    },
    employeeType: {
        type: String,
        enum: ['Full-Time', 'Part-Time', 'Contract'],
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;