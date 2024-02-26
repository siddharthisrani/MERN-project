
import {useState} from "react"
import axios from "axios"
const AddProduct=()=>{

const [uploadimg,setuploadimg]=useState(null)
const [imgUrl,setimgUrl]=useState("")
// const[inputs,setinputs]=useState({})
const [name,setname]=useState("")
const [title,settitle]=useState("")
const [price,setprice]=useState("")


const handleChange=(e)=>{
  setuploadimg(e.target.files[0]);
}

// const handleInput=(e)=>{
//   let name=e.target.name;
//   let value=e.target.value;
//   setinputs((values)=>({...values,[name]:value}));
//   console.log(inputs)
// }

const handleSubmit=async ()=>{

  const formData=new FormData();
  formData.append("file",uploadimg);
  formData.append("upload_preset","dh847osw");
  formData.append("cloud_name","dot3gbmab");

  const response=await axios.post("https://api.cloudinary.com/v1_1/dot3gbmab/image/upload",formData)
  // setinputs((values)=>({...values,["image"]:response.data.url}));

  console.log(response.data);
  console.log(response.data.url);
  setimgUrl(response.data.url);

  let imgpath=response.data.url;
  let input={proname:name,title:title,price:price,image:imgpath};
  console.log(input)

axios.post("http://localhost:4000/productsave",input).then(alert("Product saved"))

}


  return(
    <>
    Enter Name:- <input type="text"  onChange={(e)=>{setname(e.target.value)}}  value={name}/><br/>
    Enter Title:- <input type="text"  onChange={(e)=>{settitle(e.target.value)}} value={title} /><br/>
    Enter Price:- <input type="text"  onChange={(e)=>{setprice(e.target.value)}} value={price} /><br/>
    Upload Image:- <input type="file" onChange={handleChange} /><br/><br/>

    <button onClick={handleSubmit}>Upload</button>

    <img src={imgUrl}/>
    
    </>
  )
}

export  default AddProduct;