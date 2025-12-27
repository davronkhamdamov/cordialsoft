import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: 'CordialSoft transformed our online presence. The website they built is not only beautiful but also incredibly fast and user-friendly. Our conversion rate increased by 150%!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
  },
  {
    name: 'Michael Chen',
    role: 'Founder, EduLearn',
    content: 'Working with CordialSoft on our educational platform was a game-changer. They understood our vision and delivered a platform that our students love. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director, GrowthCo',
    content: 'The landing pages CordialSoft created for our campaigns are stunning. The animations are smooth, and the design perfectly captures our brand. Best investment we made this year.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-transparent to-blue-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-2 bg-purple-100 text-purple-600 rounded-full">
            Testimonials
          </span>
          <h2 className="mb-4">What Our Clients Say</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="bg-white p-12 rounded-3xl shadow-2xl border border-slate-100 relative">
                  {/* Quote icon */}
                  <motion.div
                    className="absolute -top-6 left-12 w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg"
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Quote className="w-6 h-6 text-white" />
                  </motion.div>

                  <div className="mb-8 mt-6">
                    <p className="text-slate-700 italic leading-relaxed">
                      "{testimonials[currentIndex].content}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <motion.div
                      className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-purple-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{testimonials[currentIndex].name}</h4>
                      <p className="text-slate-600">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>

                  {/* Decorative gradient */}
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-purple-100/50 to-transparent rounded-tl-full pointer-events-none" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-12 bg-gradient-to-r from-purple-600 to-blue-600'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
