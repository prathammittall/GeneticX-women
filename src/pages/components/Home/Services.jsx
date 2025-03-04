import { motion } from "framer-motion";
import { useState } from "react";

export default function Services() {
	const [hoveredIndex, setHoveredIndex] = useState(null);
	
	return (
		<motion.div 
			className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8 }}
		>
			{/* Simple decorative background */}
			<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
				<motion.div 
					className="absolute top-10 right-10 w-64 h-64 rounded-full bg-[#FF00CD]/10 blur-3xl"
					animate={{ opacity: [0.2, 0.4, 0.2] }}
					transition={{ duration: 8, repeat: Infinity }}
				/>
				<motion.div 
					className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-[#734EFF]/10 blur-3xl"
					animate={{ opacity: [0.2, 0.4, 0.2] }}
					transition={{ duration: 10, repeat: Infinity }}
				/>
			</div>
			
			<div className="text-center relative z-10 mb-12">
				<motion.h2 
					className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF00CD] to-[#734EFF] inline-block"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					Our Services
				</motion.h2>
				<motion.p 
					className="text-gray-300 mt-4 max-w-2xl mx-auto text-base sm:text-lg"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.6 }}
				>
					Unlock the full potential of GeneticX with exceptional features and unmatched performance.
				</motion.p>
			</div>
			
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
					{services.map((service, index) => (
						<motion.div 
							key={index}
							className="relative"
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							{/* Card background with simpler effect */}
							<div className="absolute inset-0 bg-gradient-to-r from-[#FF00CD]/50 to-[#734EFF]/50 rounded-lg blur-sm opacity-50" />
							
							<div className="h-full bg-black border border-gray-800 rounded-lg p-6 relative z-10">
								<div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
									{/* Icon container - simplified */}
									<div 
										className={`flex items-center justify-center w-16 h-16 rounded-full mb-4 sm:mb-0 sm:mr-5
                    ${index % 2 === 0 ? 'bg-[#FF00CD]/10' : 'bg-[#734EFF]/10'}`}
									>
										<span className={`text-3xl ${service.color}`}>
											{service.icon}
										</span>
									</div>
									
									<div className="flex-1">
										{/* Title */}
										<h3 className="text-xl font-bold text-white mb-2">
											{service.title}
										</h3>
										
										{/* Simple divider */}
										<div className="w-12 h-0.5 bg-gradient-to-r from-[#FF00CD] to-[#734EFF] rounded-full mb-3 hidden sm:block" />
										
										{/* Description */}
										<p className="text-gray-300 text-sm sm:text-base">
											{service.description}
										</p>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
			
			{/* Simplified CTA */}
			<motion.div 
				className="mt-12 text-center"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<motion.button 
					className="px-8 py-3 bg-gradient-to-r from-[#FF00CD] to-[#734EFF] rounded-full text-lg font-bold hover:shadow-lg hover:shadow-[#FF00CD]/30 transition duration-300"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.98 }}
				>
					Explore All Services
				</motion.button>
			</motion.div>
		</motion.div>
	);
}

const services = [
	{ 
		icon: "✨", 
		title: "DNA Analysis", 
		description: "In-depth examination of your genetic sequences using our proprietary algorithms for unprecedented insights into your biological makeup.", 
		color: "text-[#FF00CD]" 
	},
	{ 
		icon: "🛡️", 
		title: "Risk Assessment", 
		description: "Advanced evaluation of your genetic susceptibility to various diseases with proactive recommendations for prevention and monitoring.", 
		color: "text-[#734EFF]" 
	},
	{ 
		icon: "✔️", 
		title: "Mutation Detection", 
		description: "AI-powered mutation detection and analysis technology that precisely identifies genetic variations and assesses their potential impact.", 
		color: "text-[#FF00CD]" 
	},
	{ 
		icon: "📄", 
		title: "Personalized Reports", 
		description: "Comprehensive reports with detailed insights into your DNA profile, health risks, and recommendations customized to your genetic makeup.", 
		color: "text-[#734EFF]" 
	}
];