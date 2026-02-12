import React from 'react';
import { CheckCircle, Layout, MessageCircle, RefreshCw, BarChart3, Apple, Dumbbell, GraduationCap, Headphones, LineChart, FileCheck, ShieldCheck, Eye, Lock, FileText } from 'lucide-react';

export const homeSwiperSlides = [
  {
    badge: 'Build Better Health',
    title: 'Health That Fits Your Real Life',
    subtitle: "Expert coaching and sustainable wellness practices designed for busy individuals and families.",
    button1: 'Start Coaching',
    to1: '/contact',
    button2: 'View E Books',
    to2: '/ebooks',
    features: [
      { icon: CheckCircle, text: 'Expert Coaching' },
      { icon: CheckCircle, text: 'Sustainable Habits' },
      { icon: CheckCircle, text: 'Real Results' }
    ],
    bgImage: "/better health_1.png",
  },
  {
    badge: 'Family Wellness',
    title: 'Stronger Families, Healthier Lives',
    subtitle: 'Align your household with practical nutrition and movement strategies that work for everyone.',
    button1: 'Family Coaching',
    to1: '/family-coaching',
    button2: 'Our Approach',
    to2: '/contact',
    features: [
      { icon: CheckCircle, text: 'Household Alignment' },
      { icon: CheckCircle, text: 'Practical Nutrition' },
      { icon: CheckCircle, text: 'Shared Success' }
    ],
    bgImage: "https://images.unsplash.com/photo-1608138278561-4b1ade407411?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWN0aXZlJTIwbGlmZXN0eWxlfGVufDB8fDB8fHww",
  },
  {
    badge: 'Digital Tools',
    title: 'Your Progress, In Your Pocket',
    subtitle: 'Track your training, nutrition, and habits with our dedicated app designed for long-term consistency.',
    button1: 'Download App',
    to1: '/contact',
    button2: 'Learn More',
    to2: '/faq',
    features: [
      { icon: CheckCircle, text: 'Habit Tracking' },
      { icon: CheckCircle, text: 'Nutrition Logs' },
      { icon: CheckCircle, text: 'Training Plans' }
    ],
    bgImage: "/better_health.jpg",
  },
  {
    badge: 'Coaching Support',
    title: 'Expert Support, Every Step',
    subtitle: 'Access professional guidance and evidence-based strategies tailored to your unique lifestyle and goals.',
    button1: 'Meet the Coach',
    to1: '/contact',
    button2: 'Success Stories',
    to2: '/#transformations',
    features: [
      { icon: CheckCircle, text: 'Direct Support' },
      { icon: CheckCircle, text: 'Expert Guidance' },
      { icon: CheckCircle, text: 'Proven Results' }
    ],
    bgImage: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWN0aXZlJTIwbGlmZXN0eWxlfGVufDB8fDB8fHww",
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
    description: "Your plan evolves as your life does no rigid rules, no unnecessary stress."
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
    description: "Simple, flexible nutrition guidance tailored to you."
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
    "We focus on creating clear systems around nutrition, movement, and daily habits so progress feels achievable and sustainable.",
    "No gimmicks. No pressure. Just a practical approach you can maintain long-term."
  ],
  points: [
    "Sustainable Systems",
    "Evidence-Based Methods",
    "Practical Strategies",
    "Supportive Environment"
  ],
  image: "https://plus.unsplash.com/premium_photo-1667762241847-37471e8c8bc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SGVhbHRofGVufDB8fDB8fHww"
};

export const homeAppData = {
  badge: "The App",
  title: "Your Coaching,",
  highlightText: "Simplified",
  description: "The Better Health Project app keeps everything in one place so daily habits stay simple and consistent. Track progress, follow your plan, and stay connected with your coach, all from your phone.",
  image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
};

