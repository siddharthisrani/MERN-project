// const mongoose=require('mongoose');
// const ProductSchema= new mongoose.Schema({
//     category:{
//         type:String
//     },
//     images: {
//         type:Array
//     }
// })

// const product=mongoose.model( 'product',ProductSchema);  //creating a model of the schema
// module.exports = product;//exporting the module


const mongoose=require("mongoose")

const ImageSchema=new mongoose.Schema({
    
    proname:{
    type:String
    
    },

    title:{
        type:String
       
    },
    price:{
        type:String
       
    },

    image:{
        type:String       
    }

})

module.exports=mongoose.model("product",ImageSchema)