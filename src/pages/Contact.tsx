import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Linkedin, Send } from 'lucide-react';
import Button from '../components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be implemented later
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Get in Touch</h1>
          
          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="tel:+14695281161" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Phone className="w-6 h-6 text-blue-600 mb-3" />
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Phone</h2>
              <p className="text-gray-600 break-words">+1 (469) 528-1161</p>
            </a>
            
            <a href="mailto:samirahmedansari10@gmail.com" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Mail className="w-6 h-6 text-blue-600 mb-3" />
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Email</h2>
              <p className="text-gray-600 break-words">samirahmedansari10@gmail.com</p>
            </a>
            
            <a href="https://www.linkedin.com/in/samirahmedansari10" target="_blank" rel="noopener noreferrer" 
               className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Linkedin className="w-6 h-6 text-blue-600 mb-3" />
              <h2 className="text-lg font-semibold text-gray-900 mb-2">LinkedIn</h2>
              <p className="text-gray-600">Connect with me</p>
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send me a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              
              <Button type="submit" variant="primary" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}