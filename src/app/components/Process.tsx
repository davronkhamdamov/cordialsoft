import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Sparkles, Palette, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Sparkles,
    title: 'Research',
    description: 'We dive deep into your business goals and target audience',
    gradient: 'from-[#5DA9E9] to-[#4FB3BF]',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Creating beautiful, user-centric designs that convert',
    gradient: 'from-[#4FB3BF] to-[#5DA9E9]',
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Building robust, scalable solutions with clean code',
    gradient: 'from-[#5DA9E9] to-[#CDE7F5]',
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'Deploying your project and ensuring smooth operations',
    gradient: 'from-[#4FB3BF] to-[#CDE7F5]',
  },
];

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="process" ref={ref} className="py-32 bg-gradient-to-b from-[#F4F8FB] to-white relative overflow-hidden">
      {/* Liquid background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#5DA9E9]/20 rounded-full blur-[120px]" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#4FB3BF]/20 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-block mb-4 px-6 py-2.5 glass-strong rounded-full text-[#5DA9E9] shadow-lg shadow-[#5DA9E9]/10"
          >
            Our Process
          </motion.span>
          <h2 className="mb-4 text-[#1F2937]">How We Work</h2>
          <p className="text-[#1F2937]/60 max-w-2xl mx-auto text-lg">
            A proven methodology that delivers results every time
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Liquid timeline line */}
          <motion.div 
            className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#5DA9E9]/30 via-[#4FB3BF]/30 to-[#5DA9E9]/30 hidden lg:block rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: index * 0.15, ease: [0.19, 1, 0.22, 1] }}
                  className="relative"
                >
                  <motion.div
                    whileHover={{ y: -12, scale: 1.03 }}
                    transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                    className="glass-strong p-8 rounded-[2rem] relative z-10 group h-full shadow-xl shadow-[#5DA9E9]/10 border border-white/40"
                  >
                    {/* Liquid step number */}
                    <motion.div
                      className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br ${step.gradient} text-white rounded-2xl flex items-center justify-center shadow-lg shadow-[#5DA9E9]/30 font-semibold`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                    >
                      {index + 1}
                    </motion.div>

                    {/* Icon with liquid glass 3D effect */}
                    <motion.div
                      className="relative mb-6 inline-flex"
                      whileHover={{ rotateY: 360, scale: 1.1 }}
                      transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {/* Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-[1.25rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity`} />
                      
                      <div className={`relative w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-[1.25rem] flex items-center justify-center shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>

                    <h3 className="mb-3 text-[#1F2937]">{step.title}</h3>
                    <p className="text-[#1F2937]/70 leading-relaxed">{step.description}</p>

                    {/* Liquid hover effect decoration */}
                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${step.gradient} rounded-b-[2rem]`}
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.4 }}
                    />

                    {/* Glow effect on hover */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-20 rounded-[2rem] blur-xl -z-10 transition-all duration-500`} />
                  </motion.div>

                  {/* Connecting liquid drops for mobile */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="lg:hidden w-2 h-8 bg-gradient-to-b from-[#5DA9E9] to-[#4FB3BF] mx-auto my-4 rounded-full"
                      initial={{ scaleY: 0 }}
                      animate={isInView ? { scaleY: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[#5DA9E9] to-[#4FB3BF] text-white rounded-full shadow-xl shadow-[#5DA9E9]/30 hover:shadow-2xl hover:shadow-[#5DA9E9]/40 transition-all duration-300"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
