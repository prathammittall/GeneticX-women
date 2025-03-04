import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF00CD] to-[#734EFF]">
                GeneticX-Women
              </h2>
            </div>
            <p className="text-sm text-gray-300 mb-6">
              Pioneering DNA-based prediction technology for women's health, enabling early detection and personalized medicine.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#FF00CD] transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF00CD] transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF00CD] transition-colors">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF00CD] transition-colors">
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FF00CD] transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FF00CD] transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FF00CD] transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FF00CD] transition-colors text-sm">
                  Our Research
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FF00CD] transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FF00CD] transition-colors text-sm">
                  DNA Analysis
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FF00CD] transition-colors text-sm">
                  Risk Assessment
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FF00CD] transition-colors text-sm">
                  Mutation Detection
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FF00CD] transition-colors text-sm">
                  Personalized Reports
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FF00CD] transition-colors text-sm">
                  Genetic Counseling
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-300 mb-4">
              Have questions or need assistance? Reach out to our team.
            </p>
            <div className="flex items-center space-x-2 mb-2">
              <HiMail className="text-[#FF00CD]" />
              <a href="mailto:info@geneticx-women.com" className="text-gray-300 hover:text-[#FF00CD] transition-colors text-sm">
                info@geneticx-women.com
              </a>
            </div>
            <div className="mt-5">
              <button className="px-4 py-2 bg-gradient-to-r from-[#FF00CD] to-[#734EFF] rounded-md text-white text-sm hover:shadow-lg hover:shadow-[#FF00CD]/20 transition-all">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} GeneticX-Women. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0 flex space-x-6">
            <a href="#" className="text-xs text-gray-400 hover:text-[#FF00CD] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-gray-400 hover:text-[#FF00CD] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-gray-400 hover:text-[#FF00CD] transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;