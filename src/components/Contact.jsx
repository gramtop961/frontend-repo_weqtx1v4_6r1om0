import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Portfolio] Message from ${name || 'Visitor'}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:wildan@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative w-full bg-[#0f1115] py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-[3rem] bg-gradient-to-b from-[#DFC7FF]/20 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="font-display text-2xl text-white/90 sm:text-3xl"
        >
          Let’s Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-white/70"
        >
          Simple and elegant form — I’ll get back to you soon.
        </motion.p>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="text-xs text-white/60">Name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder-white/40 outline-none transition focus:border-white/20"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-xs text-white/60">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder-white/40 outline-none transition focus:border-white/20"
              />
            </label>
          </div>
          <label className="flex flex-col gap-2">
            <span className="text-xs text-white/60">Message</span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project or idea..."
              rows={5}
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-white/20"
            />
          </label>

          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 text-xs text-white/50">
              <Mail className="h-4 w-4" />
              wildan@example.com
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#DFC7FF] to-[#A9E8DD] px-5 py-2 text-sm font-medium text-[#0f1115] shadow-lg shadow-black/20 transition-transform hover:scale-[1.02]"
            >
              Send Message
              <Send className="h-4 w-4" />
            </button>
          </div>
        </motion.form>

        <div className="mt-10 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Mochamad Wildan Adib — Crafted with clarity.
        </div>
      </div>
    </section>
  );
};

export default Contact;
