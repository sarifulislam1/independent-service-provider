import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleLogin from '../components/GoogleLogin/GoogleLogin';
import auth from '../firebase.init';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    console.log(user);

    const handleEmail = (e) => {

        setEmail(e.target.value)

    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    const navigate = useNavigate()
    // if (user) {
    //     navigate('/banner')
    // }
    // const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user])

    let errorMsg;

    if (error) {
        errorMsg = <p className='text-danger'>{error?.message}</p>
    }
    const navigateToRegister = () => {
        navigate('/register')
    }
    return (
        <div className='container w-50 mt-5'>
            <h3 className='text-primary'>Please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />



                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                </Form.Group>
                {errorMsg}
                <p>Dont't have any account? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateToRegister}>Please Register</Link> </p>
                <Button variant="primary" type="submit">
                    Login
                </Button>

            </Form>
            <GoogleLogin></GoogleLogin>
        </div>
    );
};

export default Login;