import { configureStore } from "@reduxjs/toolkit"
import cartreducer from "./productSlice"

const store=configureStore({
    reducer:{
        productcart:cartreducer
    }
})

export default store;