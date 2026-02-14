import React from 'react';
import { BookOpen, Zap, Target, ShieldCheck, Download, PenTool, Layout } from 'lucide-react';

export const ebooks = [
  {
    id: 1,
    title: "The Foundations of Better Health",
    price: "£19",
    description: "A simple, step-by-step guide to building sustainable health habits. This e-book focuses on the fundamentals that create long-term results without overwhelm.",
    details: "You’ll learn how to structure nutrition, movement, and daily routines in a way that actually lasts.",
    whoItIsFor: [
      "Anyone starting their health journey",
      "People who feel overwhelmed by conflicting advice",
      "Those looking for simple, sustainable habits",
      "Busy individuals who want clarity, not complexity"
    ],
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Healthy Habits for Busy Families",
    price: "£24",
    description: "A practical guide for families who want better health without added stress. This e-book shows you how to create routines, meals, and habits that work for the entire household.",
    details: "Designed for real family life not perfect schedules.",
    whoItIsFor: [
      "Parents with busy schedules",
      "Families struggling with consistency",
      "Households wanting to eat better together",
      "Parents looking to set positive habits early"
    ],
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Simple Nutrition Without the Noise",
    price: "£17",
    description: "Cut through the confusion around nutrition. This e-book breaks down what actually matters, how to build balanced meals, and how to eat well without restriction or guilt.",
    details: "No trends. No extremes. Just clarity.",
    whoItIsFor: [
      "Anyone confused by nutrition advice",
      "People tired of dieting cycles",
      "Those wanting a flexible, realistic approach to food",
      "Beginners and intermediates alike"
    ],
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export const ebookSwiperSlides = [
  {
    id: 1,
    badge: (
      <span className="flex items-center gap-1">
        <BookOpen size={14} />
        Practical Health Guides
      </span>
    ),
    title: "Simple. Actionable. Practical.",
    subtitle: "Our e-books are designed to give you clarity, structure, and tools you can use immediately. No fluff. No extreme rules. Just practical guidance.",
    bgImage: '/ebook.png',
    button1: "View Library",
    to1: "/ebooks",
    button2: "Learn More",
    to2: "/faq"
  },
  {
    id: 2,
    badge: (
      <span className="flex items-center gap-1">
        <Zap size={14} />
        Instant Access
      </span>
    ),
    title: "Clarity That Fits Real Life",
    subtitle: "Cut through the noise with step-by-step guides that focus on the fundamentals of sustainable health and habits.",
    bgImage: '/ebook1.png',
    button1: "Buy Now",
    to1: "/ebooks",
    button2: "Our Methods",
    to2: "/contact"
  },
  {
    id: 3,
    badge: (
      <span className="flex items-center gap-1">
        <Target size={14} />
        Goal Focused
      </span>
    ),
    title: "Strategies for Long-Term Success",
    subtitle: "Learn how to set systems that work for your schedule. Our guides help you build consistency without the burnout.",
    bgImage: 'https://images.unsplash.com/photo-1609895720459-394a6a8c99ed?w=1600&auto=format&fit=crop&q=75',
    button1: "Explore Guides",
    to1: "/ebooks",
    button2: "See Results",
    to2: "/contact"
  },
  {
    id: 4,
    badge: (
      <span className="flex items-center gap-1">
        <Layout size={14} />
        Comprehensive
      </span>
    ),
    title: "All the Tools You Need",
    subtitle: "From nutrition fundamentals to family routines, our e-book collection covers every aspect of building a better health project.",
    bgImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1600&auto=format&fit=crop&q=75',
    button1: "Get the Bundle",
    to1: "/ebooks",
    button2: "Contact Us",
    to2: "/contact"
  }
];

export const ebookGridData = {
  badge: "Shop",
  title: "Available",
  highlightText: "E-Books",
  description: "Get instant access to our practical guides and start your journey to better health today."
};

export const ebookComingSoonData = {
  badge: "More Coming Soon",
  title: "This library will",
  highlightText: "continue to grow",
  description: "We are constantly developing new guides focused on the topics that matter most to your long-term success.",
  waitlistText: "Check back regularly for new releases."
};

export const ebookHowItWorksData = {
  badge: "Process",
  title: "How It",
  highlightText: "Works",
  description: "Getting started with our digital guides is simple and instant."
};

export const ebookComingSoonTopics = [
  "Advanced Fat Loss Strategies",
  "Family-Friendly Meal Prep",
  "Strength Training Fundamentals",
  "Habit Architecture for Busy Professionals",
  "Gut Health and Immunity",
  "Mindset and Performance"
];

export const ebookHowItWorksSteps = [
  {
    icon: <Download className="text-primary" size={32} />,
    title: "Initial consultation call",
    description: "We start with a deep dive into your goals, lifestyle, and current habits to get a clear understanding about your starting point."
  },
  {
    icon: <BookOpen className="text-primary" size={32} />,
    title: "Personalised plan",
    description: "Receive your custom nutrition and training strategy, fully integrated into the BHP app."
  },
  {
    icon: <PenTool className="text-primary" size={32} />,
    title: "Guided implementation",
    description: "Start your journey with daily habit tracking and direct support from your coach and our thriving community."
  },
  {
    icon: <Layout className="text-primary" size={32} />,
    title: "Sustain and evolve",
    description: "Regular check ins ensure your plan adapts as you progress towards long term health."
  }
];
