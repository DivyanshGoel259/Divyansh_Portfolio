import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import biopay from "../../assets/projects/biopay.png";
import CFB from "../../assets/projects/CFB.png";
import TechMasters from "../../assets/projects/Tech-Masters.png";
import Instant from "../../assets/projects/Instant.png";
import JoeDealAgent from "../../assets/projects/Joe-Deal-Agent.png";

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Code-For-Bharat',
      description: 'A hackathon website made using Next.js and Tailwind-CSS got over 10k+ registrations and hosted on .xyz domain (Organized by Me 😉).',
      image: CFB, // replace with actual image path
      technologies: ['Next.js', 'Tailwind CSS'],
      category: 'frontend',
      github: 'https://github.com/advay77/Code-For-Bharat',
      live: 'https://www.codeforbharat.xyz/'
    },
    {
      title: 'Bio-Pay',
      description: 'A biometric payment system that uses palm recognition to authenticate users and process transactions. It ensures secure and convenient payments by eliminating the need for physical cards or cash.',
      image: biopay, // replace with actual image path
      technologies: ['Next.js', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
      category: 'fullstack',
      github: 'https://github.com/advay77/bio-pay-connect',
      live: 'https://bio-pay-connect.vercel.app/'
    },
    {
      title: 'Tech-Masters',
      description: 'A platform for tech enthusiasts to connect, share knowledge, and collaborate on projects. My community which conducts hackathons and events to foster innovation and learning in the tech space. Conducted 3+ national level hackathons with over 10k+ registrations.',
      image: TechMasters, // replace with actual image path
      technologies: ['Next.js', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
      category: 'frontend',
      github: 'https://github.com/advay77/techmasters',
      live: 'https://techmasters-rouge.vercel.app/'
    },
    {
      title: 'Instant-Care',
      description: 'A healthcare platform that connects patients with doctors for instant consultations. It provides a seamless experience for booking appointments, accessing medical advice, and managing health records through Ayurveda and Allopathy.',
      image:Instant, // replace with actual image path
      technologies: ['Next.js', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
      category: 'fullstack',
      github: 'https://github.com/advay77/Instant-Care',
      live: 'https://instant-care-tau.vercel.app/'
    },
    {
      title: 'Joe-Deal-Agent',
      description: 'A personal AI agent that helps users find the best deals on products and services. It uses advanced algorithms to analyze user preferences.',
      image: JoeDealAgent, // replace with actual image path
      technologies: ['Next.js', 'Tailwind CSS', 'Firebase', 'AI API'],
      category: 'fullstack',
      github: 'https://github.com/advay77/JOE-DEAL-AGENT-',
      live: 'https://joe-deal-agent.vercel.app/'
    },
    {
      title: 'Scrum',
      description: 'Enterprise-grade project management platform integrating JIRA-like workflows, JWT-based RBAC authentication, and robust state management using Context API and useReducer.',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'PostgreSQL', 'Node.js', 'TypeScript', 'JWT', 'Express.js'],
      category: 'fullstack',
      github: 'https://github.com',
      live:"example.com"
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            A showcase of my recent work and personal projects
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${filter === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-2">
                  <Filter size={16} />
                  {category.label}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${filter}-${index}`}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-gray-800/70 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800/80 backdrop-blur-sm rounded-full text-white hover:bg-gray-700 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={18} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-600/80 backdrop-blur-sm rounded-full text-white hover:bg-blue-500 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700/50 text-blue-400 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;