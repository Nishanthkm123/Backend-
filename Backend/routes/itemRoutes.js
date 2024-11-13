const express=require('express');
const router=express.Router();
const itemController=require('../controllers/itemController');
router.post('/',itemController.createItem);
//router.get('/',itemController.getAllItems);
//router.put('/:id',itemController.updateItem);
module.exports=router;