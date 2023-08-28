const mongoose = require('mongoose'); 

const subServiceSchema = mongoose.Schema({
    title:{type: String, require:true},
    description:{type: String, require: true},
    imageUrl:{type: String, require: true},
    _serviceId:{type: mongoose.Types.ObjectId, require: true},
});

module.exports = mongoose.model('SubService', subServiceSchema);