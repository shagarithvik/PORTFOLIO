import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

export const Education = () => {
  const education = [
    {
      year: '2020 - Present',
      institution: 'Sreenidhi Institute of Science and Technology',
      degree: 'Cyber Security',
      location: 'HYDERABAD, TELANGANA'
    },
    {
      year: '2020',
      institution: 'Greenwood High International School',
      degree: 'Matriculation',
      location: 'HYDERABAD, TELANGANA'
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-neon-blue">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-cyber-black/50 p-6 rounded-lg border border-neon-blue/30 hover:border-neon-blue/60 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-neon-blue/10 rounded-full">
                    <GraduationCap className="w-6 h-6 text-neon-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{edu.institution}</h3>
                    <p className="text-neon-blue mt-1">{edu.degree}</p>
                    <div className="flex items-center gap-2 mt-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.year}</span>
                    </div>
                    <p className="text-gray-400 mt-1">{edu.location}</p>
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