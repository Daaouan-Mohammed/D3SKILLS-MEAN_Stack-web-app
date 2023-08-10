const express = require('express');
const router = express.Router();  

const auth = require('../middlewares/auth');  
const multer = require('../middlewares/multer-config');

const galerieController = require('../controllers/galerie');

router.post('/', auth, multer, galerieController.createGalerie);

router.get('/:id', auth, galerieController.getOneGalerie);

router.get('/', auth, galerieController.getAllGalerie);

router.put('/:id', auth, multer, galerieController.modifyGalerie);

router.delete('/:id', auth, galerieController.deleteGalerie);

module.exports= router;
