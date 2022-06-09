const mongoose = require('mongoose')

const EmpSchema = new mongoose.Schema({
    empName:{
        type: String,
        required: true,
    },
    empUsername:{
        type: String,
        required: true,
    },
    empEmail:{
        type: String,
        required: true,
    },
    empPassword:{
        type: String,
        required: true,
    },
})

const Emp = mongoose.model("Emp",EmpSchema);
module.exports = Emp













