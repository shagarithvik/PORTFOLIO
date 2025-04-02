import { motion } from 'framer-motion';
import { Code, Shield, Brain, Terminal } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-neon-blue">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-cyber-black/50 p-6 rounded-lg border border-neon-blue/30"
            >
              <div className="prose prose-invert">
                <p className="text-gray-300 leading-relaxed mb-6">
                  I am a passionate Cybersecurity specialist and AI enthusiast with a strong foundation in computer science and a deep interest in securing digital systems. Currently pursuing my education in Cyber Security at Sreenidhi Institute of Science and Technology, I combine theoretical knowledge with practical experience in various security domains.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  My expertise spans across web application security, penetration testing, and artificial intelligence applications in cybersecurity. I'm particularly interested in developing innovative solutions that bridge the gap between advanced security measures and user-friendly implementations.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-cyber-black/50 p-6 rounded-lg border border-neon-blue/30 flex flex-col items-center text-center">
                <Shield className="w-8 h-8 text-neon-blue mb-2" />
                <h3 className="text-white font-semibold mb-2">Security</h3>
                <p className="text-gray-400 text-sm">Expert in cybersecurity and system protection</p>
              </div>
              <div className="bg-cyber-black/50 p-6 rounded-lg border border-neon-blue/30 flex flex-col items-center text-center">
                <Brain className="w-8 h-8 text-neon-blue mb-2" />
                <h3 className="text-white font-semibold mb-2">AI/ML</h3>
                <p className="text-gray-400 text-sm">Passionate about AI applications in security</p>
              </div>
              <div className="bg-cyber-black/50 p-6 rounded-lg border border-neon-blue/30 flex flex-col items-center text-center">
                <Code className="w-8 h-8 text-neon-blue mb-2" />
                <h3 className="text-white font-semibold mb-2">Development</h3>
                <p className="text-gray-400 text-sm">Full-stack development with security focus</p>
              </div>
              <div className="bg-cyber-black/50 p-6 rounded-lg border border-neon-blue/30 flex flex-col items-center text-center">
                <Terminal className="w-8 h-8 text-neon-blue mb-2" />
                <h3 className="text-white font-semibold mb-2">Tools</h3>
                <p className="text-gray-400 text-sm">Proficient in security tools and frameworks</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};