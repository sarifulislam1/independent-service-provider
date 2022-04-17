import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';

const RequarAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <Spinner className='mt-5' animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    }

    if (user) {
        return children;
    } else {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
};

export default RequarAuth;