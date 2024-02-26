const express =require("express")
const mongoose=require("mongoose")
// const bodyparser= require('body-parser')
const cors=require("cors")
const PORT=4000;
const app=express();
const controller=require("./controllers/stucontrollers")

const ProductController=require("./controllers/productcontrollers")

app.use(express.json());

app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/crudPra").then(()=>{console.log("connected to the data base")})

// app.get("/",(req,res)=>{
//     res.send("Hello")
// } )

app.get("/studisplay",controller.stuDisplay)
app.post("/stuinsert",controller.stuInsert)

app.post('/productsave', ProductController.stuSave)
app.get('/productdisplay',ProductController.productdisplay)

app.listen(PORT,()=>{console.log(`server running on ${PORT}`)})
