const mongoose = require('mongoose'); 

const galerieSchema = mongoose.Schema({
    galerieName:{type: String, require:true},
    description:{type: String, require: true},
    imageUrl:{type: String, require: true},
    videoUrl:{type: String},
});

module.exports = mongoose.model('Galerie', galerieSchema);