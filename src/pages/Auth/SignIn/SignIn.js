import React, { useState } from 'react';
import SignUp from '../SignUp/SignUp';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        console.log('Signing in with:', email, password);
    };

    return (
        <div className='flex justify-center items-center h-screen bg-gradient-to-tr from-yellow-600 to-purple-600'>
            <div className='flex flex-col items-center border-2 px-10 py-10 rounded-md bg-slate-400'>
                <h1 className='text-3xl'>Sign In</h1>
                <form className='flex flex-col justify-center gap-4'>
                    <div className='flex flex-col gap-1 my-5'>
                        <label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='border p-2 rounded-sm' />
                        </label>

                        <label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='border p-2 rounded-sm' />
                        </label>
                    </div>
                    <div className='flex justify-center '>
                        <button type="button" onClick={handleSignIn} className='border px-2 rounded-md bg-slate-100 text-black rounded-md px-2 py-2 text-base flex justify-center hover:bg-slate-600 active:bg-slate-700 focus:outline-none focus:ring focus:ring-slate-300'>Sign In</button>
                    </div>
                    <div className='flex justify-center'>
                        <Link to='/signup'>Create Account?</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
