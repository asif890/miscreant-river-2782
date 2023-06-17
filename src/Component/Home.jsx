import React from "react";

import first from "../first.jpeg"
import one from "../1.png"
import two from "../2.png"
import three from "../3.png"

function Home(){
    
    return (
        <div>
        <div style={{width:"100%",height:"40px" ,border:"1px solid grey" ,display:"flex"}}>
            <div>
            <select style={{width:"92px",height:"40px" ,border:"none" ,display:"flex",marginRight:"10px"}}>
            <option><b>united state</b></option>
            <option>us</option>
            <option>us</option>
           </select>
            </div>

            <div>
            <select style={{width:"60px",height:"40px" ,border:"none" ,display:"flex",marginRight:"10px"}}>
            <option><b>WINE</b></option>
            <option>us</option>
            <option>us</option>
           </select>
            </div>


            <div>
            <select style={{width:"70px",height:"40px" ,border:"none" ,display:"flex",marginRight:"10px"}}>
            <option><b>spirits</b></option>
            <option>us</option>
            <option>us</option>
           </select>
            </div>
            <button style={{width:"70px",height:"40px" ,border:"none" ,marginRight:"10px",backgroundColor:"white"}}>BEER</button>
         

        </div>
        <div>
            <img src={first } style={{width:"100%"}} />
        </div>

        <div style={{width:"100%"  ,display:"flex",padding:"20px"}}>
        <div>
        <img src={one } style={{width:"440px",marginRight:"25px"}} />
        </div>
        <div>
        <img src={two} style={{width:"440px",marginRight:"25px"}} />
        </div>
        <div>
        <img src={three} style={{width:"440px",marginRight:"25px"}} />
        </div>


        </div>


        <div style={{display:"flex",marginTop:"10px", height:"70px"}} >
  <div>
  <h3 style={{marginRight:"1005px",}}>nue colection</h3>
  </div>

  <div style={{margin:"auto"}}>
    <select style={{width:"120px",height:"40px" ,border:"none" ,display:"flex",marginRight:"10px",}}>
        <option>asc</option>
        <option>asc</option>
    </select>
  </div>

  <div style={{margin:"auto"}}>
    <select style={{width:"120px",height:"40px" ,border:"none" ,display:"flex",marginRight:"10px"}}>
        <option>ascr</option>
        <option>ascr</option>
    </select>
  </div>
  <hr/>
  </div>
       
        
        </div>
    )
  };
    


export default Home