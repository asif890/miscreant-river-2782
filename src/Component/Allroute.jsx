import { Routes,Route } from "react-router-dom";
import Home from "./Home";
import Aged from "./Age";
import LoginPage from "./Login";
import Cart from "./Cart";
import Singlepage from "./Singlepage";

function Allrout(){

    return(
       <Routes>
        <Route path="/" element={<Aged/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/products/:product_id" element={<Singlepage/>}/>

        </Routes>
    )
}
export default Allrout