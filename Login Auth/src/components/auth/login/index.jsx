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
        <div className="flex items-center justify-center min-h-screen bg-black px-6">
            {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}
            <div className="w-96 text-white p-6 border border-pink-500 rounded-xl shadow-lg bg-black">
                <div className="text-center">
                    <h3 className="text-2xl font-semibold">Welcome Back</h3>
                    <p className="text-gray-400">Sign in to continue</p>
                </div>
                <form onSubmit={onSubmit} className="space-y-5 mt-5">
                    <div>
                        <label className="text-sm font-bold">Email Address</label>
                        <input
                            type="email"
                            required
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full mt-2 px-3 py-2 bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-pink-500 rounded-lg"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-bold">Password</label>
                        <input
                            type="password"
                            required
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full mt-2 px-3 py-2 bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-pink-500 rounded-lg"
                        />
                    </div>

                    {errorMessage && <span className='text-red-600 font-bold'>{errorMessage}</span>}

                    <button
                        type="submit"
                        disabled={isSigningIn}
                        className={`w-full py-2 font-medium rounded-lg ${isSigningIn ? 'bg-gray-500 cursor-not-allowed' : 'bg-pink-500 hover:bg-pink-600 transition'}`}
                    >
                        {isSigningIn ? 'Signing In...' : 'Sign In'}
                    </button>
                </form>
                <p className="text-center text-sm mt-4">Don't have an account? <Link to={'/register'} className="text-pink-500 hover:underline">Sign up</Link></p>
                <div className='flex items-center text-center w-full my-4'>
                    <div className='border-b-2 border-gray-700 flex-grow'></div>
                    <div className='text-sm font-bold mx-2'>OR</div>
                    <div className='border-b-2 border-gray-700 flex-grow'></div>
                </div>
                <button
                    disabled={isSigningIn}
                    onClick={onGoogleSignIn}
                    className={`w-full flex items-center justify-center gap-x-3 py-2.5 border border-gray-700 rounded-lg text-sm font-medium text-white ${isSigningIn ? 'cursor-not-allowed' : 'hover:bg-gray-800 transition'}`}>
                    <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_17_40)">
                            <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                            <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                        </g>
                        <defs>
                            <clipPath id="clip0_17_40">
                                <rect width="48" height="48" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    {isSigningIn ? 'Signing In...' : 'Continue with Google'}
                </button>
            </div>
        </div>
    );
};

export default Login;