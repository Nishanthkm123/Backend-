const Item = require('Backend\models\items.js');
    exports.createItem = async(req,res) => {
        try{
            const item = new Item(req.body);
            const savedItem = await item.save();
            res.status(201).json(savedItem);
        }catch (error){
            res.status(400).json({message: error.message});   
        }
    };
