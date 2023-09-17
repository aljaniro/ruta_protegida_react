import React, { useContext } from 'react'
import { DataContext } from '../context/contextLogin'
import { Navigate,Outlet } from 'react-router-dom'
function ProtectorLogin({children}) {
    const {user} = useContext(DataContext)
    if(user){
        console.log("existe")
        return <Navigate to='/datos'></Navigate>
    }
    return children ? children : <Outlet></Outlet>
}

export default ProtectorLogin
