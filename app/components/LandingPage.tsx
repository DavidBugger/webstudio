"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, Zap, Smartphone, TrendingUp, Clock, Globe, Code, Star, MessageSquare, DollarSign, Palette, X } from 'lucide-react';

export default function LandingPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    // Close modal on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsBookingOpen(false);
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, []);

    // Prevent scroll when modal is open
    useEffect(() => {
        if (isBookingOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isBookingOpen]);

    const faqs = [
        {
            q: "How long does it take?",
            a: "Most projects are completed in 7–14 days, depending on scope and complexity."
        },
        {
            q: "Do you work with clients outside your country?",
            a: "Yes. We work remotely with clients across the US, UK, Canada, and Australia."
        },
        {
            q: "Will my website be mobile-friendly?",
            a: "Absolutely. Every site is mobile-first, fully responsive, and optimized for all devices."
        },
        {
            q: "Do you offer ongoing support?",
            a: "Yes. Optional monthly care plans are available for maintenance and updates."
        }
    ];

    const services = [
        {
            title: "Business Websites",
            desc: "Professional websites that build trust and generate leads.",
            icon: <Globe className="w-6 h-6" />
        },
        {
            title: "Landing Pages",
            desc: "High-converting pages for ads, campaigns, and offers.",
            icon: <Zap className="w-6 h-6" />
        },
        {
            title: "Website Redesigns",
            desc: "Modern redesigns that improve UX, speed, and clarity.",
            icon: <TrendingUp className="w-6 h-6" />
        },
        {
            title: "E-commerce Websites",
            desc: "Clean, scalable online stores built for growth.",
            icon: <Smartphone className="w-6 h-6" />
        }
    ];

    const portfolioItems = [
        {
            title: "Mabiz Global",
            category: "Tax & Audit Solutions",
            image: "/images/mabiz.png",
            link: "https://mabizglobal.com"
        },
        {
            title: "ZacMotors",
            category: "Luxury Car Dealership",
            image: "/images/zacmotors.png",
            link: "https://zacmotors.com"
        },
        {
            title: "Oya Ryders",
            category: "Logistics & Delivery",
            image: "/images/oya_riyders.png",
            link: "https://oyariyders.com"
        },
        {
            title: "BECE Portal",
            category: "Educational Platform",
            image: "/images/bece.png",
            link: "https://moebauchi.bu.gov.ng/bece_result/"
        },
        {
            title: "Zambis",
            category: "Enterprise Platform",
            image: "/images/zambis.png",
            link: "https://zambispetroleum.com"
        }
    ];

    const testimonials = [
        {
            text: "The process was smooth, and the final website exceeded expectations. Our conversion rate increased by 40% in the first month.",
            author: "Sarah Johnson",
            role: "CEO, TechFlow Inc."
        },
        {
            text: "Professional, responsive, and delivered exactly what we needed. The attention to detail was impressive.",
            author: "Michael Chen",
            role: "Founder, GrowthLabs"
        },
        {
            text: "Best investment we made for our business. The website pays for itself with the leads it generates.",
            author: "Emily Rodriguez",
            role: "Marketing Director, Prime Solutions"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 z-50">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        <Image src="/logo.svg" alt="WebStudio Logo" width={52} height={52} className="w-15 h-15 object-contain" />
                        {/* WebStudio */}
                    </div>
                    <button
                        onClick={() => setIsBookingOpen(true)}
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-6 py-2 rounded-lg font-semibold transition-all"
                    >
                        Book a Call
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="container mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-32">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-6 px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-300 text-sm font-semibold"
                    >
                        🚀 Trusted by 100+ businesses worldwide
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent leading-tight"
                    >
                        Websites That Turn Visitors Into Customers
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto"
                    >
                        We design clean, high-performing websites for small businesses and startups that want more leads, trust, and sales — without agency stress.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsBookingOpen(true)}
                            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 transition-all transform shadow-2xl shadow-cyan-500/50"
                        >
                            Book a Free Discovery Call <ArrowRight className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05, borderColor: "rgba(34, 211, 238, 1)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                            className="border-2 border-slate-600 hover:bg-slate-800/50 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all"
                        >
                            View Our Work
                        </motion.button>
                    </motion.div>
                </div>
            </header>

            {/* Trust Snapshot */}
            <section className="bg-slate-800/50 py-12 border-y border-slate-700">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                            {[
                                { text: "Conversion-focused design", icon: <TrendingUp className="w-5 h-5" /> },
                                { text: "Mobile-first & fast loading", icon: <Smartphone className="w-5 h-5" /> },
                                { text: "Clear messaging that sells", icon: <MessageSquare className="w-5 h-5" /> },
                                { text: "Delivered in 14 days or less", icon: <Clock className="w-5 h-5" /> }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                    className="flex items-center gap-3 bg-slate-800/50 p-4 rounded-lg"
                                >
                                    <div className="text-cyan-400">{item.icon}</div>
                                    <span className="text-slate-200">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-center text-slate-400 text-sm"
                        >
                            🌍 Serving businesses in the US, UK, Canada & Australia
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Problem → Solution */}
            <section className="container mx-auto px-6 py-20">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-red-900/30 to-slate-800/50 p-8 md:p-10 rounded-2xl border border-red-800/50 mb-12 backdrop-blur-sm"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Is your website doing any of these?</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                "Looks outdated or unprofessional",
                                "Confuses visitors instead of guiding them",
                                "Loads slowly on mobile",
                                "Fails to generate leads or inquiries"
                            ].map((problem, i) => (
                                <div key={i} className="flex items-start gap-3 bg-red-900/20 p-4 rounded-lg">
                                    <span className="text-red-400 text-xl flex-shrink-0">✗</span>
                                    <span className="text-slate-300">{problem}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 p-6 bg-red-900/30 rounded-xl border border-red-700/50">
                            <p className="text-lg md:text-xl text-red-300 font-semibold text-center">
                                💡 If so, it's not just a design issue — it's a revenue problem.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-cyan-900/30 to-slate-800/50 p-8 md:p-10 rounded-2xl border border-cyan-700/50 backdrop-blur-sm"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Solution</h2>
                        <p className="text-slate-300 mb-6 text-lg">We build websites that are:</p>
                        <div className="space-y-4">
                            {[
                                { label: "Clear", desc: "visitors instantly understand your offer", icon: <MessageSquare className="w-6 h-6" /> },
                                { label: "Credible", desc: "your brand looks trustworthy", icon: <Star className="w-6 h-6" /> },
                                { label: "Conversion-focused", desc: "every section has a purpose", icon: <TrendingUp className="w-6 h-6" /> }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 bg-cyan-900/20 p-5 rounded-lg">
                                    <div className="text-cyan-400 flex-shrink-0 mt-1">{item.icon}</div>
                                    <div>
                                        <span className="font-semibold text-cyan-300 text-lg">{item.label}</span>
                                        <span className="text-slate-300"> — {item.desc}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services */}
            <section className="bg-slate-800/30 py-20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
                        <p className="text-slate-400 text-lg">Comprehensive web solutions for your business</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all hover:shadow-xl hover:shadow-cyan-500/20 group cursor-default"
                            >
                                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-cyan-400 transition-all">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-300 transition-colors">{service.title}</h3>
                                <p className="text-slate-400">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="container mx-auto px-6 py-20">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Simple 3-Step Process</h2>
                        <p className="text-slate-400 text-lg">From discovery to launch in just 14 days</p>
                    </motion.div>

                    <div className="space-y-6">
                        {[
                            {
                                num: "1",
                                title: "Discovery Call",
                                desc: "We understand your business, goals, and audience. We'll discuss your vision, target market, and what success looks like for you.",
                                icon: <MessageSquare className="w-6 h-6" />
                            },
                            {
                                num: "2",
                                title: "Design & Build",
                                desc: "We design, develop, and optimize your website for performance. You'll get regular updates and have input throughout the process.",
                                icon: <Code className="w-6 h-6" />
                            },
                            {
                                num: "3",
                                title: "Launch & Support",
                                desc: "Your site goes live — with optional ongoing care and support. We ensure a smooth launch and are here for any adjustments.",
                                icon: <Zap className="w-6 h-6" />
                            }
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="flex flex-col md:flex-row gap-6 items-start bg-slate-800/30 p-6 md:p-8 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all group cursor-default"
                            >
                                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold flex-shrink-0 shadow-lg group-hover:shadow-cyan-500/50 transition-all">
                                    {step.num}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-cyan-300 transition-colors">{step.title}</h3>
                                    <p className="text-slate-300 leading-relaxed">{step.desc}</p>
                                </div>
                                <div className="text-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity hidden md:block">
                                    {step.icon}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mt-12 p-8 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600 text-center"
                    >
                        <p className="text-xl font-semibold text-cyan-300 mb-2">✨ No long contracts. No unnecessary meetings. No confusion.</p>
                        <p className="text-slate-400">Just clear communication and results you can measure.</p>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-slate-800/30 py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Businesses Choose Us</h2>
                            <p className="text-slate-400 text-lg">What sets us apart from traditional agencies</p>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                            {[
                                { text: "We focus on results, not just visuals", icon: <TrendingUp className="w-6 h-6" /> },
                                { text: "Clear communication & realistic timelines", icon: <MessageSquare className="w-6 h-6" /> },
                                { text: "No bloated agency pricing", icon: <DollarSign className="w-6 h-6" /> },
                                { text: "Remote-first, efficient, and reliable", icon: <Globe className="w-6 h-6" /> }
                            ].map((reason, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                    className="flex items-center gap-4 bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all cursor-default"
                                >
                                    <div className="text-cyan-400 flex-shrink-0">{reason.icon}</div>
                                    <span className="text-slate-200 text-lg">{reason.text}</span>
                                </motion.div>
                            ))}
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="text-center p-8 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-2xl border border-cyan-700/50"
                        >
                            <p className="text-xl md:text-2xl text-slate-200 italic">
                                💎 We work like a boutique studio — personal, focused, and outcome-driven.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Portfolio / Social Proof */}
            <section id="portfolio" className="container mx-auto px-6 py-20">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Recent Work</h2>
                        <p className="text-slate-400 text-lg">Projects that delivered real results for our clients</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {portfolioItems.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group cursor-pointer"
                            >
                                <div className="relative h-64 rounded-xl mb-4 overflow-hidden shadow-lg group-hover:shadow-2xl transition-all">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6"
                                    >
                                        <div className="bg-cyan-500/20 backdrop-blur-md px-4 py-2 rounded-lg border border-cyan-500/30 text-white font-semibold flex items-center gap-2 hover:bg-cyan-500/40 transition-colors">
                                            View Project <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </a>
                                </div>
                                <h4 className="text-xl font-bold text-center mb-1 text-white group-hover:text-cyan-400 transition-colors">{item.title}</h4>
                                <p className="text-slate-400 text-center text-sm">{item.category}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="space-y-6">
                        <motion.h3
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold text-center mb-8"
                        >
                            What Our Clients Say
                        </motion.h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {testimonials.map((testimonial, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all cursor-default"
                                >
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, j) => (
                                            <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-slate-300 mb-4 italic">"{testimonial.text}"</p>
                                    <div className="border-t border-slate-700 pt-4">
                                        <p className="font-semibold text-cyan-300">{testimonial.author}</p>
                                        <p className="text-sm text-slate-400">{testimonial.role}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="bg-slate-800/30 py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">Transparent Starting Points</h2>
                            <p className="text-slate-400 text-lg mb-12">Every project is scoped individually after the discovery call.</p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                            {[
                                { service: "Landing Pages", price: "$500", features: ["Single page design", "Mobile responsive", "Contact form", "Fast delivery"] },
                                { service: "Business Websites", price: "$1,200", features: ["Multi-page site", "CMS integration", "SEO optimized", "Analytics setup"], highlight: true },
                                { service: "E-commerce", price: "$2,500", features: ["Product catalog", "Payment integration", "Inventory system", "Order management"] }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    whileHover={{ y: -10 }}
                                    className={`bg-slate-800/50 p-8 rounded-xl border cursor-default ${item.highlight ? 'border-cyan-500 shadow-xl shadow-cyan-500/20' : 'border-slate-700'} transition-all`}
                                >
                                    {item.highlight && (
                                        <div className="inline-block mb-4 px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-300 text-sm font-semibold">
                                            Most Popular
                                        </div>
                                    )}
                                    <h3 className="text-2xl font-semibold mb-2">{item.service}</h3>
                                    <p className="text-4xl font-bold text-cyan-400 mb-6">from {item.price}</p>
                                    <ul className="space-y-2 mb-6 text-left">
                                        {item.features.map((feature, j) => (
                                            <li key={j} className="flex items-center gap-2 text-slate-300">
                                                <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsBookingOpen(true)}
                            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all shadow-xl"
                        >
                            Request a Custom Quote
                        </motion.button>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="container mx-auto px-6 py-20">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-slate-400 text-lg">Everything you need to know</p>
                    </motion.div>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden hover:border-cyan-500/50 transition-all"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-700/30 transition-colors"
                                >
                                    <span className="font-semibold text-lg pr-4">{faq.q}</span>
                                    <motion.span
                                        animate={{ rotate: openFaq === i ? 180 : 0 }}
                                        className="text-2xl text-cyan-400"
                                    >
                                        {openFaq === i ? '−' : '+'}
                                    </motion.span>
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-5 text-slate-300 leading-relaxed border-t border-slate-700 pt-4">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="container mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center bg-gradient-to-br from-cyan-900/40 via-blue-900/40 to-purple-900/40 p-12 md:p-16 rounded-3xl border border-cyan-700/50 shadow-2xl"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                        Ready to Upgrade Your Online Presence?
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Let's build a website that actually works for your business.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsBookingOpen(true)}
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-12 py-5 rounded-xl font-semibold text-xl flex items-center gap-3 mx-auto transition-all shadow-2xl shadow-cyan-500/50"
                    >
                        Book a Free Discovery Call <ArrowRight className="w-6 h-6" />
                    </motion.button>
                    <p className="mt-6 text-slate-400">No commitment required • 30-minute consultation</p>
                </motion.div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 border-t border-slate-800 py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div className="md:col-span-2">
                            <div className="flex items-center gap-2 text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
                                <Image src="/logo.svg" alt="WebStudio Logo" width={40} height={40} className="w-10 h-10 object-contain" />
                                WebStudio
                            </div>
                            <p className="text-slate-400 mb-4">Building high-performing websites for ambitious businesses worldwide.</p>
                            <p className="text-sm text-slate-500">Built with modern tools: React, Next.js, Tailwind CSS</p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4 text-cyan-300">Services</h4>
                            <ul className="space-y-2 text-slate-400">
                                <li>Business Websites</li>
                                <li>Landing Pages</li>
                                <li>E-commerce</li>
                                <li>Redesigns</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4 text-cyan-300">Contact</h4>
                            <ul className="space-y-2 text-slate-400">
                                <li>hello@webstudio.com</li>
                                <li>Schedule a call</li>
                                <li>View portfolio</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
                        <p>© 2026 WebStudio. All rights reserved.</p>
                    </div>
                </div>
            </footer>

            {/* Booking Modal */}
            <AnimatePresence>
                {isBookingOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 transition-all">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
                            onClick={() => setIsBookingOpen(false)}
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-4xl h-[90vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                        >
                            <div className="flex justify-between items-center p-4 border-b border-slate-800 bg-slate-900/50">
                                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                    Schedule Your Strategy Call
                                </h3>
                                <button
                                    onClick={() => setIsBookingOpen(false)}
                                    className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="flex-1 w-full bg-white overflow-hidden relative">
                                {/* Placeholder/Actual Calendly Embed */}
                                <iframe

                                    src="https://calendly.com/davidakanang/consultation-call?hide_landing_page_details=1&hide_gdpr_banner=1"
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    title="Select a Date and Time"
                                    className="w-full h-full"
                                ></iframe>

                                {/* Loading state helper (optional) */}
                                <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-slate-900 text-slate-400 -z-10">
                                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
                                </div>
                            </div>

                            <div className="p-4 bg-slate-800/50 text-center text-sm text-slate-400 border-t border-slate-700">
                                Secure scheduling powered by Calendly
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}