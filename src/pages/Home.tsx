import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, FolderKanban, Mail } from 'lucide-react';
import Button from '../components/Button';

export default function Home() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 md:py-28 flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-blue-100"
          >
            <img
              src="https://i.imgur.com/lQSHUBR.jpeg" // Note: Please replace with actual hosted image URL
              alt="Samir Ahmed Ansari"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Hi, I'm <span className="text-blue-600">Samir</span> Ahmed Ansari
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A Business Analyst and Data Analyst passionate about transforming data into insights
              that drive efficiency and business growth. With expertise in Python, Power BI, SQL,
              and Excel, I help organizations streamline processes, optimize forecasts, and make
              better decisions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button href="/projects" variant="primary">
                <FolderKanban className="mr-2" />
                View My Projects
              </Button>
              <Button href="/resume" variant="outline">
                <FileDown className="mr-2" />
                Download Resume
              </Button>
              <Button href="/contact" variant="secondary">
                <Mail className="mr-2" />
                Contact Me
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}