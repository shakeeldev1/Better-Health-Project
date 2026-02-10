import React from 'react';
import { CheckCircle, Layout, MessageCircle, RefreshCw, BarChart3, Apple, Dumbbell, GraduationCap, Headphones, LineChart } from 'lucide-react';

export const homeSwiperSlides = [
  {
    badge: 'Build Better Health',
    title: 'Health That Fits Your Real Life',
    description: "Expert coaching and sustainable wellness practices designed for busy individuals and families.",
    button1: 'Start Coaching',
    button2: 'View E Books',
    features: [
      { icon: CheckCircle, text: 'Expert Coaching' },
      { icon: CheckCircle, text: 'Sustainable Habits' },
      { icon: CheckCircle, text: 'Real Results' }
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    badge: 'Family Wellness',
    title: 'Stronger Families, Healthier Lives',
    description: 'Align your household with practical nutrition and movement strategies that work for everyone.',
    button1: 'Family Coaching',
    button2: 'Our Approach',
    features: [
      { icon: CheckCircle, text: 'Household Alignment' },
      { icon: CheckCircle, text: 'Practical Nutrition' },
      { icon: CheckCircle, text: 'Shared Success' }
    ],
    image: "https://images.unsplash.com/photo-1545231027-63b6af0c82bf?q=80&w=2070&auto=format&fit=crop",
  },
  {
    badge: 'Digital Tools',
    title: 'Your Progress, In Your Pocket',
    description: 'Track your training, nutrition, and habits with our dedicated app designed for long-term consistency.',
    button1: 'Download App',
    button2: 'Learn More',
    features: [
      { icon: CheckCircle, text: 'Habit Tracking' },
      { icon: CheckCircle, text: 'Nutrition Logs' },
      { icon: CheckCircle, text: 'Training Plans' }
    ],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
  }
];

export const homeExpectData = {
  badge: "Coaching",
  title: "What to",
  highlightText: "Expect",
  description: "Coaching is structured, supportive, and designed for consistency."
};

export const homeIncludedData = {
  badge: "What's Included",
  title: "Everything You",
  highlightText: "Need",
  description: "Comprehensive support designed to help you build health that lasts."
};

export const homeExpectations = [
  {
    icon: <Layout className="text-primary" />,
    title: "Clear Structure",
    description: "You follow a personalised plan built around your goals, lifestyle, and schedule."
  },
  {
    icon: <MessageCircle className="text-primary" />,
    title: "Ongoing Communication",
    description: "Regular check-ins, guidance, and feedback keep you on track and supported."
  },
  {
    icon: <RefreshCw className="text-primary" />,
    title: "Support That Adapts",
    description: "Your plan evolves as your life does — no rigid rules, no unnecessary stress."
  },
  {
    icon: <BarChart3 className="text-primary" />,
    title: "Real Accountability",
    description: "We focus on progress, not perfection, with systems that help you stay consistent."
  }
];

export const homeIncludedItems = [
  {
    icon: <Apple size={24} />,
    title: "Personalised Nutrition",
    description: "Simple, flexible nutrition guidance tailored to you or your family."
  },
  {
    icon: <Dumbbell size={24} />,
    title: "Training Programs",
    description: "Structured workouts designed to fit your ability and schedule."
  },
  {
    icon: <GraduationCap size={24} />,
    title: "Education",
    description: "Learn why things work, not just what to do."
  },
  {
    icon: <Headphones size={24} />,
    title: "Ongoing Support",
    description: "Direct coaching support to guide you through challenges."
  },
  {
    icon: <LineChart size={24} />,
    title: "Progress Tracking",
    description: "Clear tracking so you can see what’s working over time."
  }
];

export const homeAppFeatures = [
  "Daily habit tracking",
  "Nutrition and training access",
  "Progress monitoring",
  "Habit reminders",
  "Direct coach communication"
];

export const homeTransformationsData = {
  badge: "Results",
  title: "Real",
  highlightText: "Transformations",
  description: "See how Better Health Project has helped others achieve their goals."
};

export const homeAboutData = {
  badge: "The Mission",
  title: "Health Without",
  highlightText: "Complexity",
  paragraphs: [
    "Better Health Project is built on a simple belief: health should work with your life, not against it.",
    "We focus on creating clear systems around nutrition, movement, and daily habits — so progress feels achievable and sustainable.",
    "No gimmicks. No pressure. Just a practical approach you can maintain long-term."
  ],
  points: [
    "Sustainable Systems",
    "Evidence-Based Methods",
    "Practical Strategies",
    "Supportive Environment"
  ],
  image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
};

export const homeAppData = {
  badge: "The App",
  title: "Your Coaching,",
  highlightText: "Simplified",
  description: "The Better Health Project app keeps everything in one place — so daily habits stay simple and consistent. Track progress, follow your plan, and stay connected with your coach, all from your phone.",
  image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
};

export const homeTransformations = [
  {
    name: "Sarah M.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    text: "Better Health Project completely changed my approach to nutrition. I no longer feel overwhelmed by complex diets."
  },
  {
    name: "The Thompson Family",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    text: "Family coaching helped us align our health goals. We now enjoy active weekends together and eat much better as a household."
  },
  {
    name: "James L.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    text: "The structured training plans and app tracking kept me consistent for the first time in years. Highly recommend!"
  }
];

export const homeCTAData = {
  badge: "Next Steps",
  title: "Ready to Start",
  highlightText: "Your Journey?",
  description: "Whether you're looking for 1:1 coaching, family health support, or practical guides, we have everything you need to build health that lasts.",
  primaryButton: {
    text: "Join Better Health Project",
    link: "/contact"
  },
  secondaryButton: {
    text: "Enquire to Get Started",
    link: "/contact"
  },
  downloadText: "Download the App"
};
