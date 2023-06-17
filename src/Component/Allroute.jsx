import { Routes,Route } from "react-router-dom";
import Home from "./Home";
import Aged from "./Age";

function Allrout(){

    return(
       <Routes>
        <Route path="/" element={<Aged/>}/>
        <Route path="/home" element={<Home/>}/>
        </Routes>
    )
}
export default Allrout