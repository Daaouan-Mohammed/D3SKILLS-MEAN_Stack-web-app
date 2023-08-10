const express = require('express');
const router = express.Router();  

const auth = require('../middlewares/auth');  
const multer = require('../middlewares/multer-config');

const referenceController = require('../controllers/reference');

router.post('/', auth, multer, referenceController.createReference);

router.get('/:id', referenceController.getOneReference);

router.get('/', referenceController.getAllReferences);

router.put('/:id', auth, multer, referenceController.modifyReference);

router.delete('/:id', auth, referenceController.deleteReference);

module.exports= router;
