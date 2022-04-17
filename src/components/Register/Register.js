import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleLogin from '../GoogleLogin/GoogleLogin';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    // console.log(user);

    const handleEmail = (e) => {

        setEmail(e.target.value)

    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleRegister = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(email, password);

    };
    const navigate = useNavigate()
    const navigateLogin = () => {

        navigate('/banner');

    }

    // if (user) {
    //     navigate('/banner')
    // }



    // const navigate = useNavigate();
    const location1 = useLocation();
    const from1 = location1.state?.from1?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user]);
    // const navigate = useNavigate();


    let errorMsg;

    if (error) {
        errorMsg = <p className='text-danger'>{error?.message}</p>
    }

    // const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user]);

    return (
        <div className='container w-50 mt-5'>
            <h3 className='text-primary'>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                </Form.Group>
                <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
                {errorMsg}
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <GoogleLogin></GoogleLogin>
        </div>
    );
};

export default Register;