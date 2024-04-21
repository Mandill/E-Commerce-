import React from 'react'
import { Navigate } from "react-router"

const ProtectedforAdmin = ({children}) => {

    const user = JSON.parse(localStorage.getItem('users'))
    // console.log(user.role);
    if(user?.role === 'admin')
    {
        return children
    }
    else
    {
        return <Navigate to={'/login'}/>
    }
}

export default ProtectedforAdmin
