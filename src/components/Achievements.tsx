import { motion } from 'framer-motion';
import { Trophy, Award, Star } from 'lucide-react';

export const Achievements = () => {
  const achievements = [
    {
      title: 'Cybertron Competition Success',
      description: 'Secured 1st place in the Cybertron cybersecurity capture the flag competition',
      icon: Trophy,
    },
    {
      title: 'CyberStrike CTF Achievement',
      description: 'Earned 4th place in the CyberStrike CTF competition',
      icon: Award,
    },
    {
      title: 'Exceptional Cybersecurity Skills',
      description: 'Demonstrated exceptional cybersecurity skills by emerging victorious in competitions',
      icon: Star,
    },
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-neon-blue">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-cyber-black/50 p-6 rounded-lg border border-neon-blue/30 hover:border-neon-blue/60 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-neon-blue/10 rounded-lg">
                    <achievement.icon className="w-6 h-6 text-neon-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{achievement.title}</h3>
                </div>
                <p className="text-gray-400">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};