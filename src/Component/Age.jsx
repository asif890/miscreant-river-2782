import React from "react";
import LoginPage from "./Login";
import { useState } from "react";
import bd from "../bg.png"


function Aged(){
    const [age,setage] = useState(false)
    return (
        <div>
             {
        age ?(<LoginPage/>):(
           <div style={{ backgroundImage: `url("https://i.pinimg.com/originals/e1/91/81/e19181d4acb9d66f566891e02a0b8ab9.jpg")`,
              backgroundRepeat:"no-repeat",
              backgroundSize:"cover",
              height:"800px",
               border:"1px solid black",
           }}>
         <div
         style={{ height:"400px",width:"550px" ,marginLeft:"170px" ,backgroundColor:"white",padding:"30px",marginTop:"100px",border:"1px solid white"}}
         >
          <img src={bd} style={{height:"100px",width:"100px" ,borderRadius:"40%",marginLeft:"210px"}}/>

           <h1>Confirm your are of legal Drinking Age before entering the website</h1>
           <p>Are you over 21 years of age?</p>
           <br/>
           <button style={{height:"50px",width:"230px"  ,marginRight:"10px", backgroundColor:"#5D4037",color:"white" ,border:"2px solid white"}} onClick={()=>setage(true)} > <b>YES</b></button>
           <button  style={{height:"50px",width:"230px" , backgroundColor:"#5D4037",color:"white" ,border:"2px solid white"}} onClick={()=>setage(true)} >
            <b>NO</b></button>

         </div>
         
         
           </div>
        )
      }
        </div>
    )
}
export default Aged