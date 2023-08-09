const mongoose = require('mongoose'); 

const referenceSchema = mongoose.Schema({
    referenceName:{type: String, require:true},
    imageUrl:{type: String, require: true},
    description:{type: String, require: true},
});

module.exports = mongoose.model('Reference', referenceSchema);