import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Monitor, Code, Palette, Rocket } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Website Design',
    description: 'Beautiful, modern designs that captivate your audience and reflect your brand identity',
    gradient: 'from-[#5DA9E9] to-[#4FB3BF]',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Clean, efficient code that powers fast and reliable web applications',
    gradient: 'from-[#4FB3BF] to-[#5DA9E9]',
  },
  {
    icon: Monitor,
    title: 'Landing Pages',
    description: 'High-converting landing pages optimized for user engagement and conversions',
    gradient: 'from-[#5DA9E9] to-[#CDE7F5]',
  },
  {
    icon: Rocket,
    title: 'Educational Platforms',
    description: 'Interactive learning platforms designed for students and educators',
    gradient: 'from-[#4FB3BF] to-[#CDE7F5]',
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" ref={ref} className="py-32 bg-gradient-to-b from-[#F4F8FB] to-white relative overflow-hidden">
      {/* Liquid background elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#CDE7F5]/30 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#5DA9E9]/20 rounded-full blur-[100px]" />
      
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
            Our Services
          </motion.span>
          <h2 className="mb-4 text-[#1F2937]">What We Offer</h2>
          <p className="text-[#1F2937]/60 max-w-2xl mx-auto text-lg">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.19, 1, 0.22, 1] }}
              >
                <motion.div
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                  className="glass-strong p-8 rounded-[2rem] hover:shadow-2xl hover:shadow-[#5DA9E9]/20 transition-all duration-500 group relative overflow-hidden h-full border border-white/40"
                >
                  {/* Liquid gradient overlay on hover */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-[2rem]`}
                  />
                  
                  {/* Floating icon container */}
                  <motion.div
                    className={`relative mb-6 w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-[1.25rem] flex items-center justify-center shadow-lg shadow-[#5DA9E9]/20`}
                    whileHover={{ 
                      rotateY: 360,
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="mb-3 relative text-[#1F2937]">{service.title}</h3>
                  <p className="text-[#1F2937]/70 relative leading-relaxed">{service.description}</p>

                  {/* Liquid decorative element */}
                  <motion.div 
                    className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#5DA9E9]/10 to-transparent rounded-tl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                  />
                  
                  {/* Glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#5DA9E9]/0 to-[#4FB3BF]/0 group-hover:from-[#5DA9E9]/20 group-hover:to-[#4FB3BF]/20 rounded-[2rem] blur-xl -z-10 transition-all duration-500" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional feature highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass-strong rounded-[2rem] p-8 max-w-4xl mx-auto shadow-xl shadow-[#5DA9E9]/10">
            <p className="text-[#1F2937]/70 text-lg">
              <span className="text-[#5DA9E9] font-semibold">All services include</span> responsive design, performance optimization, SEO best practices, and ongoing support to ensure your digital success.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
