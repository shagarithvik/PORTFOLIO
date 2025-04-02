import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      title: 'Student',
      company: 'Sreenidhi Institute of Science and Technology',
      location: 'Hyderabad, India',
      period: '11/2022 - Present',
      description: 'Developed comprehensive capstone project integrating Python, PHP, and C that enhanced web application security; employed analytical skills and business intelligence tools to perform data analysis and improve user engagement by 20%.'
    },
    {
      title: 'Cybersecurity Intern',
      company: 'Supraja Technologies',
      location: 'Hyderabad, India',
      period: '05/2024 - 11/2024',
      description: 'Assisted in identifying and mitigating security vulnerabilities by conducting comprehensive penetration tests and vulnerability assessments, leading to a 30% enhancement in system security using tools like Nessus and Wireshark.'
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-neon-blue">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-cyber-black/50 p-6 rounded-lg border border-neon-blue/30 hover:border-neon-blue/60 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    <p className="text-neon-blue">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-4 text-gray-400 mt-2 md:mt-0">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};