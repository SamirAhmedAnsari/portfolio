import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Target } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
          <p className="text-lg text-gray-600 mb-12">
            I am a quick learner, detail-oriented professional, and passionate about growing as a data-driven problem solver. 
            My unique combination of technical skills and business acumen allows me to bridge the gap between data and decision-making.
          </p>

          {/* Education Section */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <GraduationCap className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Education</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900">Master of Science in Business Analytics</h3>
                <p className="text-gray-600">Texas A&M University-Commerce</p>
                <p className="text-gray-500">Graduated: August 2023</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900">Bachelor of Science in Civil Engineering</h3>
                <p className="text-gray-600">Jawaharlal Nehru Technological University, Hyderabad, India</p>
                <p className="text-gray-500">Graduated: October 2021</p>
              </div>
            </div>
          </section>

          {/* Work Experience Section */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Briefcase className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Work Experience</h2>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Business Analyst</h3>
              <p className="text-gray-600">L.H. Thomson Company, Inc. - Macon, GA</p>
              <p className="text-gray-500">February 2024 – Present</p>
              <ul className="mt-4 space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Automated Material Requirements Planning (MRP) workflows using Excel, VBA, and SQL — reducing forecasting time from two months to one week
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Conducted cost analysis, uncovering a 20% discrepancy between standard and actual costs, which helped in price negotiations
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Developed key performance indicators (KPIs) using Excel and Power BI, boosting productivity by 10%
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Created automated Power BI dashboards to track sales trends and operations
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Utilized historical sales data to enhance forecasting, reduce excess inventory, and improve production planning
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Collaborated across departments to optimize production control and reduce lead times
                </li>
              </ul>
            </div>
          </section>

          {/* Career Goals Section */}
          <section>
            <div className="flex items-center mb-6">
              <Target className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Career Goals</h2>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600">
                My goal is to continue growing as a data-driven business analyst, leveraging technology 
                and analytics to solve complex business challenges. I aim to lead digital transformation 
                initiatives and help organizations make better, data-informed decisions that drive 
                growth and efficiency.
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}