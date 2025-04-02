import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Phone } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-neon-blue">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-cyber-black/50 p-6 rounded-lg border border-neon-blue/30"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-neon-blue" />
                  <a href="mailto:shagarithvik1dinnu@gmail.com" className="text-gray-300 hover:text-neon-blue">
                    shagarithvik1dinnu@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-neon-blue" />
                  <span className="text-gray-300">+91 9866266900</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-neon-blue" />
                  <span className="text-gray-300">Hyderabad, Telangana</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-neon-blue" />
                  <a
                    href="https://www.linkedin.com/in/rithvik-shaga-9a0b43177/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-neon-blue"
                  >
                    linkedin
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-cyber-black/50 p-6 rounded-lg border border-neon-blue/30"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-cyber-black/50 border border-neon-blue/30 rounded-lg p-3 text-white focus:border-neon-blue outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-cyber-black/50 border border-neon-blue/30 rounded-lg p-3 text-white focus:border-neon-blue outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-cyber-black/50 border border-neon-blue/30 rounded-lg p-3 text-white focus:border-neon-blue outline-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-neon-blue text-cyber-black font-semibold py-3 rounded-lg hover:bg-neon-blue/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