export const homeTransformations = [
  {
    id: 1,
    name: 'Sarah M.',
    program: 'Nutrition Coaching',
    location: 'London, UK',
    image: 'https://media.istockphoto.com/id/514518416/photo/tracking-her-progress.jpg?s=612x612&w=0&k=20&c=brCYthdPZk-A9LN8NNbfzJFwg5iGKPF-CKI6obS86zY=',
    quote: "Better Health Project completely changed my approach to nutrition. I no longer feel overwhelmed by complex diets. The support is incredible!",
    programs: 'Nutrition Coaching',
    status: "Achieved",
    rating: 5
  },
  {
    id: 2,
    name: ' Thompson',
    program: 'Family Wellness',
    location: 'Manchester, UK',
    image: 'https://www.thebodytransformationacademy.com/uploads/7/4/4/9/74499561/img-0252_orig.jpg',
    quote: "Family coaching helped us align our health goals. We now enjoy active weekends together and eat much better as a household. It's been a game changer.",
    programs: 'Family Wellness',
    status: "Achieved",
    rating: 5
  },
 
  {
    id: 4,
    name: 'Emma R.',
    program: 'Habit Coaching',
    location: 'Bristol, UK',
    image: 'https://www.shutterstock.com/image-photo/woman-posing-before-after-weight-600nw-1866911131.jpg',
    quote: "The habit coaching made the WIC application process so easy and stress-free! I feel more in control of my daily routine than ever before.",
    programs: 'Habit Coaching',
    status: "Achieved",
    rating: 5
  },
  {
    id: 5,
    name: 'Michael K.',
    program: 'Strength & Conditioning',
    location: 'Leeds, UK',
    image: 'https://media.istockphoto.com/id/521790411/photo/proud-of-all-my-hard-work.jpg?s=612x612&w=0&k=20&c=OTY4M1f50suFYBuykM78RCnmw726hqCGB1NyuKzf4dU=',
    quote: "The program provided the discipline and structure I needed. Seeing the physical results every week kept me motivated to push harder.",
    programs: 'Strength & Conditioning',
    status: "Achieved",
    rating: 5
  }
];

export const homeCTAData = {
  badge: "Next Steps",
  title: "Ready to Start",
  highlightText: "Your Journey?",
  description: "Whether you're looking for coaching, family health support, or practical guides, we have everything you need to build health that lasts.",
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

export const homeTimelineHeader = {
  badge: "Our Process",
  title: "The Journey to",
  highlightText: "Better Health",
  description: "A seamless, guided experience designed to ensure your long-term success."
};

export const homeTimelineData = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "We start with a deep dive into your goals, lifestyle, and current habits to build your foundation.",
    icon: <MessageCircle className="text-primary-light" />
  },
  {
    step: "02",
    title: "Personalised Plan",
    description: "Receive your custom nutrition and training strategy, fully integrated into the BHP app.",
    icon: <Layout className="text-primary-light" />
  },
  {
    step: "03",
    title: "Guided Implementation",
    description: "Start your journey with daily habit tracking and direct support from your coach.",
    icon: <RefreshCw className="text-primary-light" />
  },
  {
    step: "04",
    title: "Sustain & Evolve",
    description: "Regular check-ins ensure your plan adapts as you progress toward long-term health.",
    icon: <BarChart3 className="text-primary-light" />
  }
];

export const carouselSlides = [
  {
    id: 1,
    title: "Expert Consultation",
    description: "Deep dive into your goals and lifestyle to build a solid foundation.",
    image: "/better health_1.png",
    icon: <MessageCircle className="w-12 h-12 md:w-14 md:h-14 text-white" />,
    gradient: "from-blue-500/30 to-purple-500/30",
    bgColor: "bg-blue-500"
  },
  {
    id: 2,
    title: "Personalised Planning",
    description: "Custom nutrition and training strategy built specifically for you.",
    image: "https://plus.unsplash.com/premium_photo-1661699540413-2390093cfb29?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <Layout className="w-12 h-12 md:w-14 md:h-14 text-white" />,
    gradient: "from-green-500/30 to-emerald-500/30",
    bgColor: "bg-green-500"
  },
  {
    id: 3,
    title: "Digital Tools",
    description: "Daily habit tracking and direct support via our dedicated app.",
    image: "/better_health.jpg",
    icon: <RefreshCw className="w-12 h-12 md:w-14 md:h-14 text-white" />,
    gradient: "from-amber-500/30 to-orange-500/30",
    bgColor: "bg-amber-500"
  }
];
