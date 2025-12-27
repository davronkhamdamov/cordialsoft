import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Monitor, Code, Palette, Rocket } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Website Design',
    description: 'Beautiful, modern designs that captivate your audience and reflect your brand identity',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Clean, efficient code that powers fast and reliable web applications',
  },
  {
    icon: Monitor,
    title: 'Landing Pages',
    description: 'High-converting landing pages optimized for user engagement and conversions',
  },
  {
    icon: Rocket,
    title: 'Educational Platforms',
    description: 'Interactive learning platforms designed for students and educators',
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-100/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-2 bg-purple-100 text-purple-600 rounded-full">
            Our Services
          </span>
          <h2 className="mb-4">What We Offer</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow group relative overflow-hidden h-full"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/5 group-hover:to-blue-600/5 transition-all duration-300" />
                  
                  {/* 3D icon container */}
                  <motion.div
                    className="relative mb-6 w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center"
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <Icon className="w-8 h-8 text-purple-600" />
                  </motion.div>

                  <h3 className="mb-3 relative">{service.title}</h3>
                  <p className="text-slate-600 relative">{service.description}</p>

                  {/* Decorative element */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-purple-100/50 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
