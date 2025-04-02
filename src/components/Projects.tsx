import { motion } from 'framer-motion';
import { ExternalLink, Github, Bot, Shield, Brain, FileCode } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: 'Intrusion Detection System (IDS)',
      description: 'A robust security solution designed to detect and prevent web application vulnerabilities in real time, leveraging machine learning algorithms and rule-based detection.',
      icon: Shield,
      tech: ['Python', 'Machine Learning', 'Web Security'],
      duration: '05/2024 - 11/2024'
    },
    {
      title: 'Learn.AI',
      description: 'An AI-Powered Interactive Learning Platform that enhances online learning engagement using artificial intelligence features that encourage active learning.',
      icon: Brain,
      tech: ['AI/ML', 'Python', 'Web Development'],
      duration: '02/2025 - 02/2025'
    },
    {
      title: 'AI Flashcards',
      description: 'Engineered an AI-based flashcard and question generator that enhanced study efficiency and achieved a 40% improvement in learning outcomes.',
      icon: Bot,
      tech: ['AI', 'Python', 'Education Tech'],
      duration: '12/2024 - 12/2024'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-neon-blue">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-cyber-black/50 p-6 rounded-lg border border-neon-blue/30 hover:border-neon-blue/60 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-neon-blue/10 rounded-lg">
                    <project.icon className="w-6 h-6 text-neon-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-neon-blue/10 text-neon-blue text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <FileCode className="w-4 h-4" />
                    {project.duration}
                  </span>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href="#"
                      className="p-2 hover:text-neon-blue transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="p-2 hover:text-neon-blue transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};