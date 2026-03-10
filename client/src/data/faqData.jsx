import React from 'react';
import { HelpCircle, Shield, Users, MessageCircle } from 'lucide-react';

export const faqs = [
  {
    question: "How much time does this actually take?",
    answer: "About 20-30 minutes a day. Twenty for your workout, ten to check your meal plan. Most clients fit this in before the kids wake up or during lunch."
  },
  {
    question: "Can I eat the foods I like?",
    answer: "Yeah, 100 percent. No elimination diets, no cutting out carbs or dessert. Real food, real portions. You lose weight eating what you actually enjoy, which means you'll actually stick to it."
  },
  {
    question: "What if I've never trained before?",
    answer: "Perfect position to be in. No bad habits to unlearn. Week one through four, we build your foundation. By week five, your body's ready for more. Most beginners see the fastest results because everything is new stimulus."
  },
  {
    question: "How quickly will I see results?",
    answer: "Two weeks: energy shift and clothes fit different. Week four: down 2-3kg. Week twelve: down 5kg, stronger, athletic again. If you follow the plan, you'll see results. If you don't, we extend your coaching free. That's the guarantee."
  },
  {
    question: "What happens after the 12 weeks?",
    answer: "You've got momentum and you know the system. Some people want to keep going. Some are happy and just want maintenance. It's your call. Twelve weeks gets you the result. What you do after is up to you."
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
    bgImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1600&auto=format&fit=crop&q=75',
    button1: "Common Questions",
    to1: "/faq",
    button2: "Get In Touch",
    to2: "/contact"
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
    bgImage: 'https://images.unsplash.com/photo-1557425955-df376b5903c8?w=1600&auto=format&fit=crop&q=75',
    button1: "Our Approach",
    to1: "/contact",
    button2: "Read FAQs",
    to2: "/faq"
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
    bgImage: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1600&auto=format&fit=crop&q=75',
    button1: "Family Coaching",
    to1: "/family-coaching",
    button2: "Learn More",
    to2: "/contact"
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
    to1: "/contact",
    button2: "Join Now",
    to2: "/contact"
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
