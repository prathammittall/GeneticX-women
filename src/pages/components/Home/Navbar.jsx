import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [activePage, setActivePage] = useState('home');
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

	// Track mouse position for glow effect
	useEffect(() => {
		const handleMouseMove = (e) => {
			const { clientX, clientY } = e;
			setMousePosition({ x: clientX, y: clientY });
		};

		window.addEventListener('mousemove', handleMouseMove);
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	// Nav links data
	const navLinks = [
		{ name: 'Home', href: 'home', id: 'home' },
		{ name: 'Services', href: 'services', id: 'services' },
		{ name: 'Team', href: 'team', id: 'team' },
		{ name: 'Pricing', href: 'pricing', id: 'pricing' },
		{ name: 'FAQ', href: 'FAQ', id: 'FAQ' }
	];

	const handleClick = (e, href) => {
		e.preventDefault();
		const element = document.getElementById(href);
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	};

	return (
		<>
			<motion.nav
				className={`fixed w-full top-0 left-0 z-50 px-4 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-6'
					} flex justify-center`}
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ type: 'spring', stiffness: 300, damping: 30 }}
			>
				{/* Glow effect elements - only visible when scrolled */}
				{isScrolled && (
					<div className="absolute inset-0 pointer-events-none flex justify-center">
						<div
							className="absolute rounded-full opacity-70 blur-xl transition-all duration-300 w-1/3 h-full"
							style={{
								background: 'radial-gradient(circle, rgba(255,0,205,0.15) 0%, rgba(115,78,255,0.05) 70%, rgba(0,0,0,0) 100%)',
								left: `${mousePosition.x / 10}%`,
								top: '50%',
								transform: 'translateY(-50%)',
							}}
						></div>
					</div>
				)}

				<div className={`max-w-[575px] w-full transition-all duration-500 relative overflow-hidden ${isScrolled
					? 'bg-black/60 backdrop-blur-md shadow-[0_0_25px_rgba(255,0,205,0.3)] rounded-full border border-white/10 px-8'
					: 'bg-transparent px-4'
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

					{/* Desktop Navigation */}
					<div className="hidden md:flex justify-center items-center">
						<ul className={`flex items-center justify-center gap-10 ${isScrolled ? 'h-14' : 'h-16'
							} transition-all duration-300`}>
							{navLinks.map((link) => (
								<li key={link.id} className="cursor-pointer">
									<a
										href={`#${link.href}`}
										onClick={(e) => {
											handleClick(e, link.href);
											setActivePage(link.id);
										}}
										className={`text-white hover:text-[#FF00CD] relative font-medium text-sm group py-2`}
									>
										<span className={`relative z-10 transition-colors duration-300 ${activePage === link.id ? 'text-[#FF00CD]' : ''
											}`}>{link.name}</span>

										{/* Hover glow effect */}
										<span className="absolute inset-0 -z-10 rounded-md opacity-0 group-hover:opacity-100 bg-[#FF00CD]/10 blur-md transition-opacity duration-300"></span>

										{/* Active indicator - always visible but with shadow only when scrolled */}
										{/* {activePage === link.id && (
											<motion.span
												className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#FF00CD] to-[#734EFF] ${isScrolled ? 'shadow-[0_0_8px_rgba(255,0,205,0.6)]' : ''
													}`}
												layoutId="activeIndicator"
											/>
										)} */}
									</a>
								</li>
							))}
							<li className="ml-6">
								<motion.a
									href="https://gene-omega.vercel.app/"
									className="py-2.5 px-7 rounded-full bg-gradient-to-r from-[#FF00CD] to-[#734EFF] text-white font-medium text-sm relative overflow-hidden"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.98 }}
								>
									{/* Login button inner glow - always visible */}
									<span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#FF00CD]/0 via-white/20 to-[#734EFF]/0 blur-md"></span>
									<span className="relative z-10">Login</span>
								</motion.a>
							</li>
						</ul>
					</div>

					{/* Mobile Navigation */}
					<div className="md:hidden">
						<div className="flex items-center justify-between h-16">
							{/* Logo - visible only when scrolled or menu open */}
							<div className={`font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#FF00CD] to-[#734EFF] transition-opacity duration-300 ${isScrolled || isMenuOpen ? 'opacity-100' : 'opacity-0'
								}`}>
								GeneticX-Women
							</div>

							{/* Mobile menu button */}
							<motion.button
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								className={`w-10 h-10 flex items-center justify-center rounded-full ${isMenuOpen ? 'bg-gradient-to-r from-[#FF00CD]/20 to-[#734EFF]/20' :
									isScrolled ? 'bg-black/40' : 'bg-black/20 backdrop-blur-sm'
									} transition-colors duration-300`}
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

						{/* Mobile menu with background */}
						<motion.div
							className={`overflow-hidden px-2 ${isMenuOpen ? 'bg-black/80 backdrop-blur-md rounded-xl mt-2 border border-white/10' : ''
								}`}
							initial={{ height: 0 }}
							animate={{ height: isMenuOpen ? 'auto' : 0 }}
							transition={{ duration: 0.3 }}
						>
							<ul className="flex flex-col space-y-5 py-5">
								{navLinks.map((link) => (
									<li key={link.id} className="cursor-pointer">
										<a
											href={`#${link.href}`}
											onClick={(e) => {
												handleClick(e, link.href);
												setActivePage(link.id);
												setIsMenuOpen(false);
											}}
											className={`block py-2.5 text-center transition-all ${activePage === link.id
												? 'bg-clip-text text-transparent bg-gradient-to-r from-[#FF00CD] to-[#734EFF] font-medium'
												: 'text-white'
												}`}
										>
											{link.name}
										</a>
									</li>
								))}
								<li className="pt-3">
									<a
										href="https://gene-omega.vercel.app/"
										className="block py-3 px-7 mx-auto w-max rounded-full bg-gradient-to-r from-[#FF00CD] to-[#734EFF] text-white shadow-[0_0_15px_rgba(255,0,205,0.4)]"
									>
										Login
									</a>
								</li>
							</ul>
						</motion.div>
					</div>
				</div>
			</motion.nav>

			{/* Spacer to prevent content from being hidden behind fixed navbar */}
			<div className="h-28"></div>

			{/* Timestamp */}
			<div className="hidden">Last updated: 2025-03-04 05:18:47 | Created by Abhinavpreet-Singh</div>
		</>
	);
}

export default Navbar;