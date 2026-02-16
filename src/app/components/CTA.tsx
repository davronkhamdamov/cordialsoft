import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="contact" ref={ref} className="py-32 bg-gradient-to-br from-[#5DA9E9] via-[#4FB3BF] to-[#5DA9E9] text-white relative overflow-hidden">
      {/* Liquid animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-[150px]"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, 60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-white/10 rounded-full blur-[150px]"
          animate={{
            scale: [1.4, 1, 1.4],
            x: [0, -60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-[#CDE7F5]/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15,
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
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 glass-strong rounded-full border border-white/30 shadow-xl"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(255, 255, 255, 0.3)',
                  '0 0 40px rgba(255, 255, 255, 0.5)',
                  '0 0 20px rgba(255, 255, 255, 0.3)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white">Let's Build Something Amazing</span>
            </motion.div>

            <h2 className="mb-6 text-white">
              Ready to Transform Your Digital Presence?
            </h2>
            
            <p className="text-white/80 mb-8 text-lg leading-relaxed">
              Get a free consultation and discover how CordialSoft can help your business grow with a modern, high-performance website.
            </p>

            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 glass-strong rounded-[1.5rem] overflow-hidden border-2 border-white/40 shadow-2xl"
            >
              {/* Liquid button glow effect */}
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              
              <span className="relative z-10 flex items-center gap-2 text-white font-semibold">
                Start Your Project Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>

              {/* Pulse effect */}
              <motion.div
                className="absolute inset-0 border-2 border-white/50 rounded-[1.5rem]"
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

            {/* Contact info with glass */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="mt-12 flex flex-wrap gap-6 items-center"
            >
              <div className="glass-strong rounded-2xl px-6 py-3 border border-white/30">
                <div className="text-white/70 text-sm">Email</div>
                <div className="text-white font-medium">hello@cordialsoft.com</div>
              </div>
              <div className="glass-strong rounded-2xl px-6 py-3 border border-white/30">
                <div className="text-white/70 text-sm">Phone</div>
                <div className="text-white font-medium">+1 (555) 123-4567</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right 3D element - Liquid Glass Laptop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="relative h-[500px] flex items-center justify-center"
          >
            {/* 3D Liquid Glass Laptop */}
            <div className="relative perspective-2000">
              <motion.div
                className="relative w-[500px]"
                animate={{
                  rotateX: [0, 6, 0],
                  rotateY: [0, -6, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Laptop screen with liquid glass */}
                <div className="relative glass-strong rounded-[2rem] p-4 shadow-2xl border-2 border-white/30">
                  {/* Screen content */}
                  <div className="aspect-video bg-gradient-to-br from-white/20 to-white/10 rounded-[1.5rem] overflow-hidden relative backdrop-blur-xl">
                    {/* Animated liquid UI elements */}
                    <div className="absolute inset-0 p-6 space-y-4">
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="h-8 glass-strong rounded-2xl border border-white/30"
                          animate={{
                            opacity: [0.4, 0.8, 0.4],
                            x: [0, 15, 0],
                          }}
                          transition={{
                            duration: 2.5 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                          style={{ width: `${80 - i * 15}%` }}
                        />
                      ))}
                    </div>

                    {/* Floating liquid particles */}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full"
                        style={{
                          left: `${15 + i * 10}%`,
                          top: '50%',
                        }}
                        animate={{
                          y: [-20, -70, -20],
                          opacity: [0, 1, 0],
                          scale: [0.5, 1.5, 0.5],
                        }}
                        transition={{
                          duration: 2.5 + Math.random(),
                          repeat: Infinity,
                          delay: i * 0.25,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Laptop base with liquid glass */}
                <div className="h-4 glass-strong rounded-b-[2rem] mt-1 border-t border-white/30" />

                {/* Liquid glow effect */}
                <motion.div 
                  className="absolute inset-0 bg-white/20 rounded-[2rem] blur-3xl -z-10"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [0.95, 1.05, 0.95],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              {/* Floating liquid shapes */}
              {[
                { size: 60, x: -80, y: -60 },
                { size: 40, x: 100, y: -80 },
                { size: 50, x: -60, y: 90 },
              ].map((shape, i) => (
                <motion.div
                  key={i}
                  className="absolute glass-strong rounded-[1.5rem] border border-white/30 shadow-xl"
                  style={{
                    width: shape.size,
                    height: shape.size,
                    left: `calc(50% + ${shape.x}px)`,
                    top: `calc(50% + ${shape.y}px)`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 5 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
