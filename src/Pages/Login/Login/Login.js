import React from 'react';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const {singnInUsingGoogle}=useAuth()
    return (
        <div>
            <h2>Please login</h2>
            <button onClick={singnInUsingGoogle} className='btn btn-warning'>Goggle Sign In</button>
        </div>
    );
};

export default Login;