"use client";

import { useState } from 'react';
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

  const [activeCategory, setActiveCategory] = useState('All Projects');

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const categories = [
    'All Projects',
    'Mobile App',
    'Websites'
  ];

  const projects = [
    {
      title: "Limeroad",
      category: "Mobile App",
      description: "A comprehensive mobile shopping application with personalized recommendations",
      image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=800",
      tags: ["React Native", "Node.js", "MongoDB"],
      link: "https://www.limeroad.com"
    },
    {
      title: "Fab Hotel",
      category: "Mobile App",
      description: "Hotel booking and management application for budget stays across India",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800",
      tags: ["React Native", "GraphQL", "Firebase"],
      link: "https://www.fabhotels.com"
    },
    {
      title: "Drinkswa",
      category: "Websites",
      description: "E-commerce website for premium beverages and spirits",
      image: "https://drinkswa.com/cdn/shop/files/Homepage_Desktop_Banner_2_1920x582_crop_center.jpg?v=1726646940",
      tags: ["React", "Next.js", "Tailwind CSS"],
      link: "https://www.drinkswa.com"
    },
    {
      title: "Safari Bags",
      category: "Websites",
      description: "E-commerce platform for high-quality travel bags and accessories",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800",
      tags: ["Vue.js", "Node.js", "MongoDB"],
      link: "https://www.safaribags.com"
    },
    {
      title: "Plixlife",
      category: "Websites",
      description: "Health and wellness products e-commerce platform with subscription services",
      image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?auto=format&fit=crop&w=800",
      tags: ["React", "Express", "PostgreSQL"],
      link: "https://www.plixlife.com"
    },
    {
      title: "Hireavilla",
      category: "Websites",
      description: "Luxury villa rental and booking platform with global listings",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800",
      tags: ["React", "Node.js", "MongoDB"],
      link: "https://www.hireavilla.com"
    },
    {
      title: "Forest Essentials India",
      category: "Websites",
      description: "E-commerce website for luxury Ayurvedic beauty products",
      image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?auto=format&fit=crop&w=800",
      tags: ["Shopify", "Liquid", "JavaScript"],
      link: "https://www.forestessentialsindia.com"
    },
    {
      title: "Dhani",
      category: "Websites",
      description: "Financial services and healthcare platform",
      image: "https://images.unsplash.com/photo-1589758438368-0ad531db3366?auto=format&fit=crop&w=800",
      tags: ["React", "Node.js", "MySQL"],
      link: "https://www.dhani.com"
    },
    {
      title: "Apollo Tyres",
      category: "Websites",
      description: "Corporate website for one of India's leading tire manufacturers",
      image: "https://images.unsplash.com/photo-1518987048-93e29699e79a?auto=format&fit=crop&w=800",
      tags: ["WordPress", "PHP", "JavaScript"],
      link: "https://www.apollotyres.com"
    },
    {
      title: "MPIL",
      category: "Websites",
      description: "Corporate website for manufacturing and industrial solutions",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800",
      tags: ["WordPress", "PHP", "Bootstrap"],
      link: "https://mpillwellness.com/"
    },
    {
      title: "Lotus",
      category: "Websites",
      description: "E-commerce website for herbal beauty and skincare products",
      image: "https://cdn.shopify.com/s/files/1/0428/8063/0937/files/Ubtan_842x337_copy.jpg?v=1703068287",
      tags: ["Shopify", "JavaScript", "CSS"],
      link: "https://www.lotusherbals.com"
    }
  ];

  const filteredProjects = activeCategory === 'All Projects' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-dark relative overflow-hidden">
        {/* Animated particles for energy effect */}
        <div className="particles-container">
          {Array.from({ length: 30 }).map((_, i) => {
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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text-blue-green">Our Portfolio</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Showcasing our best work in app development, blockchain, cryptocurrency, and AI/ML
            </p>
            <Button size="lg" className="btn-green glow-green" asChild>
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={activeCategory === category ? "btn-green" : "blue-border"}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section ref={ref} className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-card rounded-lg overflow-hidden border hover:shadow-lg transition-all group"
              >
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  <div className="relative h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                      <span className="text-white font-medium px-4 py-2 rounded-full bg-primary/80 text-sm">View Project</span>
                    </div>
                  </div>
                </Link>
                <div className="p-6">
                  <div className="text-sm text-secondary mb-2">{project.category}</div>
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
      
      {/* CTA Section */}
      <section className="py-24 bg-card/30 relative overflow-hidden">
        {/* Animated particles for energy effect */}
        <div className="particles-container-cta">
          {Array.from({ length: 15 }).map((_, i) => {
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
            <h2 className="text-3xl font-bold mb-4 gradient-text-green-blue">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's work together to bring your ideas to life with cutting-edge technologies
            </p>
            <Button size="lg" className="btn-green glow-green">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}