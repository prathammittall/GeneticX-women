import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiCheck, HiX } from 'react-icons/hi';

function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  
  // Pricing data
  const plans = [
    {
      name: "Free",
      price: {
        monthly: 0,
        annual: 0
      },
      description: "Basic access to genetic analysis tools",
      features: [
        { text: "Basic DNA analysis", included: true },
        { text: "3 health condition predictions", included: true },
        { text: "Basic risk assessment report", included: true },
        { text: "Email support", included: true },
        { text: "Personalized recommendations", included: false },
        { text: "Advanced mutation detection", included: false },
        { text: "Family history integration", included: false },
        { text: "Genetic counseling sessions", included: false }
      ],
      color: "#FF00CD",
      popular: false
    },
    {
      name: "Premium",
      price: {
        monthly: 29.99,
        annual: 19.99
      },
      description: "Complete genetic profile with personalized insights",
      features: [
        { text: "Advanced DNA analysis", included: true },
        { text: "All 28 health condition predictions", included: true },
        { text: "Comprehensive risk assessment", included: true },
        { text: "Priority 24/7 support", included: true },
        { text: "Personalized health recommendations", included: true },
        { text: "Advanced mutation detection", included: true },
        { text: "Family history integration", included: true },
        { text: "2 genetic counseling sessions per year", included: true }
      ],
      color: "#734EFF",
      popular: true
    }
    
  ];
  
  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#FF00CD]/10 blur-3xl"
          animate={{ 
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-[#734EFF]/10 blur-3xl"
          animate={{ 
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-[#FF00CD] to-[#734EFF] inline-block">
            Choose Your Plan
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10">
            Select the plan that best fits your needs and take control of your genetic health journey
          </p>
          
          {/* Toggle switch */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm ${isAnnual ? 'text-gray-400' : 'text-white'}`}>Monthly</span>
            
            <div 
              className="w-16 h-8 bg-gray-700 rounded-full p-1 cursor-pointer flex"
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <motion.div 
                className="w-6 h-6 bg-gradient-to-r from-[#FF00CD] to-[#734EFF] rounded-full"
                animate={{ x: isAnnual ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </div>
            
            <div className="flex items-center">
              <span className={`text-sm ${isAnnual ? 'text-white' : 'text-gray-400'}`}>Annual</span>
              <span className="ml-2 bg-[#FF00CD]/20 text-[#FF00CD] text-xs font-medium px-2 py-1 rounded-full">
                Save 33%
              </span>
            </div>
          </div>
        </motion.div>
        
        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`bg-black border border-white/10 rounded-xl overflow-hidden ${
                plan.popular ? 'md:-mt-5 md:mb-5' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -5,
                boxShadow: `0 10px 25px -5px ${plan.color}40` 
              }}
            >
              {/* {plan.popular && (
                <div className="bg-gradient-to-r from-[#FF00CD] to-[#734EFF] text-white text-center text-sm font-medium py-1">
                  MOST POPULAR
                </div>
              )} */}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6 h-12">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold">${isAnnual ? plan.price.annual : plan.price.monthly}</span>
                  {plan.price.monthly > 0 && (
                    <span className="text-gray-400 text-sm ml-2">
                      / {isAnnual ? 'mo (billed annually)' : 'month'}
                    </span>
                  )}
                </div>
                
                <motion.button 
                  className={`w-full py-3 px-4 rounded-lg font-medium mb-8 border transition-colors ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-[#FF00CD] to-[#734EFF] text-white border-transparent' 
                      : `bg-transparent hover:bg-white/5 text-white border-${plan.color} hover:border-${plan.color}`
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.name === "Free" ? <a href='https://gene-omega.vercel.app/'>Get Started</a> : <a href='https://gene-login-m2.vercel.app/'>Subscribe Now</a>}
                </motion.button>
                
                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      {feature.included ? (
                        <span className={`h-5 w-5 rounded-full flex items-center justify-center mr-3`} style={{backgroundColor: `${plan.color}30`}}>
                          <HiCheck className={`text-sm`} style={{color: plan.color}} />
                        </span>
                      ) : (
                        <span className="h-5 w-5 rounded-full flex items-center justify-center bg-gray-800 mr-3">
                          <HiX className="text-sm text-gray-500" />
                        </span>
                      )}
                      <span className={`text-sm ${feature.included ? 'text-gray-300' : 'text-gray-500'}`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional info */}
        <div className="mt-20 text-center">

          {/* Data protection note */}
          <div className="mt-8 flex items-center justify-center text-gray-400 text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Your genetic data is protected with industry-leading encryption and never shared without consent
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;