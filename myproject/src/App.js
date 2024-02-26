import { BrowserRouter,Route,Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Insert from "./Insert";
import Display from "./Display";
import AllProduct from "./AllProduct";
import AddProduct from "./AddProduct";
import CartPage from "./CartPage";


const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Layout/>} >
        <Route index element={<Display/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="insert" element={<Insert/>}/>
        <Route path="display" element={<Display/>}/>
        <Route path="allproduct" element={<AllProduct/>}/>
        <Route path="addproduct" element={<AddProduct/>}/>
        <Route path="cart" element={<CartPage/>}/>

        
      </Route>
    </Routes>
    
    </BrowserRouter>
    
    </>
  )
}
export default App;