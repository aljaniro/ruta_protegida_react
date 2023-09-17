import React, { useContext } from 'react'
import { Navigate , Outlet} from 'react-router-dom'
import { DataContext } from '../context/contextLogin'
function Protector({children}) {
    const {user} = useContext(DataContext)
   
   
    console.log(user)
    if(!user){
        return <Navigate to='/'/>
    }
   
  return children ? children : <Outlet></Outlet>
}

export default Protector
