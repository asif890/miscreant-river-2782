import React, { useState} from 'react'
import { createContext } from 'react'

export const authcontext =createContext()

export default function AuthContextProvider({children}) {
  const [isauth,setisauth] =useState(false)
 


  function login(matchuser){
    setisauth(true)
    
  }
  function logout(){
    setisauth(false)
  
  }

  return (
    
   

    <authcontext.Provider value={{isauth,login,logout}}>
             {children}
          </authcontext.Provider>
)
  
  
}