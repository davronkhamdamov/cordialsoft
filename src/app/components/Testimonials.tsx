import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: 'CordialSoft transformed our online presence. The website they built is not only beautiful but also incredibly fast and user-friendly. Our conversion rate increased by 150%!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Founder, EduLearn',
    content: 'Working with CordialSoft on our educational platform was a game-changer. They understood our vision and delivered a platform that our students love. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director, GrowthCo',
    content: 'The landing pages CordialSoft created for our campaigns are stunning. The animations are smooth, and the design perfectly captures our brand. Best investment we made this year.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    rating: 5,
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
    <section ref={ref} className="py-32 bg-gradient-to-b from-white to-[#F4F8FB] relative overflow-hidden">
      {/* Liquid background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#CDE7F5]/30 via-transparent to-[#5DA9E9]/20" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#4FB3BF]/20 rounded-full blur-[120px]" />
      
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
            Testimonials
          </motion.span>
          <h2 className="mb-4 text-[#1F2937]">What Our Clients Say</h2>
          <p className="text-[#1F2937]/60 max-w-2xl mx-auto text-lg">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-[450px] md:h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100, rotateY: -20 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -100, rotateY: 20 }}
                transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                className="absolute inset-0"
              >
                <div className="glass-strong p-10 md:p-12 rounded-[2.5rem] shadow-2xl shadow-[#5DA9E9]/20 border border-white/40 relative h-full">
                  {/* Quote icon with liquid glass */}
                  <motion.div
                    className="absolute -top-6 left-12 w-14 h-14 bg-gradient-to-br from-[#5DA9E9] to-[#4FB3BF] rounded-[1.25rem] flex items-center justify-center shadow-xl shadow-[#5DA9E9]/40"
                    animate={{
                      rotate: [0, 5, -5, 0],
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Quote className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Rating stars */}
                  <div className="flex gap-1 mb-6 mt-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-5 h-5 text-[#5DA9E9] fill-[#5DA9E9]" />
                      </motion.div>
                    ))}
                  </div>

                  <div className="mb-8">
                    <p className="text-[#1F2937] text-lg italic leading-relaxed">
                      "{testimonials[currentIndex].content}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <motion.div
                      className="relative w-16 h-16 rounded-[1.25rem] overflow-hidden border-4 border-[#5DA9E9]/30 shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-[#1F2937] text-lg">{testimonials[currentIndex].name}</h4>
                      <p className="text-[#1F2937]/60">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>

                  {/* Liquid decorative gradient */}
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#5DA9E9]/10 to-transparent rounded-tl-[4rem] pointer-events-none" />
                  
                  {/* Floating liquid particles */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-[#5DA9E9]/30 rounded-full"
                      style={{
                        left: `${20 + i * 30}%`,
                        bottom: '20%',
                      }}
                      animate={{
                        y: [-10, -30, -10],
                        opacity: [0.2, 0.6, 0.2],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Liquid glass navigation dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all backdrop-blur-sm ${
                  index === currentIndex
                    ? 'w-12 bg-gradient-to-r from-[#5DA9E9] to-[#4FB3BF] shadow-lg shadow-[#5DA9E9]/30'
                    : 'w-3 glass-subtle border border-[#5DA9E9]/20'
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
