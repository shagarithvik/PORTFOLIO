import { motion } from 'framer-motion';
import { Shield, Terminal, Database, Lock, Github, Linkedin } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto w-32 h-32 rounded-full overflow-hidden neon-border"
          >
            <img
              src="https://raw.githubusercontent.com/shagarithvik/rfinal/main/1714152661097.jpeg"
              alt="Rithvik Shaga"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-6xl font-bold text-white mb-4"
            >
              Rithvik Shaga
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl sm:text-2xl text-gray-400"
            >
              Cybersecurity Specialist & AI Enthusiast
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4 text-sm"
          >
            {[
              { icon: Shield, text: 'Cybersecurity' },
              { icon: Terminal, text: 'Ethical Hacking' },
              { icon: Database, text: 'AI Web Stack' },
              { icon: Lock, text: 'System Security' },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 px-4 py-2 bg-cyber-black/50 rounded-full border border-neon-blue/30"
              >
                <item.icon className="h-4 w-4 text-neon-blue" />
                <span className="text-gray-300">{item.text}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/rithvik-shaga-9a0b43177/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-[#0077B5] text-white font-semibold rounded-lg hover:bg-[#0077B5]/90 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/shagarithvik"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-[#333] text-white font-semibold rounded-lg hover:bg-[#333]/90 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
            </div>
            <a
              href="#projects"
              className="flex items-center space-x-2 px-6 py-3 border border-neon-blue text-neon-blue rounded-lg hover:bg-neon-blue/10 transition-colors"
            >
              <Terminal className="h-5 w-5" />
              <span>View Projects</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
