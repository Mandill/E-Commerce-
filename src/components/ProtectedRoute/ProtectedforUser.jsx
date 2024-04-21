import React from 'react'
import { Navigate } from "react-router"

const ProtectedforUser = ({children}) => {

    const user = JSON.parse(localStorage.getItem('users'))
    // console.log(user.role);
    if(user?.role === 'user')
    {
        return children
    }
    else
    {
        return <Navigate to={'/login'}/>
    }
}

export default ProtectedforUser