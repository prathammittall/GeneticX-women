import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../../firebase/auth';
import { useAuth } from '../../../contexts/authContext';

const Login = () => {
    const { userLoggedIn } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithEmailAndPassword(email, password);
                window.location.href = "https://law-files-chatbot-nzjiwmxfuzgpsnwzbepqhf.streamlit.app/";
            } catch (err) {
                setIsSigningIn(false);
            }
        }
    };

    const onGoogleSignIn = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithGoogle();
                window.location.href = "https://law-files-chatbot-nzjiwmxfuzgpsnwzbepqhf.streamlit.app/";
            } catch (err) {
                setIsSigningIn(false);
            }
        }
    };

    return (
        <div>
            {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}

            <main className="w-full h-screen flex items-center justify-center bg-[#1A1A2E] px-6">
                <div className="w-96 text-white space-y-5 p-6 shadow-xl border border-[#734EFF] rounded-xl bg-[#0F3460]">
                    <div className="text-center">
                        <h3 className="text-[#734EFF] text-2xl font-semibold">Welcome Back</h3>
                    </div>
                    <form onSubmit={onSubmit} className="space-y-5">
                        <div>
                            <label className="text-sm font-bold text-[#734EFF]">Email</label>
                            <input
                                type="email"
                                autoComplete='email'
                                required
                                value={email} onChange={(e) => setEmail(e.target.value)}
                                className="w-full mt-2 px-3 py-2 text-[#734EFF] bg-[#16213E] outline-none border border-[#734EFF] focus:ring-2 focus:ring-[#734EFF] shadow-sm rounded-lg transition duration-300"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-bold text-[#734EFF]">Password</label>
                            <input
                                type="password"
                                autoComplete='current-password'
                                required
                                value={password} onChange={(e) => setPassword(e.target.value)}
                                className="w-full mt-2 px-3 py-2 text-[#734EFF] bg-[#16213E] outline-none border border-[#734EFF] focus:ring-2 focus:ring-[#734EFF] shadow-sm rounded-lg transition duration-300"
                            />
                        </div>

                        {errorMessage && (
                            <span className='text-red-600 font-bold'>{errorMessage}</span>
                        )}

                        <button
                            type="submit"
                            disabled={isSigningIn}
                            className={`w-full px-4 py-2 text-white font-medium rounded-lg ${isSigningIn ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#734EFF] hover:bg-[#5A3BFF] hover:shadow-xl transition duration-300'}`}
                        >
                            {isSigningIn ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>
                    <p className="text-center text-sm text-[#734EFF]">Don't have an account? <Link to={'/register'} className="hover:underline font-bold text-[#FF00CD]">Sign up</Link></p>
                    <div className='flex items-center text-center w-full'>
                        <div className='border-b-2 border-[#734EFF] flex-grow'></div>
                        <div className='text-sm font-bold mx-2 text-[#734EFF]'>OR</div>
                        <div className='border-b-2 border-[#734EFF] flex-grow'></div>
                    </div>
                    <button
                        disabled={isSigningIn}
                        onClick={onGoogleSignIn}
                        className={`w-full flex items-center justify-center gap-x-3 py-2.5 border border-[#734EFF] rounded-lg text-sm font-medium text-[#734EFF] ${isSigningIn ? 'cursor-not-allowed' : 'hover:bg-[#734EFF] hover:text-white transition duration-300'}`}>
                        {isSigningIn ? 'Signing In...' : 'Continue with Google'}
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Login;