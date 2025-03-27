"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Zap } from 'lucide-react';
import { useForm } from 'react-hook-form';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Function to check if lazy loading is supported
  const isLazyLoadingSupported = () => {
    return typeof HTMLIFrameElement !== 'undefined' && 'loading' in HTMLIFrameElement.prototype;
  };

  // Handle map iframe loading
  useEffect(() => {
    // If browser doesn't support lazy loading
    if (!isLazyLoadingSupported() && iframeRef.current) {
      const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114584.73401898897!2d28.047241901953114!3d-26.10471995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sJohannesburg%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1647869300967!5m2!1sen!2sus";
      
      // Use Intersection Observer to load the iframe when it comes into view
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && iframeRef.current) {
            iframeRef.current.src = mapUrl;
            observer.disconnect();
          }
        });
      });
      
      observer.observe(iframeRef.current);
      
      // Cleanup
      return () => {
        if (iframeRef.current) {
          observer.unobserve(iframeRef.current);
        }
      };
    }
  }, []);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          phone: data.phone,
          subject: 'New Website Contact Form Submission',
          message: data.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Thank you! Your message has been sent successfully. We\'ll get back to you shortly.',
        });
        reset(); // Clear the form
      } else {
        setSubmitStatus({
          success: false,
          message: result.error || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        success: false,
        message: 'An unexpected error occurred. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Map URL
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114584.73401898897!2d28.047241901953114!3d-26.10471995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sJohannesburg%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1647869300967!5m2!1sen!2sus";

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text-blue-green">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our technology solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={ref} className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 gradient-text-green-blue">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Reach out to us for any inquiries about our services or to discuss your project
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-primary/10 mr-5">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:sales@mobiwebgs.com" className="hover:text-secondary transition-colors">
                        sales@mobiwebgs.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-primary/10 mr-5">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+27111234567" className="hover:text-secondary transition-colors">
                        +27 11 123 4567
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-primary/10 mr-5">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      123 Business Avenue<br />
                      Johannesburg, 2000
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="pt-8">
                <div className="glass-card p-6 border blue-border">
                  <div className="flex items-center mb-4">
                    <Zap className="h-6 w-6 text-secondary mr-3" />
                    <h3 className="text-xl font-semibold">Quick Response</h3>
                  </div>
                  <p className="text-muted-foreground">
                    We pride ourselves on responding to all inquiries within 24 hours.
                    Fill out the form, and our team will get back to you as soon as possible.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card p-8 rounded-lg border blue-border"
            >
              {/* Status Notification */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-6 p-4 rounded-md flex items-start ${
                    submitStatus.success 
                      ? 'bg-secondary/10 text-secondary border border-secondary/20' 
                      : 'bg-red-500/10 text-red-500 border border-red-500/20'
                  }`}
                >
                  {submitStatus.success ? (
                    <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                  )}
                  <p>{submitStatus.message}</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input 
                      {...register('firstName', { required: 'First name is required' })}
                      placeholder="John" 
                      className={errors.firstName ? 'border-red-500' : 'border-primary/20 focus:border-secondary'}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input 
                      {...register('lastName', { required: 'Last name is required' })}
                      placeholder="Doe" 
                      className={errors.lastName ? 'border-red-500' : 'border-primary/20 focus:border-secondary'}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Please enter a valid email address',
                      },
                    })}
                    className={errors.email ? 'border-red-500' : 'border-primary/20 focus:border-secondary'}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <Input 
                    placeholder="+1 (555) 123-4567"
                    {...register('phone')}
                    className="border-primary/20 focus:border-secondary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    placeholder="Tell us about your project..."
                    className={`min-h-[150px] ${errors.message ? 'border-red-500' : 'border-primary/20 focus:border-secondary'}`}
                    {...register('message', {
                      required: 'Message is required',
                      minLength: {
                        value: 10,
                        message: 'Message should be at least 10 characters',
                      },
                    })}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full btn-green glow-green"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⊚</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-4 border blue-border rounded-lg overflow-hidden h-[400px]">
            <iframe 
              ref={iframeRef}
              src={isLazyLoadingSupported() ? mapUrl : undefined}
              width="100%" 
              height="100%" 
              className="rounded-md"
              style={{border: 0}}
              loading={isLazyLoadingSupported() ? "lazy" : undefined}
              title="MobiWebGS Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}