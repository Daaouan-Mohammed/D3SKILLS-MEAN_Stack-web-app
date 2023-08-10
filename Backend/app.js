const express = require('express');

const app = express();

const mongoose = require('mongoose');

const path = require('path');

mongoose.connect('mongodb+srv://mohammed:AbCd2016@cluster0.rpygsuh.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use(express.json());

//pour resoudre l'ereur de CROS:
app.use((req, res, next) => {  //plus que c'est le 1er middleware executé donc sera un middleware globale sans route afin de s'appliquer à toutes les routes. Cela permettra à toutes les demandes de toutes les origines d'accéder à notre API.
    res.setHeader('Access-Control-Allow-Origin', '*');  //ce header permet d'accéder à notre API depuis n'importe quelle origine ( '*' ) 
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');//permet d'ajouter les headers mentionnés aux requêtes envoyées vers notre API (Origin , X-Requested-With , etc.) =  donant l'autorisation d'utiliser certaine headers comme origine ...
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');// d'envoyer des requêtes avec les méthodes mentionnées ( GET ,POST , etc.).
    next();
});

app.use((req, res) => {
   res.json({ message: 'vous avez bien connecter!' }); 
});


module.exports = app;