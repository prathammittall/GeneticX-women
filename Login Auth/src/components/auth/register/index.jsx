import React, { useState } from 'react';
import { Navigate, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../../contexts/authContext';
import { doCreateUserWithEmailAndPassword } from '../../../firebase/auth';

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { userLoggedIn } = useAuth();

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isRegistering) {
            setIsRegistering(true);
            try {
                await doCreateUserWithEmailAndPassword(email, password);
                window.location.href = "https://lawgic-login-auth.vercel.app/";
            } catch (err) {
                setIsRegistering(false);
                setErrorMessage("Registration failed. Please try again.");
            }
        }
    };

    return (
        <>
            {userLoggedIn && <Navigate to={'/home'} replace={true} />}

            <div className="flex items-center justify-center min-h-screen bg-black relative px-6">
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
                    <h3 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#FF00CD] to-[#734EFF]">Create Account</h3>
                    <p className="text-center text-gray-300 mb-6">Join GeneticX-Women platform</p>
                    
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
                                placeholder="Create a password"
                            />
                        </div>
                        
                        <div>
                            <label className="text-gray-300 text-sm">Confirm Password</label>
                            <input 
                                type="password"
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full mt-1 p-3 bg-black/50 border border-white/10 focus:border-[#734EFF]/50 focus:ring-2 focus:ring-[#734EFF]/20 rounded-lg text-white focus:outline-none transition-all duration-300"
                                placeholder="Confirm your password"
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
                            disabled={isRegistering}
                            className={`w-full p-3 rounded-lg font-semibold transition duration-300 relative overflow-hidden ${
                                isRegistering 
                                    ? 'bg-gray-600 cursor-not-allowed' 
                                    : 'bg-gradient-to-r from-[#FF00CD] to-[#734EFF] hover:shadow-[0_0_15px_rgba(255,0,205,0.4)] text-white'
                            }`}
                        >
                            <span className="relative z-10">
                                {isRegistering ? 'Creating Account...' : 'Create Account'}
                            </span>
                            
                            {/* Animated gradient overlay on hover */}
                            {!isRegistering && (
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-all duration-1000"></span>
                            )}
                        </button>
                        
                        <p className="text-center text-sm text-gray-400 mt-4">
                            Already have an account? 
                            <Link to={'/login'} className="ml-1 font-semibold text-[#FF00CD] hover:text-[#ff65e5] transition-colors duration-300">
                                Sign in
                            </Link>
                        </p>
                    </form>
                    
                    {/* Data Privacy Notice */}
                    <div className="mt-6 p-3 bg-white/5 rounded-lg border border-white/10">
                        <p className="text-xs text-gray-400 text-center">
                            By creating an account, you agree to our <a href="#" className="text-[#FF00CD] hover:underline">Terms of Service</a> and acknowledge our <a href="#" className="text-[#FF00CD] hover:underline">Privacy Policy</a> regarding your genetic data.
                        </p>
                    </div>
                    
                    {/* Timestamp */}
                    <div className="mt-6 text-center text-xs text-gray-600">
                        <p>Last updated: 2025-03-04 15:47:27 | Created by Abhinavpreet-Singh</p>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Register;