import React from 'react';
import { Link } from 'react-router-dom';
import { authcontext } from '../Context/Authcontext';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import ten from "../10.png"
import { useNavigate } from 'react-router-dom';



const LoginPage = () => {
  const mithun=useNavigate()
  const [username,setusername]=useState("")
  const [password,setpassword]=useState("")
  const [rname,setrname]=useState("")
  const [remail,setremail]=useState("")
  const [rpassword,setrpassword]=useState("")
  const {login,isauth}=useContext(authcontext)

function handelpost (e){
  e.preventDefault()
  let user={
    username:rname,
    password:rpassword
  }
  

    fetch(`http://localhost:8080/users`,{
      method:"POST",
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(user)
    
    })
    .then(()=>{
      alert("Success")
      setrname("")
      setremail("")
      setrpassword("")
    })
   

}


  const handellogin = async (e) =>{
    e.preventDefault()
 
 
     let res=await fetch("http://localhost:8080/users")
     let data= await res.json()
     console.log(data)
 
     const matchuser=data.find(
     (user)=>user.username===username && user.password===password)
     console.log(matchuser)
     if(matchuser){
      login(matchuser)
     }
    
    
 }
 if(isauth){
  return< Navigate to="/home"/>
     }
  return (
    <div>
   
    <div
      style={{
        background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://img.freepik.com/premium-photo/red-wine-pouring-glass_488220-21683.jpg")',
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 style={{color:"white",marginBottom:"700px",}}><b>MY ACCOUNT</b></h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '800px',
          borderRadius: '5px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            background: '#fff',
            padding: '40px',
            width: '50%',
          }}
        >
          <h2>Login</h2>
          <form onSubmit={handellogin}>
            <input
              type="text"
              placeholder="Username"
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '15px',
              }}
              name="username" value={username} onChange={((e)=>setusername(e.target.value))}
            />
            <input
              type="password"
              placeholder="Password"
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '15px',
              }}
              name="password" value={password}  onChange={((e)=>setpassword(e.target.value))}
            />
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '10px',
                background: 'linear-gradient(to right, #30CFD0, #330867)',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                
              }}
            >
              Login
            </button>
          </form>
          <button
              type="submit"
              style={{
                width: '100%',
                padding: '10px',
                background: 'linear-gradient(to right, #30CFD0, #330867)',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginTop:"10px",
                
              }}
              onClick={(()=>mithun("/"))}
            >
              Logout
            </button>
        </div>
        <div
          style={{
            background: '#fff',
            padding: '40px',
            width: '50%',
          }}
        >
          <h2>Register</h2>
          <form onSubmit={handelpost}>
            <input
              type="text"
              placeholder="name"
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '15px',
              }}
              value={rname} onChange={(e)=>setrname(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '15px',
              }}
              value={remail} onChange={(e)=>setremail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '15px',
              }}
              value={rpassword} onChange={(e)=>setrpassword(e.target.value)}
            />
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '10px',
                background: 'linear-gradient(to right, #FF512F, #F09819)',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;

