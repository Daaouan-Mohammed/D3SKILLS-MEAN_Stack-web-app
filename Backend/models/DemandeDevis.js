const mongoose = require('mongoose'); 

const demandeDevisSchema = mongoose.Schema({
    subject:{type: String, require:true},
    email:{type: String, require: true},
});

module.exports = mongoose.model('DemandeDevis', demandeDevisSchema);