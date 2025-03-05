import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';

function Team() {
    // Team members data with random names and no images
    const teamMembers = [
        {
            name: "Pratham Mittal",
            role: "Team Lead",
            bio: "",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/pratham-mittal-057420324/",
                twitter: "",
                github: "https://github.com/prathammittall"
            }
        },
        {
            name: "Dhruv K Aggarwal",
            role: "AI/ML Specialist",
            bio: "",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/dhruv-kumar-aggarwal/",
                twitter: "",
                github: "https://github.com/dhruv-kaggarwal"
            }
        },
        {
            name: "Yamini Baluni",
            role: "Medical Specialist",
            bio: "",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/yamini-baluni-49985b320/",
                github: "https://github.com/yamini-baluni"
            }
        },
        {
            name: "Yashika Budhiraja",
            role: "UI/UX Designer",
            bio: "",
            socialLinks: {
                linkedin: "#",
                github: "#"
            }
        }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section id="team" className="py-32 bg-black text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-40 right-10 w-72 h-72 rounded-full bg-[#FF00CD]/5 blur-3xl"></div>
                <div className="absolute -bottom-20 left-20 w-96 h-96 rounded-full bg-[#734EFF]/5 blur-3xl"></div>
                <div className="absolute top-1/3 left-1/3 w-48 h-48 rounded-full bg-gradient-to-br from-[#FF00CD]/5 to-[#734EFF]/5 blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-4xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-[#FF00CD] to-[#734EFF] inline-block">
                        Meet Our Team
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        The visionaries and experts behind GeneticX-Women, dedicated to revolutionizing women's health through genetic innovation
                    </p>
                </motion.div>

                {/* Team grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5, transition: { duration: 0.3 } }}
                            className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden h-full flex flex-col"
                        >
                            {/* Icon placeholder instead of image */}
                            <div className="py-8 flex justify-center items-center bg-gradient-to-r from-[#FF00CD]/10 to-[#734EFF]/10">
                                <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${index % 2 === 0 ? 'from-[#FF00CD]/20 to-[#734EFF]/20' : 'from-[#734EFF]/20 to-[#FF00CD]/20'
                                    } flex items-center justify-center`}>
                                    <span className="text-4xl font-bold text-white">{member.name[0]}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-grow flex flex-col">
                                <h3 className="text-xl font-bold mb-1 text-white text-center">{member.name}</h3>
                                <p className="text-sm font-medium mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#FF00CD] to-[#734EFF] text-center">
                                    {member.role}
                                </p>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {member.bio}
                                </p>

                                {/* Social media links */}
                                <div className="flex justify-center space-x-3 mt-auto">
                                    {member.socialLinks.linkedin && (
                                        <a
                                            href={member.socialLinks.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center backdrop-blur-sm hover:bg-[#FF00CD]/80 transition-colors"
                                        >
                                            <FaLinkedinIn className="text-white" />
                                        </a>
                                    )}
                                    {member.socialLinks.twitter && (
                                        <a
                                            href={member.socialLinks.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center backdrop-blur-sm hover:bg-[#FF00CD]/80 transition-colors"
                                        >
                                            <FaTwitter className="text-white" />
                                        </a>
                                    )}
                                    {member.socialLinks.github && (
                                        <a
                                            href={member.socialLinks.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center backdrop-blur-sm hover:bg-[#734EFF]/80 transition-colors"
                                        >
                                            <FaGithub className="text-white" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Decorative line at bottom */}
                            <div className="h-1 w-full bg-gradient-to-r from-[#FF00CD] to-[#734EFF]"></div>
                        </motion.div>
                    ))}
                </motion.div>


            </div>
        </section>
    );
}

export default Team;