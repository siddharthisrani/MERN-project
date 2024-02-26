const ProductModel=require("../models/productmodels")


const stuSave=(req,res)=>{
    const mydata=new ProductModel(req.body);
    mydata.save().then(()=>{console.log("data Saved")})
    console.log(mydata)
}

const productdisplay=(req,res)=>{

   ProductModel.find().then((data)=>{
    res.json(data)
   }).catch((error)=>{
     console.log("Error in fetching data",error)
   })    

}


module.exports={stuSave,productdisplay}