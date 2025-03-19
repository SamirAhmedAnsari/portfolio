import React from 'react';
import { motion } from 'framer-motion';
import { Code2, BarChart3, Database, FileSpreadsheet } from 'lucide-react';
import Button from '../components/Button';

interface ProjectCardProps {
  title: string;
  description: string;
  approach: string;
  tools: string[];
  outcome: string;
  icon: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  approach,
  tools,
  outcome,
  icon,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
  >
    <div className="flex items-center mb-4">
      <div className="p-2 bg-blue-100 rounded-lg mr-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
    </div>
    <div className="space-y-4">
      <div>
        <h4 className="font-semibold text-gray-700 mb-2">Challenge</h4>
        <p className="text-gray-600">{description}</p>
      </div>
      <div>
        <h4 className="font-semibold text-gray-700 mb-2">Approach</h4>
        <p className="text-gray-600">{approach}</p>
      </div>
      <div>
        <h4 className="font-semibold text-gray-700 mb-2">Tools Used</h4>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-gray-700 mb-2">Outcome</h4>
        <p className="text-gray-600">{outcome}</p>
      </div>
    </div>
  </motion.div>
);

const projects = [
  {
    title: "MRP Workflow Automation",
    description: "Manual forecasting process taking two months to complete, causing delays in production planning.",
    approach: "Developed automated workflows using Excel VBA and SQL to streamline the MRP process. Implemented data validation and error handling.",
    tools: ["Excel VBA", "SQL", "Global Shop Solutions ERP"],
    outcome: "Reduced forecasting time from two months to one week, improving production efficiency.",
    icon: <FileSpreadsheet className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Sales Analytics Dashboard",
    description: "Need for real-time sales performance tracking and trend analysis.",
    approach: "Created interactive Power BI dashboards with drill-down capabilities and automated data refresh.",
    tools: ["Power BI", "DAX", "SQL"],
    outcome: "Enabled data-driven decision making and improved sales strategy planning.",
    icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Cost Analysis System",
    description: "Discrepancies between standard and actual costs affecting pricing decisions.",
    approach: "Developed Python scripts to analyze historical cost data and identify patterns.",
    tools: ["Python", "Pandas", "NumPy", "Matplotlib"],
    outcome: "Identified 20% cost discrepancy, leading to improved price negotiations.",
    icon: <Code2 className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Inventory Optimization",
    description: "Excess inventory leading to increased holding costs.",
    approach: "Created SQL queries and reports to analyze inventory turnover and implement JIT system.",
    tools: ["SQL", "Excel", "Power BI"],
    outcome: "Reduced excess inventory while maintaining production efficiency.",
    icon: <Database className="w-6 h-6 text-blue-600" />,
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
            <p className="text-xl text-gray-600">
              A showcase of my work in process automation, data analysis, and business optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="/contact" variant="primary">
              Discuss Your Project
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}