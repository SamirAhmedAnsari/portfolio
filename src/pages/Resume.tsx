import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, Briefcase, GraduationCap, Award, Mail, Phone, Linkedin } from 'lucide-react';

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Samir_Ahmed_Ansari_Resume.pdf';
    link.download = 'Samir_Ahmed_Ansari_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header Section */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <div className="text-center mb-6">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Samir Ahmed Ansari</h1>
              <p className="text-xl text-gray-600">Business Analyst & Data Analyst</p>
              <div className="flex flex-wrap justify-center items-center gap-6 mt-4">
                <a href="mailto:samirahmedansari10@gmail.com" className="flex items-center text-gray-600 hover:text-blue-600">
                  <Mail className="w-5 h-5 mr-2" />
                  samirahmedansari10@gmail.com
                </a>
                <a href="tel:+14695281161" className="flex items-center text-gray-600 hover:text-blue-600">
                  <Phone className="w-5 h-5 mr-2" />
                  +1 (469) 528-1161
                </a>
                <a href="https://www.linkedin.com/in/samirahmedansari10" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-gray-600 hover:text-blue-600">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <button
                onClick={handleDownload}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FileDown className="w-5 h-5 mr-2" />
                Download Resume
              </button>
            </div>
          </div>

          {/* Experience Section */}
          <section className="bg-white rounded-xl shadow-md p-8 mb-8">
            <div className="flex items-center mb-6">
              <Briefcase className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Professional Experience</h2>
            </div>
            
            <div className="border-l-2 border-blue-200 pl-6 ml-3">
              <div className="relative mb-8">
                <div className="absolute -left-[31px] w-4 h-4 bg-blue-600 rounded-full"></div>
                <h3 className="text-xl font-semibold text-gray-900">Business Analyst</h3>
                <p className="text-gray-600">L.H. Thomson Company, Inc. - Macon, GA</p>
                <p className="text-gray-500 mb-4">February 2024 – Present</p>
                <ul className="space-y-3 text-gray-600">
                  <li>• Automated MRP workflows using Excel, VBA, and SQL, reducing forecasting time by 75%</li>
                  <li>• Conducted cost analysis revealing 20% discrepancy in standard vs actual costs</li>
                  <li>• Developed KPIs and Power BI dashboards, improving productivity by 10%</li>
                  <li>• Optimized inventory management through data-driven forecasting</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="bg-white rounded-xl shadow-md p-8 mb-8">
            <div className="flex items-center mb-6">
              <GraduationCap className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Education</h2>
            </div>
            
            <div className="border-l-2 border-blue-200 pl-6 ml-3">
              <div className="relative mb-8">
                <div className="absolute -left-[31px] w-4 h-4 bg-blue-600 rounded-full"></div>
                <h3 className="text-xl font-semibold text-gray-900">Master of Science in Business Analytics</h3>
                <p className="text-gray-600">Texas A&M University-Commerce</p>
                <p className="text-gray-500">Graduated: August 2023</p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-[31px] w-4 h-4 bg-blue-600 rounded-full"></div>
                <h3 className="text-xl font-semibold text-gray-900">Bachelor of Science in Civil Engineering</h3>
                <p className="text-gray-600">Jawaharlal Nehru Technological University</p>
                <p className="text-gray-500">Graduated: October 2021</p>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center mb-6">
              <Award className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Key Skills</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Technical Skills</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Python (Pandas, NumPy, Scikit-learn)</li>
                  <li>• SQL & Database Management</li>
                  <li>• Power BI & Data Visualization</li>
                  <li>• Advanced Excel & VBA</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Business Skills</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Business Process Optimization</li>
                  <li>• Data Analysis & Forecasting</li>
                  <li>• Project Management</li>
                  <li>• Stakeholder Communication</li>
                </ul>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}