import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const faqs = [
    {
      "question": "What is GeneticX-Women?",
      "answer": "GeneticX-Women is an AI-powered platform that analyzes DNA sequences to predict and detect potential health issues specific to women, including breast cancer, PCOS, endometriosis, and genetic disorders like Turner syndrome. Our technology enables early detection of genetic predispositions, empowering women to make proactive health decisions before symptoms appear."
    },
    {
      "question": "How does GeneticX-Women improve women's healthcare?",
      "answer": "GeneticX-Women leverages advanced AI and machine learning models to analyze genetic data with unprecedented accuracy. By identifying mutations and genetic markers associated with women's health conditions at an early stage, we enable preventive care approaches that can significantly improve treatment outcomes and reduce healthcare costs."
    },
    {
      "question": "What types of health conditions can GeneticX-Women predict?",
      "answer": "Our platform focuses on women-specific health conditions including breast cancer, ovarian cancer, polycystic ovary syndrome (PCOS), endometriosis, osteoporosis, and genetic disorders like Turner syndrome. We continuously expand our prediction capabilities as more genetic research becomes available."
    },
    {
      "question": "How do I submit my DNA for analysis?",
      "answer": "GeneticX-Women accepts DNA samples in FASTA or ATGC format. You can upload existing genetic data from services like 23andMe or Ancestry, or request our home testing kit. All data is processed with industry-leading encryption and privacy measures to ensure the security of your genetic information."
    },
    {
      "question": "Is GeneticX-Women accessible to everyone?",
      "answer": "GeneticX-Women offers a free basic analysis that includes essential genetic risk assessments. Our premium plans provide deeper insights, personalized health recommendations, genetic counseling sessions, and ongoing monitoring of genetic research relevant to your specific DNA profile."
    }
  ];
  
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#FF00CD]/10 blur-3xl"
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#734EFF]/10 blur-3xl"
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-5 bg-gradient-to-r from-[#FF00CD] to-[#734EFF] text-transparent bg-clip-text inline-block">
            Frequently Asked Questions
          </h2>
          <p className="text-white/80">
            Learn more about our DNA-based women's health prediction platform
          </p>
        </motion.div>
        
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-white/10 rounded-lg overflow-hidden"
            >
              <motion.div
                whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
                transition={{ duration: 0.2 }}
                className={`p-5 cursor-pointer flex justify-between items-center ${
                  openIndex === index ? "border-b border-white/10" : ""
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <h3 className={`text-lg font-medium pr-4 ${
                  openIndex === index ? "text-[#FF00CD]" : "text-white"
                }`}>
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ 
                    rotate: openIndex === index ? 180 : 0,
                    backgroundColor: openIndex === index ? "#FF00CD" : "transparent"
                  }}
                  transition={{ duration: 0.3 }}
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    openIndex === index ? "text-white" : "text-[#734EFF]"
                  }`}
                >
                  <FaChevronDown size={14} />
                </motion.div>
              </motion.div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 py-4 text-white/70 bg-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Simple CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <div className="p-6 border border-white/10 rounded-xl bg-gradient-to-br from-black to-black/70">
            <p className="text-white/80 mb-4">
              Ready to discover your genetic health profile?
            </p>
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-[#FF00CD] to-[#734EFF] text-white font-medium px-8 py-3 rounded-md"
            >
              Upload Your DNA Sample
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;