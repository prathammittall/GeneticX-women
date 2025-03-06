import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { motion } from "framer-motion";
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
                window.location.href = "https://fmain-app.onrender.com";
            } catch (err) {
                setIsSigningIn(false);
            }
        }
    };

    // Update the onGoogleSignIn function
    const onGoogleSignIn = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithGoogle();
                // Redirect to the target page after successful sign-in
                window.location.href = "https://fmain-app.onrender.com";
            } catch (err) {
                setIsSigningIn(false);
            }
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-black relative px-6">
            {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}
            
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#FF00CD]/10 blur-3xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-[#734EFF]/10 blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-[#FF00CD]/5 to-[#734EFF]/5 blur-3xl"></div>
            </div>

            <motion.div 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full max-w-md bg-black/40 backdrop-blur-md p-8 rounded-xl shadow-[0_0_25px_rgba(255,0,205,0.3)] border border-white/10 text-white relative z-10"
            >
                <h3 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#FF00CD] to-[#734EFF]">Welcome Back</h3>
                <p className="text-center text-gray-300 mb-6">Sign in to continue</p>
                
                <form onSubmit={onSubmit} className="space-y-4">
                    <div>
                        <label className="text-gray-300 text-sm">Email Address</label>
                        <input 
                            type="email"
                            required
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full mt-1 p-3 bg-black/50 border border-white/10 focus:border-[#FF00CD]/50 focus:ring-2 focus:ring-[#FF00CD]/20 rounded-lg text-white focus:outline-none transition-all duration-300"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="text-gray-300 text-sm">Password</label>
                        <input 
                            type="password"
                            required
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full mt-1 p-3 bg-black/50 border border-white/10 focus:border-[#734EFF]/50 focus:ring-2 focus:ring-[#734EFF]/20 rounded-lg text-white focus:outline-none transition-all duration-300"
                            placeholder="Enter your password"
                        />
                    </div>
                    
                    {errorMessage && (
                        <motion.p 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className='text-red-400 text-sm text-center bg-red-900/20 py-2 px-3 rounded-lg border border-red-500/20'
                        >
                            {errorMessage}
                        </motion.p>
                    )}
                    
                    <button 
                        type="submit"
                        disabled={isSigningIn}
                        className={`w-full p-3 rounded-lg font-semibold transition duration-300 relative overflow-hidden ${
                            isSigningIn 
                                ? 'bg-gray-600 cursor-not-allowed' 
                                : 'bg-gradient-to-r from-[#FF00CD] to-[#734EFF] hover:shadow-[0_0_15px_rgba(255,0,205,0.4)] text-white'
                        }`}
                    >
                        <span className="relative z-10">
                            {isSigningIn ? 'Signing In...' : 'Sign In'}
                        </span>
                        
                        {/* Animated gradient overlay on hover */}
                        {!isSigningIn && (
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-all duration-1000"></span>
                        )}
                    </button>
                </form>
                
                <div className='flex items-center gap-x-3 my-4'>
                    <div className='h-px bg-white/10 flex-grow'></div>
                    <span className='text-sm text-gray-400'>OR</span>
                    <div className='h-px bg-white/10 flex-grow'></div>
                </div>
                <button
                    disabled={isSigningIn}
                    onClick={onGoogleSignIn}
                    className={`w-full flex items-center justify-center gap-x-3 p-3 border border-white/10 rounded-lg text-sm font-medium transition-all duration-300 ${
                        isSigningIn 
                            ? 'cursor-not-allowed bg-gray-600' 
                            : 'bg-black/30 hover:bg-white/10 text-white'
                    }`}
                >
                    <svg className="w-5 h-5 text-[#FF00CD]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    </svg>
                    {isSigningIn ? 'Signing In...' : 'Continue with Google'}
                </button>
                
                <p className="text-center text-sm text-gray-400 mt-4">
                    Don't have an account? 
                    <Link to={'/register'} className="ml-1 font-semibold text-[#FF00CD] hover:text-[#ff65e5] transition-colors duration-300">
                        Sign up
                    </Link>
                </p>
                
                {/* Timestamp */}
                <div className="mt-6 text-center text-xs text-gray-600">
                    <p>Last updated: 2025-03-04 15:35:55 | Created by Abhinavpreet-Singh</p>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;