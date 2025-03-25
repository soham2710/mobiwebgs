"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Smartphone, 
  Database, 
  Brain, 
  Bitcoin,
  Code,
  Globe,
  Shield,
  Cpu,
  Cloud,
  LineChart,
  Layers,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const services = [
    {
      category: "App Development",
      icon: <Smartphone className="h-12 w-12" />,
      services: [
        { icon: <Code />, name: "Mobile App Development", description: "Native and cross-platform mobile applications" },
        { icon: <Globe />, name: "Web Development", description: "Responsive and progressive web applications" },
        { icon: <Shield />, name: "Security Solutions", description: "Secure and scalable application architecture" },
      ],
    },
    {
      category: "Blockchain",
      icon: <Database className="h-12 w-12" />,
      services: [
        { icon: <Layers />, name: "Smart Contracts", description: "Secure and efficient smart contract development" },
        { icon: <Shield />, name: "DeFi Solutions", description: "Decentralized finance applications and protocols" },
        { icon: <Cloud />, name: "Private Blockchains", description: "Custom blockchain solutions for enterprises" },
      ],
    },
    {
      category: "Cryptocurrency",
      icon: <Bitcoin className="h-12 w-12" />,
      services: [
        { icon: <LineChart />, name: "Trading Platforms", description: "Cryptocurrency exchange and trading solutions" },
        { icon: <Shield />, name: "Wallet Development", description: "Secure cryptocurrency wallet applications" },
        { icon: <Zap />, name: "Payment Integration", description: "Crypto payment gateway integration" },
      ],
    },
    {
      category: "AI/ML Solutions",
      icon: <Brain className="h-12 w-12" />,
      services: [
        { icon: <Cpu />, name: "Machine Learning", description: "Custom ML models and algorithms" },
        { icon: <Brain />, name: "Natural Language Processing", description: "Text analysis and language processing" },
        { icon: <LineChart />, name: "Predictive Analytics", description: "Data-driven insights and predictions" },
      ],
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Comprehensive technology solutions tailored to your business needs
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {services.map((category, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="flex items-center mb-8">
                  <div className="text-primary mr-4">{category.icon}</div>
                  <h2 className="text-3xl font-bold">{category.category}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      variants={fadeIn}
                      transition={{ duration: 0.8, delay: (index * 0.2) + (serviceIndex * 0.1) }}
                      className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
                    >
                      <div className="text-primary mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}