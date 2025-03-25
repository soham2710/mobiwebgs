"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Database, Shield, Link as LinkIcon, Cpu, Server, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function Blockchain() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const features = [
    {
      icon: <Database className="h-6 w-6" />,
      title: "Smart Contracts",
      description: "Secure and efficient smart contract development"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "DeFi Solutions",
      description: "Decentralized finance applications and protocols"
    },
    {
      icon: <LinkIcon className="h-6 w-6" />,
      title: "Private Blockchains",
      description: "Custom blockchain solutions for enterprises"
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Blockchain Integration",
      description: "Seamless integration with existing systems"
    }
  ];

  const solutions = [
    {
      title: "Supply Chain",
      description: "Track and verify products throughout the supply chain",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800"
    },
    {
      title: "Financial Services",
      description: "Secure and transparent financial transactions",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b2d0b9?auto=format&fit=crop&w=800"
    },
    {
      title: "Healthcare",
      description: "Secure patient data management and sharing",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800"
    }
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Blockchain Solutions</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Revolutionize your business with secure and transparent blockchain technology
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Explore Solutions</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Blockchain Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive blockchain solutions for modern businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Industry Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Blockchain applications across various industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-muted-foreground">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Technology Stack</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We use the latest blockchain technologies and frameworks
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=300",
              "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=300",
              "https://images.unsplash.com/photo-1639762681354-8df898ba8bf9?auto=format&fit=crop&w=300",
              "https://images.unsplash.com/photo-1639762681297-b1d4bc89e5c4?auto=format&fit=crop&w=300"
            ].map((image, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative h-40 rounded-lg overflow-hidden"
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

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Transform your business with our blockchain solutions
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}