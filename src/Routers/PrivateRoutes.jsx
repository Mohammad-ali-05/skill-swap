import React, { useContext } from 'react';
import AuthContext from '../Contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Components/Loading';

const PrivateRoutes = ({ children }) => {
    const location = useLocation() 
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        return children
    }

    return <Navigate state={location.pathname}  to={"/auth/login"}></Navigate>
};

export default PrivateRoutes;