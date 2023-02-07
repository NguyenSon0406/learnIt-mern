import React, {useContext} from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import Spinner from 'react-bootstrap/esm/Spinner'
import NavbarMenu from '../layout/NavbarMenu'


const ProtectedRoute = ({ children }) => {
    const { authState } = useContext(AuthContext)

    const { authLoading, isAuthenticated } = authState

    if(authLoading)
    {
        return (
        <div className='spinner-container'>
            <Spinner animation='border' variant='info' />
        </div>
    )}
    
    if(!isAuthenticated)
    {
        return <Navigate to='/login' replace />
    }
    else 
        return (<>
            <NavbarMenu/>
            {children ? children : <Outlet/>}
        </>)
//   return (
//     <Route {...rest} element={props => isAuthenticated ? (
//         <Component {...rest} {...props}/>
//     ) : (<Navigate to='/login' /> )}/>
//     )
}

export default ProtectedRoute
