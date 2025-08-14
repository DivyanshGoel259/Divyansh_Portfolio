import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Vanna Protocol — vanna.finance',
      location: 'Remote',
      period: 'Aug 18, 2025 – Present',
      description: [
        'Implemented real-time WebSocket integration for live cryptocurrency ticker data with low-latency streaming',
        'Integrated Supabase backend services and authentication systems for scalable database operations',
        'Developed Privy and Magic Link authentication flows for seamless user onboarding and session management',
        'Built custom on-chain wallet management solutions with manual implementation for blockchain connectivity',
        'Designed and developed responsive React.js and Next.js UI components for enhanced user experience',
        'Collaborated in distributed development environment using GitHub for version control and code reviews',
        'Deployed production applications on cloud platforms including Vercel, Render, Hostinger, AWS'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'WebSockets', 'Supabase', 'Privy', 'Magic Link',"Wagmi","Ether.js","Web3React",'RainbowKit']
    },
    {
      title: 'Full Stack Developer',
      company: 'Techmasters India — techmastersindia.in',
      location: 'Remote',
      period: 'May 2025 – Aug 15, 2025',
      description: [
        'Architected and implemented REST API for enterprise-grade event management system',
        'Engineered full-stack web applications with modern development practices',
        'Collaborated in cross-functional development teams using Git-based workflows and agile methodologies',
        'Deployed production applications on cloud platforms including Vercel and Render'
      ],
      technologies: ['React','Next.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Vercel', 'Render']
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey and the amazing teams I've worked with
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-500 to-emerald-400 transform md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full transform md:-translate-x-1/2 z-10"></div>

              {/* Content card */}
              <motion.div
                className={`ml-16 md:ml-0 ${index % 2 === 0
                    ? 'md:mr-auto md:pr-12 md:w-1/2'
                    : 'md:ml-auto md:pl-12 md:w-1/2'
                  }`}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <div className="flex items-center text-blue-400 font-medium mb-1">
                        <Briefcase size={16} className="mr-2" />
                        {exp.company}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm mb-1">
                        <MapPin size={14} className="mr-2" />
                        {exp.location}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar size={14} className="mr-2" />
                        {exp.period}
                      </div>
                    </div>
                  </div>

                  <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-gray-700 text-blue-400 rounded-full text-sm font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ backgroundColor: '#374151', scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;