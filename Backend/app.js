const express = require('express');

const app = express();

app.use((req, res) => {
   res.json({ message: 'Votre requête use a bien été reçue !' }); 
});

module.exports = app;
