import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'Analytics Dashboard',
    category: 'SaaS Platform',
    image: 'https://images.unsplash.com/photo-1748609339084-ea43ec1b8fbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2NjU2ODg3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Modern analytics platform with real-time data visualization',
  },
  {
    title: 'Easy IELTS',
    category: 'Educational Platform',
    image: 'https://images.unsplash.com/photo-1762329367301-9009fd143ffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFybmluZyUyMHBsYXRmb3JtJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2NjY0ODM5MHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Interactive IELTS learning platform with progress tracking',
    featured: true,
  },
  {
    title: 'E-commerce Store',
    category: 'Online Store',
    image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2NjYyODY4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Full-featured e-commerce platform with seamless checkout',
  },
  {
    title: 'Business Landing',
    category: 'Corporate Website',
    image: 'https://images.unsplash.com/photo-1736959364958-40cfacc18edc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxhbmRpbmclMjBwYWdlfGVufDF8fHx8MTc2NjU3OTE1MHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Professional landing page for B2B services',
  },
];

export function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="portfolio" ref={ref} className="py-32 bg-gradient-to-b from-white to-[#F4F8FB] relative overflow-hidden">
      {/* Liquid background elements */}
      <div className="absolute top-40 left-10 w-96 h-96 bg-[#4FB3BF]/20 rounded-full blur-[120px]" />
      
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
            className="inline-block mb-4 px-6 py-2.5 glass-strong rounded-full text-[#4FB3BF] shadow-lg shadow-[#4FB3BF]/10"
          >
            Our Work
          </motion.span>
          <h2 className="mb-4 text-[#1F2937]">Featured Projects</h2>
          <p className="text-[#1F2937]/60 max-w-2xl mx-auto text-lg">
            Discover how we've helped businesses transform their digital presence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.19, 1, 0.22, 1] }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className={project.featured ? 'md:col-span-2' : ''}
            >
              <motion.div
                className="group relative overflow-hidden rounded-[2rem] bg-[#1F2937] cursor-pointer h-full shadow-2xl shadow-[#1F2937]/20"
                whileHover={{ scale: 1.02, y: -8 }}
                transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
              >
                <div className={`relative ${project.featured ? 'h-[600px]' : 'h-[400px]'} overflow-hidden`}>
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Liquid glass overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-[#1F2937] via-[#1F2937]/80 to-transparent"
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: hoveredIndex === index ? 0.95 : 0.8 }}
                  />

                  {/* Colored gradient on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#5DA9E9]/30 to-[#4FB3BF]/30 backdrop-blur-sm"
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* Content with glass effect */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-8 text-white"
                  animate={{
                    y: hoveredIndex === index ? -10 : 0,
                  }}
                  transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                >
                  <div className="glass-strong rounded-[1.5rem] p-6 border border-white/20">
                    <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#5DA9E9] to-[#4FB3BF] rounded-full text-sm mb-3 shadow-lg">
                      {project.category}
                    </span>
                    <h3 className="mb-2 text-white">{project.title}</h3>
                    <p className="text-white/70 mb-4 leading-relaxed">{project.description}</p>
                    
                    <motion.div
                      className="flex items-center gap-2 text-[#5DA9E9]"
                      animate={{
                        x: hoveredIndex === index ? 10 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      View Project
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Floating badge for featured */}
                {project.featured && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute top-6 right-6 px-5 py-2.5 glass-strong rounded-full shadow-xl shadow-[#5DA9E9]/20 border border-white/30 flex items-center gap-2"
                  >
                    <Star className="w-4 h-4 text-[#5DA9E9] fill-[#5DA9E9]" />
                    <span className="text-white font-medium">Featured</span>
                  </motion.div>
                )}

                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#5DA9E9]/0 via-[#4FB3BF]/0 to-[#5DA9E9]/0 group-hover:from-[#5DA9E9]/30 group-hover:via-[#4FB3BF]/30 group-hover:to-[#5DA9E9]/30 rounded-[2rem] blur-2xl -z-10 transition-all duration-700" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
