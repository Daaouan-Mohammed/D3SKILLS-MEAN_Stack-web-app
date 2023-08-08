const mongoose = require('mongoose'); 

const serviceSchema = mongoose.Schema({
    serviceName:{type: String, require:true},
    description:{type: String, require: true},

});

module.exports = mongoose.model('Service', serviceSchema);