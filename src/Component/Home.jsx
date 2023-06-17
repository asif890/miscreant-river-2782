import React from "react";

import first from "../first.jpeg"
import one from "../1.png"
import two from "../2.png"
import three from "../3.png"
import five from "../5.png"
import six from "../6.png"
import seven from "../7.png"
import eight from "../8.png"

import { useEffect, useState } from 'react';


let CartArr=JSON.parse(localStorage.getItem("cart"))||[]

const intialstate={
    title:"",
    category:"",
    image:"",
    price:""
  }

  function  checkDuplicate(product){
    for(let i=0;i<CartArr.length;i++){
      if(CartArr[i].id===product.id){
        return true
      }
    }
    return false
}

function Home(){
  const [data ,setdata]=useState([])

    const [loding, setloding]=useState(false)
    const [page ,setpage] = useState(1)
    const [filterby, setfilterby] = useState("")
    const [sortby, setsortby] = useState("")
    
    const limit=8
    const sort="price"
    
    function getapiurl (url,filterby,sortby,sort){
      if (filterby){
        return (url=`${url}&category=${filterby}`)
      }else if(sortby && sort){
        return (url=`${url}&_sort=${sort}&_order=${sortby}`)
      }
    return url
    }
    
    
    
    
    
    async function fetcproductdetaisfromapi(page){
      let apiurl=getapiurl(`http://localhost:8080/products?_page=${page}&_limit=${limit}`,
      filterby,sortby,sort)
      setloding(true)
     try {
      const res=await fetch(apiurl)
      let data= await res.json()
      //console.log(data)
      setdata(data)
     } catch (error) {
      console.log(error)
      setloding(false)
     }
    }
    
    console.log(data)
    
    
    
    
    
    useEffect(()=>{
      fetcproductdetaisfromapi(page)
    },[page,filterby,sortby])
    
    
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
  <div style={{display:'grid',gridTemplateColumns:"repeat(4,2fr)"}}>
          {data.map((el,i)=>(
            <div style={{marginTop:"20px"}} key={el.id}>

              <img src={el.image} alt={el.name}width={200}height={200}/>
              <p>{el.title}</p>
              <p>{el.category}</p>
              <p>price:{el.price}</p>
              <button style={{height:"30px",width:"200px",backgroundColor:"purple",color:"white",border:"white"}} onClick={()=>{

                if(checkDuplicate(el)){
                  alert("Product Already in Cart")
                }else{
                  let cartData = JSON.parse(localStorage.getItem('cart'));
                  cartData.push({...el,quantity:1})
                  // CartArr.push({...el,quantity:1})
                  localStorage.setItem("cart",JSON.stringify(cartData))
                  alert("Product Added To Cart")

              }
              }} ><b>Add to Cart</b></button>
            </div>
          ))}
          
        </div>
        <div>
        <img src={eight}/>
        </div>
        <div>
         <img src={seven}/>
        </div>
        <div>
        <img src={five}/>
        </div>
        <div>
        <img src={six}/>
        </div>
        
        
        </div>
    )
  };
    


export default Home