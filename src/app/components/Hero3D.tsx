import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero3D() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F4F8FB] via-[#CDE7F5] to-[#F4F8FB] pt-28">
      {/* Animated liquid orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#5DA9E9]/30 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#4FB3BF]/30 rounded-full blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-[#CDE7F5]/40 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.4, 1],
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="text-[#1F2937]"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 glass-strong rounded-full shadow-lg shadow-[#5DA9E9]/10"
            >
              <Sparkles className="w-4 h-4 text-[#5DA9E9]" />
              <span className="bg-gradient-to-r from-[#5DA9E9] to-[#4FB3BF] bg-clip-text text-transparent font-medium">
                Digital Agency
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-6 text-5xl md:text-6xl lg:text-7xl leading-tight"
            >
              CordialSoft Builds{" "}
              <span className="bg-gradient-to-r from-[#5DA9E9] to-[#4FB3BF] bg-clip-text text-transparent">
                Websites
              </span>{" "}
              That Grow Your Business
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-10 text-[#1F2937]/70 text-lg max-w-xl leading-relaxed"
            >
              We design and develop fast, modern, and animated digital
              experiences that convert visitors into customers
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-[#5DA9E9] to-[#4FB3BF] text-white rounded-[1.25rem] flex items-center gap-2 group hover:shadow-xl hover:shadow-[#5DA9E9]/30 transition-all duration-300"
              >
                Get a Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 glass-strong rounded-[1.25rem] hover:bg-white/40 transition-all duration-300 shadow-lg shadow-[#5DA9E9]/5"
              >
                View Our Work
              </motion.button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-12 flex flex-wrap items-center gap-8"
            >
              {[
                { label: "50+ Projects", value: "50+" },
                { label: "Happy Clients", value: "98%" },
                { label: "On Time Delivery", value: "100%" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-semibold bg-gradient-to-r from-[#5DA9E9] to-[#4FB3BF] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#1F2937]/60">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right 3D element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
            className="relative h-[600px] flex items-center justify-center"
          >
            {/* 3D Laptop with Liquid Glass Effect */}
            <div className="relative perspective-2000">
              <motion.div
                className="relative w-[600px]"
                animate={{
                  rotateX: [3, 6, 3],
                  rotateY: [0, -4, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Laptop Screen - Liquid Glass */}
                <div className="relative glass-strong rounded-[2rem] p-4 shadow-2xl shadow-[#5DA9E9]/20">
                  {/* Webcam notch */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1F2937]/30 rounded-full" />

                  {/* Screen content - Working IDE */}
                  <div className="aspect-video bg-gradient-to-br from-[#1F2937] to-[#1F2937]/90 rounded-[1.5rem] overflow-hidden relative">
                    {/* IDE Header Bar */}
                    <div className="absolute top-0 left-0 right-0 h-10 glass-subtle border-b border-white/10 flex items-center px-4 gap-2">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                        <div className="w-3 h-3 rounded-full bg-green-400/80" />
                      </div>
                      <motion.div
                        className="ml-4 h-6 px-3 glass rounded-lg flex items-center text-xs text-[#5DA9E9]"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Building...
                      </motion.div>
                    </div>

                    {/* Code Editor Pane */}
                    <div className="absolute top-10 left-0 w-2/3 bottom-0 bg-[#1F2937]/50 p-4 border-r border-white/10">
                      {/* Line numbers */}
                      <div className="absolute left-0 top-10 w-12 h-full bg-black/20 flex flex-col items-center py-4 gap-3 text-xs text-white/30">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                          <div key={n}>{n}</div>
                        ))}
                      </div>
                      {/* Code lines */}
                      <div className="ml-14 space-y-2 text-xs font-mono">
                        <motion.div
                          className="flex gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <span className="text-purple-400">import</span>
                          <span className="text-[#5DA9E9]">React</span>
                        </motion.div>

                        <motion.div
                          className="flex gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 }}
                        >
                          <span className="text-purple-400">function</span>
                          <span className="text-yellow-400">Hero</span>
                          <span className="text-white/50">()</span>
                          <span className="text-white/50"></span>
                        </motion.div>

                        <motion.div
                          className="flex gap-2 ml-4"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.9 }}
                        >
                          <span className="text-purple-400">return</span>
                          <span className="text-green-400">&lt;div&gt;</span>
                        </motion.div>

                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="h-3 bg-gradient-to-r from-white/20 to-transparent rounded"
                            style={{ width: `${60 + i * 10}%` }}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{
                              delay: 1.2 + i * 0.2,
                              duration: 0.5,
                            }}
                          />
                        ))}

                        {/* Typing cursor */}
                        <motion.div
                          className="inline-block w-2 h-4 bg-[#5DA9E9]"
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                          }}
                        />
                      </div>
                    </div>

                    {/* Live Preview Pane */}
                    <div className="absolute top-10 right-0 w-1/3 bottom-0 glass-subtle p-3 overflow-hidden">
                      <div className="text-xs text-white/50 mb-2">
                        Live Preview
                      </div>

                      {/* Animated website layout */}
                      <div className="space-y-2">
                        {/* Header bar */}
                        <motion.div
                          className="h-6 bg-gradient-to-r from-[#5DA9E9] to-[#4FB3BF] rounded-lg shadow-lg"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: 1.5, duration: 0.6 }}
                        />

                        {/* Content blocks */}
                        <motion.div
                          className="space-y-2"
                          animate={{ y: [-100, 200] }}
                          transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          {[...Array(8)].map((_, i) => (
                            <div key={i} className="flex gap-2">
                              <div className="w-8 h-8 bg-[#5DA9E9]/20 rounded-lg" />
                              <div className="flex-1 space-y-1">
                                <div
                                  className="h-2 bg-white/20 rounded"
                                  style={{ width: "80%" }}
                                />
                                <div
                                  className="h-2 bg-white/10 rounded"
                                  style={{ width: "60%" }}
                                />
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      </div>
                    </div>

                    {/* Status bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-r from-[#5DA9E9] to-[#181f20] flex items-center px-4 gap-4">
                      <motion.div
                        className="flex items-center gap-2 text-xs text-white"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <div className="w-2 h-2 bg-green-300 rounded-full" />
                        Connected
                      </motion.div>
                      <div className="text-xs text-white/70">
                        Building components...
                      </div>
                    </div>

                    {/* Floating liquid particles */}
                    {[...Array(15)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-[#5DA9E9] rounded-full blur-[1px]"
                        style={{
                          left: `${10 + i * 6}%`,
                          top: "50%",
                        }}
                        animate={{
                          y: [-20, -100, -20],
                          opacity: [0, 1, 0],
                          scale: [0.5, 1.5, 0.5],
                        }}
                        transition={{
                          duration: 3 + (i % 3),
                          repeat: Infinity,
                          delay: i * 0.15,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Laptop base */}
                <div className="h-4 bg-gradient-to-b from-white/40 to-white/30 backdrop-blur-md rounded-b-[2rem] mt-1 relative border-t border-white/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                </div>

                {/* Glow effect */}
                <motion.div
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-gradient-to-r from-[#5DA9E9]/40 via-[#4FB3BF]/40 to-[#5DA9E9]/40 rounded-full blur-3xl"
                  animate={{
                    opacity: [0.4, 0.7, 0.4],
                    scale: [0.9, 1.15, 0.9],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              {/* Floating tech elements with liquid glass */}
              {[
                { icon: "{ }", x: -100, y: -50 },
                { icon: "</>", x: 120, y: -80 },
                { icon: "< />", x: -80, y: 80 },
                { icon: "fn", x: 100, y: 100 },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="absolute text-[#5DA9E9] font-mono text-xl font-bold glass-strong px-4 py-2.5 rounded-2xl border border-[#5DA9E9]/20 shadow-lg shadow-[#5DA9E9]/10"
                  style={{
                    left: `calc(50% + ${item.x}px)`,
                    top: `calc(50% + ${item.y}px)`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                >
                  {item.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-7 h-11 glass-strong rounded-full flex justify-center pt-2 shadow-lg shadow-[#5DA9E9]/10">
          <motion.div
            className="w-1.5 h-2 bg-gradient-to-b from-[#5DA9E9] to-[#4FB3BF] rounded-full"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
