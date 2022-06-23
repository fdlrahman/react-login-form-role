import React, { useEffect } from 'react'
import { Outlet, useLocation, Navigate } from 'react-router-dom'
import UseAuth from '../hooks/UseAuth'
import Unauthorized from './Unauthorized';

function RequireAuth({ allowedRoles }) {
    const { auth } = UseAuth();
    const location = useLocation()

    useEffect(() => {
        console.log('require auth', auth)
        console.log('allowedRules home : ', allowedRoles)
    }, [])

    // if user not logged in
    if( !auth ) return <Navigate to="/login" state={{ from: location }} replace />

    // if user don't have permission
    if( !allowedRoles.includes(auth.role) ) return <Unauthorized />

    return <Outlet />
}

export default RequireAuth