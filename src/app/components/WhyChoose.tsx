import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Zap, Shield, Heart, Users } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance for the best user experience",
    gradient: "from-[#5DA9E9] to-[#4FB3BF]",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security and 99.9% uptime",
    gradient: "from-[#4FB3BF] to-[#5DA9E9]",
  },
  {
    icon: Heart,
    title: "Client-Focused",
    description: "Your success is our top priority",
    gradient: "from-[#5DA9E9] to-[#CDE7F5]",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled professionals dedicated to your project",
    gradient: "from-[#4FB3BF] to-[#CDE7F5]",
  },
];

export function WhyChoose() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className="py-32 bg-gradient-to-br from-[#1F2937] via-[#1F2937] to-[#1F2937]/95 text-white relative overflow-hidden"
    >
      {/* Liquid background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#5DA9E9]/20 rounded-full blur-[150px]"
          animate={{
            y: [0, 60, 0],
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-[#4FB3BF]/20 rounded-full blur-[150px]"
          animate={{
            y: [0, -60, 0],
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-[#CDE7F5]/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

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
            className="inline-block mb-4 px-6 py-2.5 glass-strong rounded-full text-[#5DA9E9] shadow-lg shadow-[#5DA9E9]/20 border border-[#5DA9E9]/20"
          >
            Why Choose Us
          </motion.span>
          <h2 className="mb-4">Why CordialSoft?</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            We combine creativity, technology, and strategy to deliver
            exceptional results
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
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.19, 1, 0.22, 1],
                }}
              >
                <motion.div
                  whileHover={{ y: -12 }}
                  transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
                  className="text-center group"
                >
                  {/* Animated 3D liquid glass icon */}
                  <motion.div
                    className="relative inline-flex items-center justify-center mb-6"
                    transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                    // style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Liquid glow effect */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} rounded-[1.5rem] blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-500`}
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Icon container with glass effect */}
                    <div
                      className={`relative w-24 h-24 bg-gradient-to-br ${benefit.gradient} rounded-[1.5rem] flex items-center justify-center shadow-2xl shadow-[#5DA9E9]/30`}
                    >
                      <Icon className="w-12 h-12 text-white z-10" />
                    </div>

                    {/* Floating liquid border */}
                    <motion.div
                      className="absolute w-28 h-28 border-2 border-white/20 rounded-[1.5rem] backdrop-blur-sm"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{ transformStyle: "preserve-3d" }}
                    />
                  </motion.div>

                  <h3 className="mb-3 text-white">{benefit.title}</h3>
                  <p className="text-white/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats section with liquid glass */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 grid md:grid-cols-3 gap-6"
        >
          {[
            { value: "150+", label: "Projects Completed" },
            { value: "50+", label: "Happy Clients" },
            { value: "5+", label: "Years Experience" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="glass-strong rounded-[2rem] p-8 text-center shadow-xl shadow-[#5DA9E9]/10 border border-white/20"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-[#5DA9E9] to-[#4FB3BF] bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
