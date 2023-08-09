const mongoose = require('mongoose'); 

const subServiceSchema = mongoose.Schema({
    subServiceName:{type: String, require:true},
    description:{type: String, require: true},
    _serviceId:{type: mongoose.Types.ObjectId, require: true},
});

module.exports = mongoose.model('SubService', subServiceSchema);