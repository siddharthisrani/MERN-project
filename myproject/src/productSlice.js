import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cart:[]
}

const CartSlice=createSlice({

    name:"productcart",
    initialState:initialState,
    reducers:{
      
        addcart:(state,action)=>{
            var myitem=state.cart.filter((key)=>key.id==action.payload.id)

            if(myitem.length>=1){
                alert("product already Added")
            }
            else{
                state.cart.push(action.payload); 
            }
        },

        qtyincrese:(state,action)=>{
          
            // alert(action.payload.id)
            for(var i=0; i<state.cart.length;i++){
                if(state.cart[i].id==action.payload.id){
                    state.cart[i].quantity++;
                }
                                
            }

        },

        qtydecrease:(state,action)=>{
        
            for(var i=0; i<state.cart.length;i++){

                if(state.cart[i].id==action.payload.id){
                    if(state.cart[i].quantity>1){
                    state.cart[i].quantity--;}
                }
                                
            }
        
        },

        productremove:(state,action)=>{
         state.cart=state.cart.filter((key)=>key.id!=action.payload.id)
       
        }

    }

})

export const{addcart,qtyincrese,qtydecrease,productremove}=CartSlice.actions;
export default CartSlice.reducer;