import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(168, 85, 247, 0.3)',
                  '0 0 40px rgba(168, 85, 247, 0.5)',
                  '0 0 20px rgba(168, 85, 247, 0.3)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400">Let's Build Something Amazing</span>
            </motion.div>

            <h2 className="mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            
            <p className="text-slate-300 mb-8 text-lg">
              Get a free consultation and discover how CordialSoft can help your business grow with a modern, high-performance website.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-white text-slate-900 rounded-xl overflow-hidden"
            >
              {/* Button glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
                Start Your Project Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>

              {/* Pulse effect */}
              <motion.div
                className="absolute inset-0 border-2 border-white rounded-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [1, 0, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.button>
          </motion.div>

          {/* Right 3D element - Laptop mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] flex items-center justify-center"
          >
            {/* 3D Laptop */}
            <div className="relative perspective-1000">
              <motion.div
                className="relative w-[500px]"
                animate={{
                  rotateX: [0, 5, 0],
                  rotateY: [0, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Laptop screen */}
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 shadow-2xl border border-slate-700">
                  {/* Screen content */}
                  <div className="aspect-video bg-gradient-to-br from-purple-600 via-blue-600 to-purple-600 rounded-lg overflow-hidden relative">
                    {/* Animated UI elements */}
                    <div className="absolute inset-0 p-6 space-y-4">
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="h-8 bg-white/20 rounded backdrop-blur-sm"
                          animate={{
                            opacity: [0.3, 0.7, 0.3],
                            x: [0, 10, 0],
                          }}
                          transition={{
                            duration: 2 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                          style={{ width: `${80 - i * 15}%` }}
                        />
                      ))}
                    </div>

                    {/* Floating particles */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full"
                        style={{
                          left: `${20 + i * 12}%`,
                          top: '50%',
                        }}
                        animate={{
                          y: [-20, -60, -20],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2 + Math.random(),
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Laptop base */}
                <div className="h-3 bg-gradient-to-b from-slate-700 to-slate-800 rounded-b-2xl mt-1" />

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-2xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
