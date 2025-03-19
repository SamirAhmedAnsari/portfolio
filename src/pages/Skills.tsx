import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  BarChart3,
  Database,
  FileSpreadsheet,
  TrendingUp,
  Factory,
  Settings,
  Brain,
} from 'lucide-react';

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
  description: string;
  proficiency: number;
}

const SkillCard: React.FC<SkillCardProps> = ({
  icon,
  name,
  description,
  proficiency,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all"
  >
    <div className="flex items-center mb-4">
      <div className="p-2 bg-blue-50 rounded-lg mr-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900">{name}</h3>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-blue-600 h-2 rounded-full"
        style={{ width: `${proficiency}%` }}
      />
    </div>
  </motion.div>
);

const skills = [
  {
    icon: <Code2 className="w-6 h-6 text-blue-600" />,
    name: "Python",
    description: "Data analysis, automation scripts, and predictive modeling using pandas, NumPy, and scikit-learn.",
    proficiency: 90,
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
    name: "Power BI",
    description: "Creating interactive dashboards, data modeling, and DAX calculations for business insights.",
    proficiency: 95,
  },
  {
    icon: <Database className="w-6 h-6 text-blue-600" />,
    name: "SQL",
    description: "Complex queries, data manipulation, and database management for analysis and reporting.",
    proficiency: 85,
  },
  {
    icon: <FileSpreadsheet className="w-6 h-6 text-blue-600" />,
    name: "Excel (Advanced)",
    description: "VBA automation, complex formulas, pivot tables, and data processing for business solutions.",
    proficiency: 95,
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
    name: "Forecasting & Analysis",
    description: "Statistical analysis, trend identification, and predictive modeling for business planning.",
    proficiency: 90,
  },
  {
    icon: <Factory className="w-6 h-6 text-blue-600" />,
    name: "ERP/MRP Systems",
    description: "Global Shop Solutions expertise for supply chain and inventory management.",
    proficiency: 85,
  },
  {
    icon: <Settings className="w-6 h-6 text-blue-600" />,
    name: "Process Optimization",
    description: "Workflow automation and efficiency improvement through data-driven solutions.",
    proficiency: 90,
  },
  {
    icon: <Brain className="w-6 h-6 text-blue-600" />,
    name: "Business Analysis",
    description: "Requirements gathering, stakeholder management, and solution design.",
    proficiency: 95,
  },
];

export default function Skills() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h1>
            <p className="text-xl text-gray-600">
              A comprehensive overview of my technical and analytical capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}