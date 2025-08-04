const items = require("../model/ItemModel");

//Get Method
const getItems = (req,res) => {
    res.status(200).json(items);
}
//Post Method (Create)
const createItems = ( req,res) => {
    // const id = parseInt(req.params.id);
    const {name,quantity,price} = req.body;
    if(!name || !quantity || !price) {
         return res.status(400).json({ message: "Missing required fields" });
    } 
    const newItem = {
        id:  items.length ? items[items.length -1].id + 1 : 1,
        name,
        quantity,
        price
    }
    items.push(newItem);
     res.status(201).json({ message: "Product created successfully", item: newItem });
}

//Put Method(Update)
const editItems = (req,res) => {
const id = parseInt(req.params.id);
const {name,quantity,price} = req.body;
const item = items.find(data => data.id === id);
//Update a data 
if(item){
    item.name = name ?? item.name;
    item.quantity = quantity ?? item.quantity;
    item.price = price ?? item.price;
res.status(200).json({ message: "Item updated successfully", item });}
else{
res.status(404).json({ message: "Item not found" });
}

}
//Delete Method 
const deleteItems = (req,res) => {
const id = parseInt(req.params.id);
const {name,quantity,price} = req.body;
const index = items.findIndex(data => data.id == id);
if(index != -1){
    const deletedItem = items.splice(index,1); 
    res.status(200).json({ message: "Item deleted successfully", item: deletedItem[0] });
}
else{
   res.status(404).json({ message: "Item not found" });
}
}
module.exports = { getItems,createItems,editItems,deleteItems}