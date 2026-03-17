"use client";

import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section
      id="contact"
      className="relative left-1/2 -translate-x-1/2 w-screen py-32 bg-[#0a0f1a] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#2F5FB3]/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#60a5fa]/10 rounded-full blur-[100px]" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
                            linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-[1400px] mx-auto w-full px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-8">
              <span className="gradient-text">LET'S CREATE</span>
              <br />
              <span className="text-white">TOGETHER</span>
            </h2>
            <p className="text-muted-foreground max-w-md leading-relaxed mb-12">
              Ready to transform your brand? We'd love to hear from you.
              Let's start a conversation about your next project.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <motion.a
                href="mailto:hello@atelier.studio"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2F5FB3]/20 flex items-center justify-center group-hover:bg-[#2F5FB3] transition-colors duration-300">
                  <Mail size={20} className="text-[#2F5FB3] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Email</p>
                  <p className="font-semibold">hello@atelier.studio</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+1234567890"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2F5FB3]/20 flex items-center justify-center group-hover:bg-[#2F5FB3] transition-colors duration-300">
                  <Phone size={20} className="text-[#2F5FB3] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Phone</p>
                  <p className="font-semibold">+1 (234) 567-890</p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2F5FB3]/20 flex items-center justify-center group-hover:bg-[#2F5FB3] transition-colors duration-300">
                  <MapPin size={20} className="text-[#2F5FB3] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Location</p>
                  <p className="font-semibold">San Francisco, CA</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <p className="text-muted-foreground text-sm mb-4">Follow Us</p>
              <div className="flex gap-4">
                {["Instagram", "Twitter", "LinkedIn", "Dribbble"].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ y: -5 }}
                    className="px-4 py-2 glass rounded-full text-sm hover:bg-[#2F5FB3] transition-colors duration-300"
                  >
                    {social}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#2F5FB3] transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#2F5FB3] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Company
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#2F5FB3] transition-colors"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#2F5FB3] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#0a0f1a]">Select budget</option>
                    <option value="5k-10k" className="bg-[#0a0f1a]">$5,000 - $10,000</option>
                    <option value="10k-25k" className="bg-[#0a0f1a]">$10,000 - $25,000</option>
                    <option value="25k-50k" className="bg-[#0a0f1a]">$25,000 - $50,000</option>
                    <option value="50k+" className="bg-[#0a0f1a]">$50,000+</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label className="text-sm text-muted-foreground mb-2 block">
                  Project Details *
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#2F5FB3] transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-8 py-4 bg-gradient-to-r from-[#2F5FB3] to-[#60a5fa] rounded-xl font-semibold flex items-center justify-center gap-2 group hover:shadow-[0_0_30px_rgba(47,95,179,0.5)] transition-shadow duration-300"
              >
                Send Message
                <Send
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
