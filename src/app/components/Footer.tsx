import { motion } from 'motion/react';
import { Globe, Heart, Twitter, Linkedin, Github, Dribbble } from 'lucide-react';

const footerLinks = {
  Services: ['Website Design', 'Web Development', 'Landing Pages', 'Educational Platforms'],
  Company: ['About Us', 'Our Process', 'Portfolio', 'Contact'],
  Resources: ['Blog', 'Case Studies', 'FAQs', 'Support'],
};

const socialLinks = [
  { name: 'Twitter', url: '#', icon: Twitter },
  { name: 'LinkedIn', url: '#', icon: Linkedin },
  { name: 'GitHub', url: '#', icon: Github },
  { name: 'Dribbble', url: '#', icon: Dribbble },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1F2937] to-[#1F2937]/95 text-white py-20 relative overflow-hidden">
      {/* Liquid background elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#5DA9E9]/10 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#4FB3BF]/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand with liquid glass */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center gap-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#5DA9E9] to-[#4FB3BF] rounded-2xl flex items-center justify-center shadow-lg shadow-[#5DA9E9]/30">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">CordialSoft</span>
            </motion.div>
            <p className="text-white/70 mb-8 max-w-md leading-relaxed">
              Building beautiful, fast, and modern websites that help businesses grow and succeed in the digital world.
            </p>
            
            {/* Social links with liquid glass */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 glass-strong rounded-2xl flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-[#5DA9E9]/30 border border-white/20"
                  >
                    <Icon className="w-5 h-5 text-white" />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-6 text-white font-semibold">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-white/60 hover:text-[#5DA9E9] transition-colors inline-block"
                      whileHover={{ x: 8 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter with liquid glass */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 glass-strong rounded-[2rem] p-8 border border-white/20 shadow-xl"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl mb-3 text-white">Stay Updated</h3>
            <p className="text-white/70 mb-6">
              Subscribe to our newsletter for the latest web design tips and trends
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 glass-subtle rounded-2xl border border-white/30 bg-white/5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#5DA9E9]/50"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-[#5DA9E9] to-[#4FB3BF] rounded-2xl font-medium hover:shadow-lg hover:shadow-[#5DA9E9]/40 transition-all"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 flex items-center gap-2">
              © {new Date().getFullYear()} CordialSoft. Made with{' '}
              <motion.span
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart className="w-4 h-4 text-red-400 fill-current inline" />
              </motion.span>{' '}
              for businesses worldwide
            </p>
            <div className="flex gap-6">
              <motion.a
                href="#"
                className="text-white/60 hover:text-[#5DA9E9] transition-colors"
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                className="text-white/60 hover:text-[#5DA9E9] transition-colors"
                whileHover={{ y: -2 }}
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </div>

        {/* Back to top button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ y: -3, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 w-14 h-14 glass-strong rounded-2xl flex items-center justify-center shadow-xl shadow-[#5DA9E9]/20 border border-white/30 text-white z-50"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
}
