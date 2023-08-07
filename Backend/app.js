const express = require('express');

const app = express();

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mohammed:AbCd2016@cluster0.rpygsuh.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use((req, res) => {
   res.json({ message: 'Votre requête use a bien été reçue avec connection to mongodb!' }); 
});

module.exports = app;
