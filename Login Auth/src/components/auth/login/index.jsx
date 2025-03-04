import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
                window.location.href = "/home";
            } catch (err) {
                setIsSigningIn(false);
                setErrorMessage("Invalid email or password. Try again.");
            }
        }
    };

    const onGoogleSignIn = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithGoogle();
                window.location.href = "/home";
            } catch (err) {
                setIsSigningIn(false);
                setErrorMessage("Google sign-in failed. Try again.");
            }
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#FF00CD] to-[#734EFF] px-6">
            {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}

            <motion.div 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full max-w-md bg-gradient-to-br from-[#FF00CD] to-[#734EFF] p-8 rounded-xl shadow-xl border border-[#734EFF] text-white"
            >
                <h3 className="text-3xl font-bold text-center text-white">Welcome Back</h3>
                <p className="text-center text-gray-300 mb-6">Sign in to continue</p>
                
                <form onSubmit={onSubmit} className="space-y-4">
                    <div>
                        <label className="text-gray-200 text-sm">Email Address</label>
                        <input 
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full mt-1 p-3 bg-white/10 border border-white/30 rounded-lg text-white focus:ring-2 focus:ring-white focus:outline-none"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label className="text-gray-200 text-sm">Password</label>
                        <input 
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full mt-1 p-3 bg-white/10 border border-white/30 rounded-lg text-white focus:ring-2 focus:ring-white focus:outline-none"
                            placeholder="Enter your password"
                        />
                    </div>
                    {errorMessage && <p className='text-red-400 text-sm text-center'>{errorMessage}</p>}
                    <button 
                        type="submit"
                        disabled={isSigningIn}
                        className={`w-full p-3 rounded-lg text-white font-semibold transition duration-300 ${isSigningIn ? 'bg-gray-600 cursor-not-allowed' : 'bg-white text-[#FF00CD] hover:bg-gray-200'}`}
                    >
                        {isSigningIn ? 'Signing In...' : 'Sign In'}
                    </button>
                </form>
                
                <div className='flex items-center gap-x-3 my-4'>
                    <div className='h-px bg-gray-400 flex-grow'></div>
                    <span className='text-sm text-gray-300'>OR</span>
                    <div className='h-px bg-gray-400 flex-grow'></div>
                </div>
                
                <button
                    disabled={isSigningIn}
                    onClick={onGoogleSignIn}
                    className={`w-full flex items-center justify-center gap-x-3 p-3 border border-gray-400 rounded-lg text-sm font-medium transition-all duration-300 ${isSigningIn ? 'cursor-not-allowed bg-gray-600' : 'bg-white/10 hover:bg-white/20 text-white'}`}
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    </svg>
                    {isSigningIn ? 'Signing In...' : 'Continue with Google'}
                </button>
                
                <p className="text-center text-sm text-gray-300 mt-4">
                    Don't have an account? 
                    <Link to={'/register'} className="ml-1 font-semibold text-white hover:text-gray-200 transition-colors duration-300">
                        Sign up
                    </Link>
                </p>
            </motion.div>
        </div>
    );
};

export default Login;