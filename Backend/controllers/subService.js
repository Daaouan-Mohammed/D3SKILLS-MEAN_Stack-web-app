const SubService = require('../models/SubService');

const fs = require('fs');  

exports.createSubService = (req, res, next) => {
   const subServiceObject = JSON.parse(req.body.subService); //transferer la chaine de characters(req.body.subService) en format json (serviceObject)
    delete subServiceObject._id;
    delete subServiceObject._userId;
    const subService = new SubService({
        ...subServiceObject,
        userId: req.auth.userId,
      //  _serviceId: req.params.serviceId,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });

    subService.save()
        .then(()=> {res.status(201).json({message: 'SubService enregistré'})})
        .catch(error=> {res.status(400).json({error})})
};


exports.getOneSubService = (req, res, next) => {
    SubService.findOne({
        _id: req.params.id,
        _serviceId: req.params.serviceId})
        .then(subService => res.status(200).json(subService))
        .catch(error => res.status(404).json(error));
};

exports.getAllSubServices = (req, res, next) => { //La première différence que vous remarquerez est l'argument supplémentaire passé à la méthode use : nous lui passons un string, correspondant à la route d'API (aussi appelée endpoint)  pour laquelle nous souhaitons enregistrer cet élément de middleware. Dans ce cas, cette route sera http://localhost:3000/api/stuff (voir app.js), car il s'agit de l'URL demandée par l'application front-end.
    SubService.find({ _serviceId: req.params.serviceId})
        .then(subServices => res.status(200).json(subServices))
        .catch(error => res.status(400).json(error));
};

exports.modifySubService = (req, res, next) => {
    const subServiceObject = req.file ? {   //on fait un test si l'objet contient image ou non
        ...JSON.parse(req.body.subService),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
    } : {...req.body};

    delete subServiceObject._userId;  //never trust the user
    SubService.findOne({
        _id: req.params.id,
        _serviceId: req.params.serviceId})
        .then((subService)=>{
            if(subService.userId != req.auth.userId){   //tester si userId de la requete est le meme de l'objet
                res.status(401).json({ message : 'Not authorized'});
            }
            else{  
                SubService.updateOne({_id: req.params.id , _serviceId: req.params.serviceId}, {...subServiceObject, _id: req.params.id}) 
                    .then(() => res.status(200).json({ message: 'subService modifié' }))
                    .catch(error=> {res.stat(400).json({error})});
            }
        })
        .catch(error=> {res.stat(400).json({error})});
};

exports.deleteSubService = (req, res, next)=>{
        SubService.findOne({
            _id: req.params.id,
            _serviceId: req.params.serviceId})
        .then(subService => {
            if (subService.userId != req.auth.userId) {
                res.status(401).json({message: 'Not authorized'});
            } else {
                const filename = subService.imageUrl.split('/images/')[1];
                fs.unlink(`images/${filename}`, () => { //supprimer l'image de l'objet exist dans le dossier images lors supprision de l'objet
                    SubService.deleteOne({
                        _id: req.params.id,
                        _serviceId: req.params.serviceId})
                        .then(() => { res.status(200).json({message: 'SubService supprimé !'})})
                        .catch(error => res.status(401).json({ error }));
                });
            }
        })
        .catch( error => {
            res.status(500).json({ error });
        });
 };