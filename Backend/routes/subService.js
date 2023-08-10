const express = require('express');
const router = express.Router();  

const auth = require('../middlewares/auth');  
const multer = require('../middlewares/multer-config');

const subServiceController = require('../controllers/reference');

router.post('/', auth, multer, subServiceController.createSubService);

router.get('/:id', auth, subServiceController.getOneSubService);

router.get('/', auth, subServiceController.getAllSubServices);

router.put('/:id', auth, multer, subServiceController.modifySubService);

router.delete('/:id', auth, subServiceController.deleteSubService);

module.exports= router;
