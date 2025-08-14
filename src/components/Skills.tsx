import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 92 },
        { name: 'C/C++', level: 75 },
        { name: 'SQL (PostgreSQL)', level: 88 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Python', level: 70 }
      ],
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Frameworks',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 92 },
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 90 }
      ],
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'Developer Tools',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Docker', level: 85 },
        { name: 'Google Cloud Platform', level: 80 },
        { name: 'VS Code', level: 95 },
        { name: 'Supabase', level: 85 },
        { name: 'Zapier', level: 70 },
        { name: 'Cursor', level: 88 }
      ],
      color: 'from-emerald-400 to-emerald-600'
    },
    {
      title: 'Libraries & Tech',
      skills: [
        { name: 'Redis', level: 78 },
        { name: 'WebSockets', level: 90 },
        { name: 'Server‑Sent Events', level: 70 },
        { name: 'JWT', level: 82 },
        { name: 'Clerk', level: 82 },
        { name: 'oAuth', level: 82 }
      ],
      color: 'from-pink-400 to-pink-600'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
            >
              <motion.h3
                className={`text-2xl font-bold mb-8 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                whileHover={{ scale: 1.05 }}
              >
                {category.title}
              </motion.h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>

                    <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) + 0.3, ease: 'easeOut' }}
                        viewport={{ once: true }}
                      />

                      {/* Animated shimmer effect */}
                      <motion.div
                        className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: '-100%' }}
                        whileInView={{ x: '100%' }}
                        transition={{
                          duration: 1.5,
                          delay: (categoryIndex * 0.1) + (skillIndex * 0.1) + 0.8,
                          ease: 'easeInOut'
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;