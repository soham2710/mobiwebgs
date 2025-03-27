"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { 
  Smartphone, 
  Database, 
  Brain, 
  Bitcoin, 
  Star, 
  ArrowRight, 
  Zap
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const testimonials = [
    {
      name: "David Chen",
      role: "CTO at TechCorp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400",
      quote: "MobiWebGS transformed our business with their innovative blockchain solutions. Their expertise and dedication to quality are unmatched.",
      rating: 5,
    },
    {
      name: "Sarah Williams",
      role: "Founder of AI Ventures",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400",
      quote: "The AI solutions provided by MobiWebGS have significantly improved our operational efficiency. They're true pioneers in the field.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "CEO of CryptoTrade",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400",
      quote: "Working with MobiWebGS on our cryptocurrency platform was a game-changer. Their technical expertise and innovative approach exceeded our expectations.",
      rating: 5,
    },
  ];

  const features = [
    {
      title: "Cutting-edge Technology",
      description: "We leverage the latest technologies to build future-proof solutions",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800",
    },
    {
      title: "Expert Team",
      description: "Our team of specialists brings years of industry experience",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800",
    },
    {
      title: "Innovation First",
      description: "We stay ahead of the curve with innovative solutions",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800",
    },
  ];

  const achievements = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Countries Served" },
    { number: "100+", label: "Expert Developers" },
    { number: "15+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-dark relative overflow-hidden">
        {/* Animated particles for energy effect */}
        <div className="particles-container">
          {Array.from({ length: 50 }).map((_, i) => {
            const size = Math.floor(Math.random() * 5) + 1;
            return (
              <div
                key={i}
                className={`particle particle-size-${size}`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDuration: `${Math.random() * 4 + 2}s`
                }}
              />
            );
          })}
        </div>
        
        {/* Glowing light effect behind heading */}
        <div className="glow-center"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <Zap className="h-14 w-14 text-secondary inline-block mb-4" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Transforming Ideas into
            <span className="gradient-text-blue-green"> Digital Reality</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            We specialize in app development, blockchain solutions, cryptocurrency,
            and AI/ML technologies to bring your vision to life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button size="lg" className="btn-green glow-green">
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" className="blue-border">
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={ref} className="py-24 bg-gradient-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 gradient-text-blue-green">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer cutting-edge solutions across multiple technology domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Smartphone className="h-10 w-10" />,
                title: "App Development",
                description:
                  "Custom mobile and web applications built for your specific needs",
                iconClass: "text-primary",
                borderClass: "blue-border"
              },
              {
                icon: <Database className="h-10 w-10" />,
                title: "Blockchain",
                description:
                  "Secure and scalable blockchain solutions for your business",
                iconClass: "text-secondary",
                borderClass: "green-border"
              },
              {
                icon: <Bitcoin className="h-10 w-10" />,
                title: "Cryptocurrency",
                description:
                  "Expert consulting and development for cryptocurrency projects",
                iconClass: "text-primary",
                borderClass: "blue-border"
              },
              {
                icon: <Brain className="h-10 w-10" />,
                title: "AI/ML Solutions",
                description:
                  "Intelligent solutions powered by artificial intelligence",
                iconClass: "text-secondary",
                borderClass: "green-border"
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`glass-card p-6 rounded-lg border ${service.borderClass} hover:shadow-lg transition-all`}
              >
                <div className={`${service.iconClass} mb-4`}>{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 gradient-text-green-blue">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience excellence in technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden border border-primary/20 group-hover:border-secondary/40 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10"></div>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-highlight">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-gradient-blue text-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2 text-secondary">{achievement.number}</div>
                <div className="text-primary-foreground/90">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 gradient-text-blue-green">Client Testimonials</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What our clients say about working with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-card p-6 rounded-lg border blue-border"
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 border border-secondary/50">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-secondary fill-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground">{testimonial.quote}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card/30 relative overflow-hidden">
        {/* Animated particles for energy effect */}
        <div className="particles-container-cta">
          {Array.from({ length: 20 }).map((_, i) => {
            const size = Math.floor(Math.random() * 5) + 4; // Larger particles
            return (
              <div
                key={i}
                className={`particle particle-size-${size}`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDuration: `${Math.random() * 10 + 5}s`,
                  animationName: 'float'
                }}
              />
            );
          })}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4 gradient-text-green-blue">Ready to Transform Your Business?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's work together to bring your vision to life with our cutting-edge technology solutions
            </p>
            <Button size="lg" className="btn-green glow-green">
              <Link href="/contact" className="flex items-center">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-gradient-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 gradient-text-blue-green">Our Technology Stack</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We use the latest technologies to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=300",
              "https://images.unsplash.com/photo-1649180556628-9ba704115795?auto=format&fit=crop&w=300",
              "https://images.unsplash.com/photo-1664022617645-cf71791942b9?auto=format&fit=crop&w=300",
              "https://images.unsplash.com/photo-1669023414162-8b0573b9c6b2?auto=format&fit=crop&w=300"
            ].map((image, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative h-40 rounded-lg overflow-hidden border blue-border"
              >
                <Image
                  src={image}
                  alt="Technology"
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}