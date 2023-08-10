const express = require('express');
const router = express.Router();  

const auth = require('../middlewares/auth');  
const multer = require('../middlewares/multer-config');

const referenceController = require('../controllers/reference');

router.post('/', auth, multer, referenceController.createReference);

router.get('/:id', auth, referenceController.getOneReference);

router.get('/', auth, referenceController.getAllReferences);

router.put('/:id', auth, multer, referenceController.modifyReference);

router.delete('/:id', auth, referenceController.deleteReference);

module.exports= router;
