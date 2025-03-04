import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiDatabase, HiUserGroup, HiCheckCircle, HiViewList } from 'react-icons/hi';

function Stats() {
  // Animation variants for the counter
  const [counts, setCounts] = useState({
    analyses: 0,
    users: 0,
    accuracy: 0,
    conditions: 0
  });

  // Target values for the counters
  const targetCounts = {
    analyses: 50000,
    users: 25000,
    accuracy: 99,
    conditions: 28
  };

  // Counter animation effect
  useEffect(() => {
    const duration = 2000; // 2 seconds for the count animation
    const frameRate = 50; // Update every 20ms
    const framesTotal = duration / (1000 / frameRate);
    
    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      const progress = Math.min(frame / framesTotal, 1);
      
      setCounts({
        analyses: Math.floor(progress * targetCounts.analyses),
        users: Math.floor(progress * targetCounts.users),
        accuracy: Math.floor(progress * targetCounts.accuracy),
        conditions: Math.floor(progress * targetCounts.conditions)
      });
      
      if (frame === framesTotal) {
        clearInterval(interval);
      }
    }, 1000 / frameRate);
    
    return () => clearInterval(interval);
  }, []);

  // Format large numbers with commas
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-40 right-10 w-72 h-72 rounded-full bg-[#FF00CD]/5 blur-3xl"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-[#734EFF]/5 blur-3xl"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
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
            GeneticX-Women Impact
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our platform is revolutionizing women's healthcare through data-driven genetic analysis and early detection
          </p>
        </motion.div>
        
        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4 md:px-10">
          {/* DNA Analyses Stat */}
          <motion.div 
            className="bg-black border border-white/10 rounded-xl p-8 flex flex-col items-center relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ boxShadow: "0 0 20px rgba(255, 0, 205, 0.2)", y: -5 }}
          >
            <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-[#FF00CD]/10 blur-xl" />
            
            <div className="flex justify-center items-center mb-5">
              <div className="w-14 h-14 bg-[#FF00CD]/10 rounded-full flex items-center justify-center">
                <HiDatabase className="text-2xl text-[#FF00CD]" />
              </div>
            </div>
            
            <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
              {formatNumber(counts.analyses)}+
            </div>
            <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">DNA ANALYSES</div>
            <div className="w-12 h-1 bg-[#FF00CD]" />
          </motion.div>
          
          {/* Registered Users Stat */}
          <motion.div 
            className="bg-black border border-white/10 rounded-xl p-8 flex flex-col items-center relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ boxShadow: "0 0 20px rgba(115, 78, 255, 0.2)", y: -5 }}
          >
            <div className="absolute -left-8 -bottom-8 w-24 h-24 rounded-full bg-[#734EFF]/10 blur-xl" />
            
            <div className="flex justify-center items-center mb-5">
              <div className="w-14 h-14 bg-[#734EFF]/10 rounded-full flex items-center justify-center">
                <HiUserGroup className="text-2xl text-[#734EFF]" />
              </div>
            </div>
            
            <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
              {formatNumber(counts.users)}+
            </div>
            <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">USERS WORLDWIDE</div>
            <div className="w-12 h-1 bg-[#734EFF]" />
          </motion.div>
          
          {/* Prediction Accuracy Stat */}
          <motion.div 
            className="bg-black border border-white/10 rounded-xl p-8 flex flex-col items-center relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ boxShadow: "0 0 20px rgba(255, 0, 205, 0.2)", y: -5 }}
          >
            <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-[#FF00CD]/10 blur-xl" />
            
            <div className="flex justify-center items-center mb-5">
              <div className="w-14 h-14 bg-[#FF00CD]/10 rounded-full flex items-center justify-center">
                <HiCheckCircle className="text-2xl text-[#FF00CD]" />
              </div>
            </div>
            
            <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
              {counts.accuracy}%
            </div>
            <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">PREDICTION ACCURACY</div>
            <div className="w-12 h-1 bg-[#FF00CD]" />
          </motion.div>
          
          {/* Detectable Conditions Stat */}
          <motion.div 
            className="bg-black border border-white/10 rounded-xl p-8 flex flex-col items-center relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ boxShadow: "0 0 20px rgba(115, 78, 255, 0.2)", y: -5 }}
          >
            <div className="absolute -left-8 -top-8 w-24 h-24 rounded-full bg-[#734EFF]/10 blur-xl" />
            
            <div className="flex justify-center items-center mb-5">
              <div className="w-14 h-14 bg-[#734EFF]/10 rounded-full flex items-center justify-center">
                <HiViewList className="text-2xl text-[#734EFF]" />
              </div>
            </div>
            
            <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
              {counts.conditions}
            </div>
            <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">HEALTH CONDITIONS</div>
            <div className="w-12 h-1 bg-[#734EFF]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Stats;