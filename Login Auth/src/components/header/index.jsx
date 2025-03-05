import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../contexts/authContext';
import { doSignOut } from '../../firebase/auth';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { userLoggedIn } = useAuth();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    // Handle scroll effects
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Log out handler with confirmation
    const handleLogout = async () => {
        try {
            await doSignOut();
            navigate("/login");
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    // Check if current path is active
    const isActive = (path) => {
        return location.pathname === path;
    };
    
    // Auth section - determine which auth button should be active
    const renderAuthButtons = () => {
        // For logged in users
        if (userLoggedIn) {
            return (
                <div className="flex items-center gap-4">
                    <Link 
                        to="/dashboard" 
                        className={`text-sm transition-colors hover:text-[#FF00CD] ${
                            isActive('/dashboard') ? 'text-[#FF00CD]' : 'text-white'
                        }`}
                    >
                        Dashboard
                    </Link>
                    <motion.button 
                        onClick={handleLogout}
                        className="py-2 px-4 text-sm rounded-full bg-black/40 border border-white/10 text-white hover:text-[#FF00CD] hover:border-[#FF00CD]/50 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Logout
                    </motion.button>
                </div>
            );
        }
        
        // For anonymous users - highlight login OR register based on current path
        const isLoginActive = isActive('/login');
        const isRegisterActive = isActive('/register');
        
        return (
            <div className="flex items-center gap-3">
                <Link to="/login">
                    <motion.button
                        className={`py-2 px-4 text-sm rounded-full transition-all duration-300 ${
                            isLoginActive
                                ? 'bg-gradient-to-r from-[#FF00CD] to-[#734EFF] text-white shadow-[0_0_12px_rgba(255,0,205,0.5)]' 
                                : 'border border-white/10 text-white hover:text-[#FF00CD] hover:border-[#FF00CD]/50'
                        }`}
                        whileHover={!isLoginActive ? { scale: 1.05 } : {}}
                        whileTap={!isLoginActive ? { scale: 0.95 } : {}}
                    >
                        Login
                    </motion.button>
                </Link>
                <Link to="/register">
                    <motion.button
                        className={`py-2 px-4 text-sm rounded-full transition-all duration-300 ${
                            isRegisterActive
                                ? 'bg-gradient-to-r from-[#FF00CD] to-[#734EFF] text-white shadow-[0_0_12px_rgba(255,0,205,0.5)]'
                                : isLoginActive 
                                    ? 'border border-white/10 text-white hover:text-[#FF00CD] hover:border-[#FF00CD]/50'
                                    : 'bg-gradient-to-r from-[#FF00CD]/80 to-[#734EFF]/80 text-white hover:shadow-[0_0_12px_rgba(255,0,205,0.5)]'
                        }`}
                        whileHover={!isRegisterActive ? { scale: 1.05 } : {}}
                        whileTap={!isRegisterActive ? { scale: 0.95 } : {}}
                    >
                        Register
                    </motion.button>
                </Link>
            </div>
        );
    };
    
    // Mobile auth buttons with same active state logic
    const renderMobileAuthButtons = () => {
        if (userLoggedIn) {
            return (
                <div className="flex flex-col gap-3 pt-2">
                    <Link 
                        to="/dashboard" 
                        className={`block py-2 transition-colors hover:text-[#FF00CD] ${
                            isActive('/dashboard') ? 'text-[#FF00CD]' : 'text-white'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Dashboard
                    </Link>
                    <button 
                        onClick={() => {
                            handleLogout();
                            setIsMenuOpen(false);
                        }}
                        className="py-2 text-left text-white hover:text-[#FF00CD] transition-colors"
                    >
                        Logout
                    </button>
                </div>
            );
        }
        
        const isLoginActive = isActive('/login');
        const isRegisterActive = isActive('/register');
        
        return (
            <div className="flex flex-col gap-3 pt-2">
                <Link 
                    to="/login" 
                    className={`block py-2 text-center rounded-lg transition-colors ${
                        isLoginActive
                            ? 'bg-gradient-to-r from-[#FF00CD] to-[#734EFF] text-white shadow-[0_0_8px_rgba(255,0,205,0.4)]'
                            : 'border border-white/10 text-white hover:text-[#FF00CD] hover:border-[#FF00CD]/30'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                >
                    Login
                </Link>
                <Link 
                    to="/register"
                    className={`block py-2 text-center rounded-lg text-white ${
                        isRegisterActive
                            ? 'bg-gradient-to-r from-[#FF00CD] to-[#734EFF] shadow-[0_0_8px_rgba(255,0,205,0.4)]'
                            : isLoginActive 
                                ? 'border border-white/10 hover:text-[#FF00CD] hover:border-[#FF00CD]/30'
                                : 'bg-gradient-to-r from-[#FF00CD]/80 to-[#734EFF]/80'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                >
                    Register
                </Link>
            </div>
        );
    };

    return (
        <motion.nav
            className={`flex w-full z-50 fixed top-0 left-0 transition-all duration-500 ${
                isScrolled ? 'py-2' : 'py-3'
            } justify-center`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
            <div className={`max-w-5xl w-full transition-all duration-500 px-6 relative overflow-hidden ${
                isScrolled 
                    ? 'bg-black/60 backdrop-blur-md shadow-[0_0_25px_rgba(255,0,205,0.3)] rounded-full border border-white/10' 
                    : 'bg-black/80'
            }`}>
                {/* Animated border glow - only when scrolled */}
                {isScrolled && (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-full">
                        <motion.div 
                            className="absolute inset-0 opacity-50"
                            style={{
                                background: `linear-gradient(90deg, transparent, rgba(255, 0, 205, 0.3), transparent)`,
                                width: '50%',
                                height: '200%',
                                top: '-50%',
                            }}
                            animate={{
                                left: ['-50%', '150%'],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 3,
                                ease: "linear"
                            }}
                        />
                    </div>
                )}

                <div className="flex items-center justify-between h-14">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF00CD] to-[#734EFF]">
                            GeneticX-Women
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link 
                            to="/" 
                            className={`text-sm transition-colors hover:text-[#FF00CD] ${
                                isActive('localhost:5173') ? 'text-[#FF00CD]' : 'text-white'
                            }`}
                        >
                            Home
                        </Link>
                        <Link 
                            to="/services" 
                            className={`text-sm transition-colors hover:text-[#FF00CD] ${
                                isActive('/services') ? 'text-[#FF00CD]' : 'text-white'
                            }`}
                        >
                            Services
                        </Link>
                        <Link 
                            to="/about" 
                            className={`text-sm transition-colors hover:text-[#FF00CD] ${
                                isActive('/about') ? 'text-[#FF00CD]' : 'text-white'
                            }`}
                        >
                            About
                        </Link>
                        <Link 
                            to="/contact" 
                            className={`text-sm transition-colors hover:text-[#FF00CD] ${
                                isActive('/contact') ? 'text-[#FF00CD]' : 'text-white'
                            }`}
                        >
                            Contact
                        </Link>

                        {/* Auth buttons with active state */}
                        {renderAuthButtons()}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <motion.button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`w-10 h-10 flex items-center justify-center rounded-full ${
                                isMenuOpen ? 'bg-gradient-to-r from-[#FF00CD]/20 to-[#734EFF]/20' : ''
                            }`}
                            whileTap={{ scale: 0.9 }}
                        >
                            <div className="w-6 h-5 flex flex-col justify-between relative">
                                <motion.span 
                                    className="w-6 h-0.5 bg-gradient-to-r from-[#FF00CD] to-[#734EFF] rounded-full block shadow-[0_0_5px_rgba(255,0,205,0.5)]"
                                    animate={{ 
                                        rotate: isMenuOpen ? 45 : 0,
                                        y: isMenuOpen ? 9 : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.span 
                                    className="w-6 h-0.5 bg-gradient-to-r from-[#734EFF] to-[#FF00CD] rounded-full block shadow-[0_0_5px_rgba(115,78,255,0.5)]"
                                    animate={{ opacity: isMenuOpen ? 0 : 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.span 
                                    className="w-6 h-0.5 bg-gradient-to-r from-[#FF00CD] to-[#734EFF] rounded-full block shadow-[0_0_5px_rgba(255,0,205,0.5)]"
                                    animate={{ 
                                        rotate: isMenuOpen ? -45 : 0,
                                        y: isMenuOpen ? -9 : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </motion.button>
                    </div>
                </div>

                {/* Mobile menu */}
                <motion.div 
                    className="md:hidden overflow-hidden"
                    initial={{ height: 0 }}
                    animate={{ height: isMenuOpen ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="py-4 space-y-3">
                        <Link 
                            to="/" 
                            className={`block py-2 transition-colors hover:text-[#FF00CD] ${
                                isActive('/') ? 'text-[#FF00CD]' : 'text-white'
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link 
                            to="/services" 
                            className={`block py-2 transition-colors hover:text-[#FF00CD] ${
                                isActive('/services') ? 'text-[#FF00CD]' : 'text-white'
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Services
                        </Link>
                        <Link 
                            to="/about" 
                            className={`block py-2 transition-colors hover:text-[#FF00CD] ${
                                isActive('/about') ? 'text-[#FF00CD]' : 'text-white'
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link 
                            to="/contact" 
                            className={`block py-2 transition-colors hover:text-[#FF00CD] ${
                                isActive('/contact') ? 'text-[#FF00CD]' : 'text-white'
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                        
                        <div className="pt-2 border-t border-white/10">
                            {renderMobileAuthButtons()}
                        </div>
                    </div>
                </motion.div>
            </div>
            
            {/* Timestamp */}
            <div className="hidden">Last updated: 2025-03-04 17:06:08 | Created by Abhinavpreet-Singh</div>
        </motion.nav>
    );
};

export default Header;