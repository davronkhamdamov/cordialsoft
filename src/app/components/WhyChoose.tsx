import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Zap, Shield, Heart, Users } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance for the best user experience',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security and 99.9% uptime',
  },
  {
    icon: Heart,
    title: 'Client-Focused',
    description: 'Your success is our top priority',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Skilled professionals dedicated to your project',
  },
];

export function WhyChoose() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-32 bg-slate-900 text-white relative overflow-hidden">
      {/* 3D Background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
          animate={{
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
          animate={{
            y: [0, -50, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-400">
            Why Choose Us
          </span>
          <h2 className="mb-4">Why CordialSoft?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We combine creativity, technology, and strategy to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className="text-center group"
                >
                  {/* Animated 3D icon */}
                  <motion.div
                    className="relative inline-flex items-center justify-center mb-6"
                    whileHover={{ rotateY: 360 }}
                    transition={{ duration: 0.6 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Icon container */}
                    <div className="relative w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center">
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    {/* Abstract 3D shape behind */}
                    <motion.div
                      className="absolute w-24 h-24 border-2 border-purple-500/30 rounded-2xl"
                      animate={{
                        rotate: [0, 90, 180, 270, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{ transformStyle: 'preserve-3d', translateZ: '-20px' }}
                    />
                  </motion.div>

                  <h3 className="mb-3">{benefit.title}</h3>
                  <p className="text-slate-400">{benefit.description}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
