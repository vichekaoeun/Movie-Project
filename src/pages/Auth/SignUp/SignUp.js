import React, { useState } from "react";

const SignUp = () => {
    const [email, setEmail] = useState('username');
    const [password, setPassword] = useState('password');
    const [retypePassword, setRetypePassword] = useState('password');

    const handleSignUp = () => {
        if (password === retypePassword) {
            console.log('Signing up with:', email, password);
        } else {
            alert("Passwords do not match");
        }
    };

    return (
        <div className='flex justify-center items-center h-screen bg-gradient-to-tr from-yellow-600 to-purple-600'>
            <div className='flex flex-col items-center border-2 px-10 py-10 rounded-md bg-slate-400'>
                <h1 className='text-3xl'>Sign Up</h1>
                <form className='flex flex-col justify-center gap-4'>
                    <div className='flex flex-col gap-1 my-5'>
                        <label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='border p-2 rounded-sm' />
                        </label>

                        <label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='border p-2 rounded-sm' />
                        </label>
                        <label>
                            <input type="password" value={retypePassword} onChange={(e) => setRetypePassword(e.target.value)} className='border p-2 rounded-sm' />
                        </label>
                    </div>
                    <div className='flex justify-center '>
                        <button type="button" onClick={handleSignUp} className='border px-2 rounded-md bg-slate-100 text-black rounded-md px-2 py-2 text-base flex justify-center hover:bg-slate-600 active:bg-slate-700 focus:outline-none focus:ring focus:ring-slate-300'>Sign Up</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default SignUp;
