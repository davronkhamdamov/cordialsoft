import { motion } from 'motion/react';
import { Globe, Heart } from 'lucide-react';

const footerLinks = {
  Services: ['Website Design', 'Web Development', 'Landing Pages', 'Educational Platforms'],
  Company: ['About Us', 'Our Process', 'Portfolio', 'Contact'],
  Resources: ['Blog', 'Case Studies', 'FAQs', 'Support'],
};

const socialLinks = [
  { name: 'Twitter', url: '#' },
  { name: 'LinkedIn', url: '#' },
  { name: 'GitHub', url: '#' },
  { name: 'Dribbble', url: '#' },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold">CordialSoft</span>
            </motion.div>
            <p className="text-slate-400 mb-6 max-w-md">
              Building beautiful, fast, and modern websites that help businesses grow and succeed in the digital world.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 bg-slate-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <span className="sr-only">{social.name}</span>
                  <div className="w-5 h-5 bg-white/20 rounded" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-slate-400 hover:text-purple-400 transition-colors inline-block"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 flex items-center gap-2">
              © {new Date().getFullYear()} CordialSoft. Made with{' '}
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current inline" />
              </motion.span>{' '}
              for businesses worldwide
            </p>
            <div className="flex gap-6">
              <motion.a
                href="#"
                className="text-slate-400 hover:text-purple-400 transition-colors"
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                className="text-slate-400 hover:text-purple-400 transition-colors"
                whileHover={{ y: -2 }}
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
