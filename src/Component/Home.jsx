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
import { useNavigate } from "react-router-dom";
import bd from "../bg.png"
import { Link } from "react-router-dom";
import ten from "../10.png"


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
  const mithun=useNavigate()
  const dev=useNavigate()
  const [data ,setdata]=useState([])

    const [loding, setloding]=useState(false)
    const [page ,setpage] = useState(1)
    const [filterby, setfilterby] = useState("")
    const [sortby, setsortby] = useState("")
    const [orderby,setorderby] = useState("")
    const[wine,setwine] = useState("")
    const [spirits,setspirits] = useState("")
    const [beer,setbeer]=useState("")
    
    const limit=12
    // const sort="price"
    
    function getapiurl (url,filterby,sortby,orderby){
      if (filterby){
        return (url=`${url}&countries=${filterby}`)
      }else if(sortby && orderby){
        return (url=`${url}&_sort=${sortby}&_order=${orderby}`)
      }else if(wine){
        return (url=`${url}&wine_Styles=${wine}`)
      }else if(spirits){
        return (url=`${url}&spirits=${spirits}`)
      }else if(beer){
        return (url=`${url}&beer=${beer}`)
      }
    return url
    }
    
    
    
    
    
    async function fetcproductdetaisfromapi(page){
      let apiurl=getapiurl(`http://localhost:8080/products?_page=${page}&_limit=${limit}`,
      filterby,sortby,orderby,wine,spirits,beer)
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
    
    function handelpage(curr){
      setpage(page+curr)
    }
    function handleSearch(value) {
      fetch(`http://localhost:8080/products?q=${value}`)
      .then((res)=>res.json())
      .then((data)=>{
        setdata(data)
        console.log("data", data);
        setloding(false)
      })
    }
    
    
    useEffect(()=>{
      fetcproductdetaisfromapi(page)
    },[page,filterby,sortby,orderby,wine,spirits,beer])
    
    
    return (
        <div style={{margin:"auto"}}className="App">
           <div className="App">
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
            onChange={(e) => {
              handleSearch(e.target.value);
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
            onClick={(()=>mithun("/login"))}
          >
            My Account
          </button>
        </div>
      </div>
     

      
    </div>
        <div style={{width:"100%",height:"40px" ,border:"1px solid grey" ,display:"flex" ,backgroundColor:"#5D4037"}}>
            <div>
            <select style={{width:"120px",height:"40px" ,border:"none" ,display:"flex",marginRight:"10px",backgroundColor:"#5D4037",color:"white"}} onChange={(e)=>setfilterby(e.target.value)}>
            <option value={"United States"}>united state</option>
            <option value={"maxico"}>Maxico</option>
            <option value={"florida"}>Florida</option>
            <option value={"belgium"}>Belgium</option>
            <option value={"turkey"}>Turkey</option>
            <option value={"unitedkingdom"}>United Kingdom</option>
            <option value={"france"}>France</option>
            <option value={"thailand"}>Thailand</option>
            <option value={"Chile"}>Chile</option>
           </select>
            </div>

            <div>
            <select style={{width:"120px",height:"40px" ,border:"none" ,display:"flex",marginRight:"10px",backgroundColor:"#5D4037",color:"white"}} onChange={(e)=>setwine(e.target.value)} >
            <option value={""}>WINE</option>
            <option value={"red"}>Red Wine</option>
            <option value={"white"}>White Wine</option>
            <option value={"sparkling"}>Sparkling Wine</option>
            <option value={"fruit"}>Fruit Wine</option>
            <option value={"dessert"}>Dessert Wine</option>
           </select>
            </div>


            <div>
            <select style={{width:"110px",height:"40px" ,border:"none" ,display:"flex",marginRight:"10px",backgroundColor:"#5D4037",color:"white"}} onChange={(e)=>setspirits(e.target.value)}>
            <option value={""}>SPIRITS</option>
            <option value={"vodka"}>Vodka</option>
            <option value={"scotch"}>Scotch</option>
            <option value={"bourbon"}>Bourbon</option>
            <option value={"whiskey"}>Whiskey</option>
            <option value={"rum"}>Rum</option>
            <option value={"tequila"}>Tequila</option>
            <option value={"brandy"}>Brandy & Cognac</option>
           </select>
            </div>
            <button style={{width:"70px",height:"40px" ,border:"none" ,marginRight:"10px",backgroundColor:"#5D4037",color:"white"}} onClick={()=>setbeer("beer")}>BEER</button>
         

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
  <h3 style={{marginRight:"700px",}}>Latest Collection</h3>
  </div>
  <div>
  <h4>sort by </h4>
  </div>

  <div style={{margin:"auto"}}>
    
    <select style={{width:"150px",height:"40px" ,border:"none" ,display:"flex",marginRight:"10px",backgroundColor:"black",color:"white"}} onChange={(e)=> setsortby(e.target.value)}>
        <option value={"price"}>Price</option>
        <option value={"rating"}>Rating</option>
    </select>
  </div>

  <div>
  <h4>sort Order By</h4>
  </div>

  <div style={{margin:"auto"}}>
    <select style={{width:"150px",height:"40px" ,border:"none" ,display:"flex",marginRight:"10px",backgroundColor:"black",color:"white"}} onChange={(e)=>setorderby(e.target.value)}>
        <option value={"asc"}>Ascending</option>
        <option value={"desc"}>Descending</option>
    </select>
  </div>
  
  </div>
  <hr/>
  <div style={{display:'grid',gridTemplateColumns:"repeat(4,2fr)"}}>
          {data.map((el,i)=>(
            <div style={{marginTop:"20px"}} key={el.id}>

<Link to={`/products/${el.id}`}><img src={el.image} alt={el.name}width={200}height={200}/></Link> 
              <p>{el.title}</p>
              <p>{el.category}</p>
              <p>price:{el.price}</p>
              <button style={{height:"30px",width:"200px",backgroundColor:"#5D4037",color:"white",border:"white"}} onClick={()=>{

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
          <button onClick={()=>handelpage(-1)} disabled={page==1}>pre</button>
          <button>{page}</button>
          <button onClick={()=>handelpage(+1)}>next</button>
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
        <img src={ten}/>
        
        </div>
    )
  };
    


export default Home