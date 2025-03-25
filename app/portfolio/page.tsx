"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const projects = [
    {
      title: "CryptoTrader Pro",
      category: "Cryptocurrency",
      description: "Advanced cryptocurrency trading platform with real-time analytics",
      image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&w=800",
      tags: ["Blockchain", "React", "Node.js"],
    },
    {
      title: "AI Health Assistant",
      category: "AI/ML",
      description: "Healthcare assistant powered by machine learning",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800",
      tags: ["Python", "TensorFlow", "React Native"],
    },
    {
      title: "SmartChain Solutions",
      category: "Blockchain",
      description: "Enterprise blockchain platform for supply chain management",
      image: "https://images.unsplash.com/photo-1561414927-6d86591d0c4f?auto=format&fit=crop&w=800",
      tags: ["Solidity", "Ethereum", "Web3"],
    },
    {
      title: "FitnessPal AI",
      category: "Mobile App",
      description: "AI-powered personal fitness coaching app",
      image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=800",
      tags: ["Flutter", "Firebase", "TensorFlow Lite"],
    },
    {
      title: "DeFi Exchange",
      category: "Cryptocurrency",
      description: "Decentralized exchange platform with advanced trading features",
      image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&w=800",
      tags: ["Solidity", "React", "Web3"],
    },
    {
      title: "Smart City Platform",
      category: "IoT/AI",
      description: "IoT platform for smart city management using AI",
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=800",
      tags: ["IoT", "Python", "TensorFlow"],
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Showcasing our best work in app development, blockchain, cryptocurrency, and AI/ML
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group rounded-lg overflow-hidden border bg-card hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary mb-2">{project.category}</div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}