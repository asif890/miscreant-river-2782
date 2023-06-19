import React from "react";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import bd from "../bg.png"
import ten from "../10.png"
import { useNavigate } from "react-router-dom";






  function  checkDuplicate(product){
let CartArr=JSON.parse(localStorage.getItem("cart"))||[]

    for(let i=0;i<CartArr.length;i++){
      if(CartArr[i].id===product.id){
        return true
      }
    }
    return false
}
function Singlepage(){
  
  const mithun=useNavigate()
  const account=useNavigate()
    const {product_id}=useParams()
    console.log(product_id)

    const [data,setdata]=useState([])
    const [loding,setloding]=useState(false)
    const [error,seterror]=useState(false)
         function handelfethch(){
        setloding(true)
      fetch(`http://localhost:8080/products/${product_id}`)
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data)
        setdata(data)
    setloding(false)
      })
    
      .catch(()=>{
      setloding(false)
      seterror(true)
      })
    }
        useEffect(()=>{
            handelfethch(product_id)
        },[])
        if(loding){
        return(
            <h1>Loding......</h1>
        )
    }
        if(error){
        return(
            <h1>something want to wrong</h1>
        )
    }
        return(
            <div >
  <div >
      <div
        style={{
          display: 'flex',
         
          alignItems: 'center',
          width: '100%',
          backgroundColor: '#f2f2f2',
          height: '105px',
        }}
      >
        <div
          style={{
            padding: '20px',
          }}
        >
          <img
            src={bd}
            alt="Logo"
            style={{
              width: '100%',
              maxWidth: '150px',
            }}
          />
        </div>
        <div
          style={{
            flex: '1',
            display: 'flex',
          
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
          }}
        >
          <input
            type="text"
            placeholder="Search"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: 'none',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            }}
          
     
          />
        </div>
        <div
          style={{
            display: 'flex',
           
            
            padding: '20px',
          }}
        >
          <button
            style={{
              marginBottom: '10px',
              padding: '10px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#5D4037',
              color: 'white',
              fontWeight: 'bold',
              cursor: 'pointer',
              width:"50px",
              height:"40px",
            }}
            onClick={(()=>mithun("/cart"))}
          >
            Cart
          </button>
          <button
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#5D4037',
              color: 'white',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginLeft:"20px",
              width:"100px",
              height:"40px",
            }}
            onClick={(()=>account("/login"))}
          >
            My Account
          </button>
        </div>
      </div>
           
        <div  style={{display:"flex"}}>
            <div style={{width:"500px",padding:"100px"}}>
            <img style={{width:"400px"}} src={data.image}/>
            </div>
            
            <div>
                <div style={{width:"600px"}}>
                <h1>{data.fullname}</h1>
                <p>${data.price}</p>
                
                </div>
                   <div style={{display:"flex",width:"500px",padding:"50px",boxShadow:"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px", }}>
                   

                   
                   
        <div style={{width:"300px",textAlign:"left" }}>

          <h4>Brand</h4>
       
          <h3>Countries</h3>
          
          <h3>Regions</h3>
         
          <h3>Size</h3>
          
          <h3>Wine Types</h3>
          <p>Wine Styles</p>
          <p>Ratings</p>
          </div>
        <div >
          <h3>{data.brand}</h3>
       
          <h3>{data.countries}</h3>
          

          <h3>{data.regions}</h3>
          
          <h3>{data.size}</h3>
        
          <h3>{data.wine_Types}</h3>
          <p>{data.wine_Styles}</p>
          <p>{data.rating}</p>
          <hr/>
         
          <button style={{width:"250px",height:"30px",backgroundColor:"#5D4037",color:"white",border:"white" }} >Place Your order</button><br/>
          <button style={{width:"250px",height:"30px",backgroundColor:"#5D4037",color:"white",border:"white",marginTop:"2px" }} onClick={()=>{

            if(checkDuplicate(data)){
              alert("Product Already in Cart")
            }else{
              let cartData = JSON.parse(localStorage.getItem('cart'));
              cartData.push({...data,quantity:1})
              // CartArr.push({...el,quantity:1})
              localStorage.setItem("cart",JSON.stringify(cartData))
              alert("Product Added To Cart")
            
            }


}} >ADD TO CART</button>
          </div>
          
      </div>
      </div>
        </div>
        </div>
        <img src={ten}/>
        </div>
    )
}
export default Singlepage