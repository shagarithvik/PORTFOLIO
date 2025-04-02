import { motion } from 'framer-motion';
import { Code, Database, Shield, Terminal } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Industry Knowledge',
      icon: Shield,
      skills: [
        { name: 'Computer Forensics', level: 90 },
        { name: 'Artificial Intelligence (AI)', level: 85 },
        { name: 'Cloud Security', level: 80 },
        { name: 'System Deployment', level: 75 },
        { name: 'Cyber Security Risk', level: 85 },
        { name: 'Business Intelligence', level: 70 },
        { name: 'Digital Marketing', level: 65 },
        { name: 'Web Development', level: 75 },
        { name: 'Android Development', level: 80 },
        { name: 'Programming Interfaces (API)', level: 75 },
        { name: 'Accounting', level: 60 },
        { name: 'Online Advertising', level: 65 },
        { name: 'Account Management', level: 70 },
        { name: 'Business Analysis', level: 75 },
        { name: 'Organizational Development', level: 70 },
        { name: 'Web Design', level: 75 },
        { name: 'HTML Scripting', level: 80 }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Terminal,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'HTML', level: 85 },
        { name: 'CSS', level: 85 },
        { name: 'PHP', level: 75 },
        { name: 'Android Studio', level: 80 },
        { name: 'Kotlin', level: 70 },
        { name: 'TypeScript', level: 75 },
        { name: 'Software as a Service (SaaS)', level: 70 },
        { name: 'WordPress', level: 65 },
        { name: 'C (Programming Language)', level: 70 }
      ]
    },
    {
      title: 'Certifications',
      icon: Code,
      items: [
        'Fundamentals of SOC - Palo Alto Networks (2024)',
        'Network Security Fundamentals - Palo Alto Networks (2024)',
        'Google Android Developer Virtual Internship - AICTE (2024)',
        'EF SET English Certificate 68/100 (C1 Advanced) (2024)',
        'Cybersecurity Fundamentals - Palo Alto Networks (2024)',
        'Fundamentals of Cloud Security - Palo Alto Networks (2024)',
        'GUVI CERTIFIED - GUVI Geek Networks, IITM Research Park (2021)',
        'Guinness World Record Participation - GUVI Geek Networks (2021)'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-neon-blue">Skills & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-cyber-black/50 p-6 rounded-lg border border-neon-blue/30 hover:border-neon-blue/60 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  <category.icon className="w-6 h-6 text-neon-blue" />
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                {category.skills ? (
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-300">{skill.name}</span>
                          <span className="text-neon-blue">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full bg-neon-blue"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-2">
                    {category.items?.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-gray-300">
                        <Database className="w-4 h-4 mt-1 text-neon-blue flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
