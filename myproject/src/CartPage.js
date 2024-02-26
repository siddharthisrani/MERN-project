import { useSelector,useDispatch } from "react-redux";
import {qtyincrese,qtydecrease,productremove} from "./productSlice"

const CartPage=()=>{

const cartData=useSelector((state)=>state.productcart.cart)
const dispatch=useDispatch();
var totalprice=0;

const qtyInc=(id)=>{

dispatch(qtyincrese({id:id}))

}

const qtyDec=(id)=>{
    dispatch(qtydecrease({id:id}))
}

const productdel=(id)=>{
    dispatch(productremove({id:id}))
}

let ans=cartData.map((key)=>{
  totalprice+=key.price * key.quantity;
    return(
        <>
            <tr>
                <td><img src={key.image} width="200px" height="150px"/></td>
                <td>{key.name}</td>
                <td>{key.title}</td>
                <td>{key.price}</td>
                <td>

                <button onClick={()=>{qtyInc(key.id)}} style={{padding:"5px", margin:"10px"}}> + </button>
                    {key.quantity}
                <button onClick={()=>{qtyDec(key.id)}} style={{padding:"5px", margin:"10px"}}> - </button>  

                </td>
                <td>      
                    {key.price * key.quantity}                    
                </td>
                <td>
                 <button onClick={()=>{productdel(key.id)}} >Remove</button>
                 </td>
            </tr>

        </>
    )

})

    return(
        <>
        <table width="100%">
            <tr >
                <th width="200px"></th>
                <th>Name</th>
                <th>Title</th>
                <th>Price</th>
                <th>Qantity</th>    
                <th>Total</th>
                <th>Remove</th>
                
            </tr>
            {ans}
        </table>
        <h1 align="right">Total Price : {totalprice}</h1>
        
        </>
    )
}
export default CartPage;