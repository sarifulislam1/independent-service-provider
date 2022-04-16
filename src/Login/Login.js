import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
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
    if (user) {
        navigate('/banner')
    }

    let errorMsg;

    if (error) {
        errorMsg = <p className='text-danger'>{error?.message}</p>
    }
    return (
        <div className='container w-50 mt-5'>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />



                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                </Form.Group>
                {errorMsg}
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <GoogleLogin></GoogleLogin>
        </div>
    );
};

export default Login;