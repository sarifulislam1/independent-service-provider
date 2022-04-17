
import React, { useEffect, useRef, useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import GoogleLogin from '../components/GoogleLogin/GoogleLogin';
import auth from '../firebase.init';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // console.log(user);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


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

    if (loading || sending) {
        return <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    }

    const navigateToRegister = () => {
        navigate('/register')
    }

    const resetPassword = async () => {
        // const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email send')
        }
        else {
            toast('please enter your email address');
        }
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
                <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>

                <p>Dont't have any account? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateToRegister}>Please Register</Link> </p>
                <Button variant="primary" type="submit">
                    Login
                </Button>

            </Form>
            <GoogleLogin></GoogleLogin>
            <ToastContainer />

        </div>
    );
};

export default Login;