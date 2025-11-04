import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Brand Voice Prompt Suite',
    desc: 'Sistem prompt modular untuk menjaga konsistensi nada, gaya, dan persona brand di berbagai kanal konten.',
    tags: ['Modular', 'Tone Control', 'Content'],
  },
  {
    title: 'Research → Brief Generator',
    desc: 'Rangkaian prompt berurutan untuk merangkum riset lalu membentuk creative brief yang terstruktur.',
    tags: ['Chained', 'Summarization', 'Brief'],
  },
  {
    title: 'Image Prompt Calibrator',
    desc: 'Template parameter visual (komposisi, warna, gaya) untuk mengarahkan generator gambar secara halus.',
    tags: ['Styling', 'Parameters', 'Vision'],
  },
  {
    title: 'QA Prompt Guardrails',
    desc: 'Aturan dan contoh kontra untuk menahan bias serta meningkatkan akurasi jawaban.',
    tags: ['Guardrails', 'Evaluation', 'Quality'],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative w-full bg-[#0f1115] py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-8 top-10 h-40 w-40 rotate-12 rounded-3xl bg-gradient-to-br from-[#F2E9DA]/30 to-transparent blur-2xl" />
        <div className="absolute right-8 bottom-6 h-48 w-48 -rotate-12 rounded-full bg-gradient-to-tr from-[#A9E8DD]/25 to-transparent blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="font-display text-2xl text-white/90 sm:text-3xl"
        >
          Selected Work
        </motion.h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] backdrop-blur-xl"
            >
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-white/[0.02]" />
              <h3 className="font-semibold text-white/90">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <div className="mt-4 text-xs text-white/50">Process artifacts available upon request.</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
