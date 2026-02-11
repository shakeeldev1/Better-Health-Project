import React from 'react';
import { HelpCircle, Shield, Users, MessageCircle } from 'lucide-react';

export const faqs = [
  {
    question: "What is Better Health Project?",
    answer: "Better Health Project is a personalised coaching platform designed to help individuals and families build sustainable health habits through nutrition, training, education, and ongoing support. This isn’t a one-size-fits-all program — everything is tailored to real life."
  },
  {
    question: "Who is this coaching for?",
    answer: "Our coaching is for individuals and families who want long-term health improvements without extreme rules or short-term fixes. It’s especially suited for: Busy adults and parents, Families wanting consistent routines, and People who have struggled to stay consistent in the past."
  },
  {
    question: "Do I need to be “fit” to start?",
    answer: "Not at all. Our coaching is designed for all starting points. Whether you’re new to training or returning after time away, your plan is built around your current ability."
  },
  {
    question: "What does the coaching include?",
    answer: "Depending on the program, coaching may include: Personalised nutrition guidance, Training programs, Education and habit coaching, Ongoing support and accountability, and Progress tracking through our app. Everything is structured to be clear, manageable, and sustainable."
  },
  {
    question: "How does family coaching work?",
    answer: "Family coaching supports the entire household with one clear, practical approach. We help families align nutrition, routines, and movement so everyone is working toward better health together — without separate plans or added stress."
  },
  {
    question: "How is this different from other programs?",
    answer: "Most programs focus on short-term results or rigid plans. Better Health Project focuses on: Education over restriction, Systems over motivation, Long-term habits over quick fixes, and Support that adapts to real life."
  },
  {
    question: "How long does it take to see results?",
    answer: "Results vary depending on consistency, lifestyle, and starting point. Many clients notice improvements in energy, structure, and habits within the first few weeks, with physical results building over time."
  },
  {
    question: "Is there a minimum commitment?",
    answer: "Some coaching options require a minimum commitment to allow enough time for meaningful progress. Any commitment details are made clear before you join."
  },
  {
    question: "How much does it cost?",
    answer: "Pricing depends on the coaching option you choose. Full pricing details are provided before purchase, with no hidden fees."
  },
  {
    question: "Can I use the app without coaching?",
    answer: "The app is designed to support active coaching clients. Some resources and tools may be available independently, but the full experience works best alongside coaching."
  },
  {
    question: "What if I have more questions?",
    answer: "If you still have questions or want to talk through your options, you can contact us directly. We’re happy to help you decide if Better Health Project is the right fit."
  }
];

export const faqSwiperSlides = [
  {
    id: 1,
    badge: (
      <span className="flex items-center gap-1">
        <HelpCircle size={14} />
        Frequently Asked Questions
      </span>
    ),
    title: "Everything You Need to Know",
    subtitle: "We know starting something new comes with questions. Below you’ll find clear, honest answers to the most common ones we receive.",
    bgImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    button1: "Common Questions",
    button2: "Get In Touch"
  },
  
  {
    id: 2,
    badge: (
      <span className="flex items-center gap-1">
        <Shield size={14} />
        Sustainable Habits
      </span>
    ),
    title: "Built for Your Real Life",
    subtitle: "No extreme rules or short-term fixes. We focus on education and systems that adapt to your lifestyle, ensuring long-term success.",
    bgImage: 'https://images.unsplash.com/photo-1557425955-df376b5903c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80&fm=webp',
    button1: "Our Approach",
    button2: "Read FAQs"
  },
  {
    id: 3,
    badge: (
      <span className="flex items-center gap-1">
        <Users size={14} />
        Family Support
      </span>
    ),
    title: "Healthy Families, Together",
    subtitle: "One clear, practical approach for the entire household. We help families align routines so everyone moves toward better health.",
    bgImage: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80&fm=webp',
    button1: "Family Coaching",
    button2: "Learn More"
  },
  {
    id: 4,
    badge: (
      <span className="flex items-center gap-1">
        <MessageCircle size={14} />
        Still Have Questions?
      </span>
    ),
    title: "We're Here to Help You",
    subtitle: "If you don’t see what you’re looking for, our team is ready to help you find the right path for your health journey.",
    bgImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80&fm=webp',
    button1: "Contact Us",
    button2: "Join Now"
  }
];

export const faqAccordionData = {
  badge: "FAQ",
  title: "Common",
  highlightText: "Questions",
  description: "Below you’ll find clear, honest answers to the most common ones we receive. If you don’t see what you’re looking for, feel free to get in touch."
};

export const faqCTAData = {
  badge: "Support",
  title: "Still Not",
  highlightText: "Sure?",
  description: "If you want clarity on the best next step, we're here to help you decide if Better Health Project is the right fit.",
  primaryButton: {
    text: "Read about Family Coaching",
    link: "/family-coaching"
  },
  secondaryButton: {
    text: "Get In Touch",
    link: "/contact"
  }
};
