import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
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
    <section ref={ref} className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-2 bg-purple-100 text-purple-600 rounded-full">
            Our Work
          </span>
          <h2 className="mb-4">Featured Projects</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Discover how we've helped businesses transform their digital presence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className={project.featured ? 'md:col-span-2' : ''}
            >
              <motion.div
                className="group relative overflow-hidden rounded-2xl bg-slate-900 cursor-pointer h-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`relative ${project.featured ? 'h-[600px]' : 'h-[400px]'} overflow-hidden`}>
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"
                    initial={{ opacity: 0.7 }}
                    animate={{ opacity: hoveredIndex === index ? 0.9 : 0.7 }}
                  />

                  {/* 3D depth effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20"
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Content */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-8 text-white"
                  animate={{
                    y: hoveredIndex === index ? -10 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="inline-block px-3 py-1 bg-purple-600 rounded-full text-sm mb-3">
                    {project.category}
                  </span>
                  <h3 className="mb-2">{project.title}</h3>
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  
                  <motion.div
                    className="flex items-center gap-2 text-purple-400"
                    animate={{
                      x: hoveredIndex === index ? 10 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    View Project
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </motion.div>

                {/* Floating badge for featured */}
                {project.featured && (
                  <div className="absolute top-6 right-6 px-4 py-2 bg-purple-600 text-white rounded-full shadow-lg">
                    Featured
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
