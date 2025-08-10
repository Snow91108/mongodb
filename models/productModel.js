const mongoose=require("mongoose");
const productSchema= new mongoose.Schema({
    name:{
        type:"string",
        required:true,
    },
    quantity:{
        type:"number",
         default:0,
         required:true,
    },
    price:{
        type:"number",
        default:0,
        required:true,
    }
}
,{
    timestamps:true
} 
);

mongoose.model("Product",productSchema);

module.exports=Product;