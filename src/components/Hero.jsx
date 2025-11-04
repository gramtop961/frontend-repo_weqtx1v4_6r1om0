import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0f1115] text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient veil to ensure readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0f1115]/40 via-[#0f1115]/60 to-[#0f1115]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 pb-20 text-center sm:pt-36">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs tracking-wide text-white/80 backdrop-blur-md"
        >
          <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[#D0B3FF] to-[#9DE2D6]" />
          Crafted with care — Modern, Minimal, Lux
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl"
        >
          Mochamad Wildan Adib
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 max-w-2xl text-balance text-base text-white/70 sm:text-lg"
        >
          Creative professional specializing in prompt engineering — designing clear, powerful instructions that turn ideas into precise, reliable outputs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex items-center gap-3"
        >
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#DFC7FF] to-[#A9E8DD] px-5 py-2.5 text-sm font-medium text-[#0f1115] shadow-lg shadow-black/20 transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#C8E8E0]"
          >
            Explore Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white/85 backdrop-blur-md transition-colors hover:bg-white/10"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
