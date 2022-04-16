import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div>
            <button
                onClick={() => signInWithGoogle()}
                className='btn  w-50 d-block mx-auto my-4 border border-2 rounded'>
                <img style={{ width: '30px' }} src="https://cdn.imgbin.com/17/10/21/google-suite-icon-google-icon-LmAAJV07.jpg" alt="" />
                <span className='px-2'>Google Sign In</span>
            </button>
        </div>
    );
};

export default GoogleLogin;