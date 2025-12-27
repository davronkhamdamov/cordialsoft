import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Sparkles, Palette, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Sparkles,
    title: 'Research',
    description: 'We dive deep into your business goals and target audience',
    color: 'from-purple-600 to-purple-400',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Creating beautiful, user-centric designs that convert',
    color: 'from-blue-600 to-blue-400',
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Building robust, scalable solutions with clean code',
    color: 'from-purple-600 to-purple-400',
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'Deploying your project and ensuring smooth operations',
    color: 'from-blue-600 to-blue-400',
  },
];

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-1/2 h-64 bg-gradient-to-r from-purple-200/30 to-transparent blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-2 bg-purple-100 text-purple-600 rounded-full">
            Our Process
          </span>
          <h2 className="mb-4">How We Work</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A proven methodology that delivers results every time
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200 hidden lg:block" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative"
                >
                  <motion.div
                    whileHover={{ y: -10, scale: 1.05 }}
                    className="bg-white p-8 rounded-2xl shadow-lg relative z-10 group"
                  >
                    {/* Step number */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {index + 1}
                    </motion.div>

                    {/* Icon with 3D effect */}
                    <motion.div
                      className="relative mb-6 inline-flex"
                      whileHover={{ rotateY: 180 }}
                      transition={{ duration: 0.6 }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>

                    <h3 className="mb-3">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>

                    {/* Hover effect decoration */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-b-2xl"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  {/* Connecting line for mobile */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="lg:hidden w-1 h-8 bg-gradient-to-b from-purple-200 to-blue-200 mx-auto my-4"
                      initial={{ scaleY: 0 }}
                      animate={isInView ? { scaleY: 1 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
