"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Smartphone, Code, Globe, Shield, Layers, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function AppDevelopment() {
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
      icon: <Code className="h-6 w-6" />,
      title: "Custom App Development",
      description: "Tailored solutions built specifically for your business needs"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Cross-Platform Development",
      description: "Apps that work seamlessly across all devices and platforms"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Architecture",
      description: "Built-in security features to protect your data and users"
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Scalable Solutions",
      description: "Applications that grow with your business"
    }
  ];

  const processSteps = [
    {
      title: "Discovery",
      description: "Understanding your requirements and business goals"
    },
    {
      title: "Design",
      description: "Creating intuitive and engaging user interfaces"
    },
    {
      title: "Development",
      description: "Building robust and scalable applications"
    },
    {
      title: "Testing",
      description: "Ensuring quality and performance"
    },
    {
      title: "Deployment",
      description: "Launching your application securely"
    },
    {
      title: "Support",
      description: "Ongoing maintenance and updates"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">App Development Services</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Transform your ideas into powerful, scalable, and user-friendly applications
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Start Your Project</Link>
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
            <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive app development solutions tailored to your needs
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

      {/* Process Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to delivering high-quality applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Latest technologies and frameworks for robust application development
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
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your App?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's turn your vision into reality with our expert app development services
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Get Started Today</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}