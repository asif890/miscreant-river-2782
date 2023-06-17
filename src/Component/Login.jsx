import React from 'react';
import { Link } from 'react-router-dom';



const LoginPage = () => {
  return (
    <div>
    <div  style={{width:"100%",height:"150",backgroundColor:"black" ,marginBottom:"20px"}}>
         <h1 style={{color:"white"}}><b>MY ACCOUNT</b></h1>
      </div>
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
          <form>
            <input
              type="text"
              placeholder="Username"
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '15px',
              }}
            />
            <input
              type="password"
              placeholder="Password"
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '15px',
              }}
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
        </div>
        <div
          style={{
            background: '#fff',
            padding: '40px',
            width: '50%',
          }}
        >
          <h2>Register</h2>
          <form>
            <input
              type="text"
              placeholder="Username"
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '15px',
              }}
            />
            <input
              type="email"
              placeholder="Email"
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '15px',
              }}
            />
            <input
              type="password"
              placeholder="Password"
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '15px',
              }}
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

