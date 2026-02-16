import { motion } from 'motion/react';
import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Process', href: '#process' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl"
    >
      <div className="glass-strong rounded-[2rem] shadow-lg shadow-[#5DA9E9]/10">
        <div className="px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-2 text-[#1F2937]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-11 h-11 bg-gradient-to-br from-[#5DA9E9] to-[#4FB3BF] rounded-2xl flex items-center justify-center shadow-lg shadow-[#5DA9E9]/30">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-semibold">CordialSoft</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="text-[#1F2937]/70 hover:text-[#1F2937] transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                  <motion.span 
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#5DA9E9] to-[#4FB3BF] rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
              
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-gradient-to-r from-[#5DA9E9] to-[#4FB3BF] text-white rounded-full hover:shadow-lg hover:shadow-[#5DA9E9]/50 transition-all duration-300"
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[#1F2937] p-2 glass rounded-xl"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            initial={false}
            animate={{
              height: isOpen ? 'auto' : 0,
              opacity: isOpen ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
            className="md:hidden overflow-hidden"
          >
            <div className="pb-6 space-y-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isOpen ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.05 }}
                  className="block text-[#1F2937]/70 hover:text-[#1F2937] transition-colors py-3 px-4 rounded-xl hover:bg-white/30"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={isOpen ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: navLinks.length * 0.05 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-[#5DA9E9] to-[#4FB3BF] rounded-xl text-white mt-2"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
