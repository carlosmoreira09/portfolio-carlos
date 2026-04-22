'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send, Mail, MapPin, Linkedin, Github } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const phoneNumber = '5522997794401';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.message('Please fill out all fields before sending.');
      return;
    }
    const formattedMessage = encodeURIComponent(
      `*New Contact from Portfolio*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n\n*Message:*\n${formData.message}`,
    );
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${formattedMessage}`;
    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', email: '', message: '' });
    toast.success('Opening WhatsApp…');
  };

  return (
    <section id="contact" className="w-full py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            Let&apos;s Talk
          </span>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">Got a product to build?</h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-600 dark:text-gray-400">
            Open to senior full-stack roles, SaaS partnerships and industrial software challenges.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-indigo-800 p-6 text-white shadow-xl">
              <h3 className="text-lg font-bold">Direct channels</h3>
              <p className="mt-1 text-sm text-blue-100">Fastest way to reach me.</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <div className="rounded-lg bg-white/15 p-2">
                    <Mail className="h-4 w-4" />
                  </div>
                  <a href="mailto:cesmoreira90@hotmail.com" className="hover:underline">
                    cesmoreira90@hotmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="rounded-lg bg-white/15 p-2">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    +55 22 99779-4401
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="rounded-lg bg-white/15 p-2">
                    <MapPin className="h-4 w-4" />
                  </div>
                  Brazil · Open to relocate (GMT+3)
                </li>
              </ul>

              <div className="mt-8 flex gap-3">
                <a
                  href="https://linkedin.com/in/carlosmoreira09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-white/15 p-2.5 transition-colors hover:bg-white/25"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com/carlosmoreira09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-white/15 p-2.5 transition-colors hover:bg-white/25"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleWhatsAppSubmit}
            className="md:col-span-3 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-950"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-950"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-950"
              />
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-0.5 hover:shadow-emerald-500/40"
            >
              <Send className="h-4 w-4" />
              Send via WhatsApp
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
