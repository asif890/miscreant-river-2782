import LoginPage from './Component/Login';

import './App.css';
import { useState } from 'react';

import bd from "./bg.png"
import Home from './Component/Home';
import Allrout from './Component/Allroute';
import { useNavigate } from 'react-router-dom';


function App() {
  const mithun=useNavigate()
  const dev=useNavigate()

  return (
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
     
     <Allrout/>
      
    </div>
  );
}

export default App;
