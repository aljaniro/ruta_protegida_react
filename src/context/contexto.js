import React, { createContext, useState } from 'react'

export const bolsa = createContext()

export const Contexto= ({children})=>{
    const [datos,setdatos] = useState("hola")
    const [user, setuser] = useState(null);
    return (
      <div>
        <bolsa.Provider value = {{datos,setdatos,user,setuser}} >
            {children}
        </bolsa.Provider>
      </div>
    )
} 
   

