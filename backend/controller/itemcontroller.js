const item=require('../models/items');
exports.createItem=async(req,res)=>{
    try{
        const item=new item(req.body);
        const savedItem=await item.save();
        res.status(201).json(savedItem);
    }catch(error){
        res.status(400).json({message:error.message});
    }
};