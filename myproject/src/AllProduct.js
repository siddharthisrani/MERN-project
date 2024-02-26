import axios from "axios"
import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import {addcart} from "./productSlice";

const AllProduct=()=>{
   
    const [data,setdata]=useState([])

    const Myselector=useSelector((state)=>state.productcart.cart)
    const dispatch=useDispatch();

    console.log(Myselector)

    const FetchData= async()=>{

        const URL="http://localhost:4000/productdisplay"
        axios.get(URL).then((res)=>{
            setdata(res.data)
        })
    }
    useEffect(()=>{
        FetchData();
    },[])


    const AddtoCart=(id,proname,title,price,image)=>{
        dispatch(addcart({id:id,name:proname,title:title,price:price,image:image,quantity:1}))
    }

    

    const myproduct=data.map((key)=>{
    
        return(
            <div style={{margin:"50px",border:"1px solid black",width:"300px"}}>
            <img src={key.image} width="300" height="250"/>
            <h2>{key.proname}</h2>
            <h3>{key.title}</h3>
            <h3>{key.price}</h3>
            <button onClick={()=>{AddtoCart(key._id,key.proname,key.title,key.price,key.image)}}>Add to Cart</button>
            </div>
        );

    })

    return(
        <>
        <h1>This is My AllProduct Page</h1>
       <div style={{display:"flex",flexWrap:"wrap",padding:"20px",textAlign:"center",margin:"10px"}}>
           {myproduct}
       </div>
       
        
        </>
    )

}

export default AllProduct;