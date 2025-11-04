import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#0f1115] py-24 text-white">
      {/* Soft background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-[#DFC7FF]/20 blur-3xl" />
        <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-[#A9E8DD]/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#F2E9DA]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="font-display text-2xl text-white/90 sm:text-3xl"
        >
          About
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 max-w-3xl text-pretty text-base leading-relaxed text-white/75 sm:text-lg"
        >
          Saya <span className="text-white">Mochamad Wildan Adib</span>, seorang kreator yang fokus pada <span className="text-white">prompt engineering</span> —
          seni merangkai instruksi yang tepat agar sistem AI memahami konteks dan menghasilkan keluaran yang konsisten.
          Lulusan SMK, jurusan <span className="text-white">PPLG</span>, saya menyukai pendekatan yang tenang, rapi, dan fungsional.
        </motion.p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { title: 'Clarity', desc: 'Mengubah kebutuhan abstrak menjadi perintah yang jelas dan efektif.' },
            { title: 'Consistency', desc: 'Merancang pola prompt yang dapat direplikasi dengan hasil stabil.' },
            { title: 'Craft', desc: 'Mengasah detail kecil untuk pengalaman yang lebih manusiawi.' },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-lg"
            >
              <div className="text-sm font-semibold tracking-wide text-white/80">{item.title}</div>
              <div className="mt-1 text-sm text-white/65">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
