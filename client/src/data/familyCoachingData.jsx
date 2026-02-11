import React from 'react';
import { 
  Users, Heart, Sparkles, CheckCircle, 
  Clock, Baby, Target, Zap, 
  Users2, GraduationCap, Lightbulb, LineChart,
  Utensils, Activity, Calendar, Share2
} from 'lucide-react';

export const familySwiperSlides = [
  {
    id: 1,
    badge: (
      <span className="flex items-center gap-1">
        <Users size={14} />
        Family Coaching
      </span>
    ),
    title: "Healthy Families",
    subtitle: "Personalised health support for the entire household. Everyone moves forward with clarity and structure.",
    bgImage: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80&fm=webp',
    button1: "Join Family Coaching",
    button2: "Enquire Now"
  },
  {
    id: 2,
    badge: (
      <span className="flex items-center gap-1">
        <Heart size={14} />
        Sustainable Habits
      </span>
    ),
    title: "Real Life Health",
    subtitle: "No extreme rules or separate plans. Just a practical framework your family can actually stick to.",
    bgImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80&fm=webp',
    button1: "Explore Programs",
    button2: "Learn More"
  },
  {
    id: 3,
    badge: (
      <span className="flex items-center gap-1">
        <Sparkles size={14} />
        Shared Progress
      </span>
    ),
    title: "Unified Approach",
    subtitle: "Nutrition and routines that work for all ages, from parents to children, under one plan.",
    bgImage: 'https://images.unsplash.com/photo-1484981138541-3d074aa97716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80&fm=webp',
    button1: "Start Journey",
    button2: "Our Methods"
  },
  {
    id: 4,
    badge: (
      <span className="flex items-center gap-1">
        <CheckCircle size={14} />
        Lasting Change
      </span>
    ),
    title: "Early Habits",
    subtitle: "Set your children up for success by creating structure and understanding around health today.",
    bgImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80&fm=webp',
    button1: "Join Us",
    button2: "Read Stories"
  }
];

export const familyHowItWorksSteps = [
  {
    number: "01",
    title: "Family Assessment",
    description: "We take time to understand your household — routines, schedules, preferences, and goals."
  },
  {
    number: "02",
    title: "Personalised Family Plan",
    description: "You receive a tailored plan covering nutrition, training, and lifestyle habits that fit your family’s reality."
  },
  {
    number: "03",
    title: "Ongoing Support",
    description: "Regular check-ins, guidance, and adjustments ensure everyone stays on track without pressure."
  },
  {
    number: "04",
    title: "Accountability & Education",
    description: "We focus on teaching your family why things work."
  }
];

export const familyScenarios = [
  {
    icon: <Clock className="text-primary" />,
    title: "Busy Parents",
    description: "Simplify meals and routines so health fits your limited schedule naturally.",
    bgImage: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80&fm=webp'
  },
  {
    icon: <Baby className="text-primary" />,
    title: "Young Children",
    description: "Build healthy habits early without the constant negotiation.",
    bgImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80&fm=webp'
  },
  {
    icon: <Target className="text-primary" />,
    title: "Different Goals",
    description: "Align individual targets like fat loss or energy under one practical family plan.",
    bgImage: 'https://images.unsplash.com/photo-1484981138541-3d074aa97716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80&fm=webp'
  },
  {
    icon: <Zap className="text-primary" />,
    title: "Inconsistent Routines",
    description: "Build systems that keep your family moving forward.",
    bgImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80&fm=webp'
  }
];

export const familyWhyDifferent = [
  {
    icon: <Users2 className="text-primary" size={32} />,
    title: "Unified Direction",
    description: "Instead of one person changing alone, we align the entire household's habits."
  },
  {
    icon: <GraduationCap className="text-primary" size={32} />,
    title: "Household Education",
    description: "We teach everyone the 'why' behind nutrition and movement in a way that makes sense."
  },
  {
    icon: <Lightbulb className="text-primary" size={32} />,
    title: "Practical Systems",
    description: "We build routines that fit your family's real schedule, not a perfect scenario."
  },
  {
    icon: <LineChart className="text-primary" size={32} />,
    title: "Long-Term Change",
    description: "We focus on building a culture of health that lasts for years, not just weeks."
  }
];

export const familyWhatIsData = {
  badge: "Programs",
  title: "What Family",
  highlightText: "Coaching Is",
  description: "Family coaching focuses on building sustainable habits that work for everyone in the home. No extreme rules. No separate plans. Just a clear, practical framework."
};

export const familyWhoForData = {
  badge: "Suitability",
  title: "Who Is This",
  highlightText: "For?",
  description: "Our family coaching is designed for households that want to prioritize health together.",
  image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
};

export const familyWhyDifferentData = {
  badge: "Our Approach",
  title: "Why This Is",
  highlightText: "Different",
  description: "Most health plans fail because they don't account for real family life. We do."
};

export const familyScenariosData = {
  badge: "Scenarios",
  title: "Does This Sound",
  highlightText: "Like You?",
  description: "Common challenges that our family coaching helps you overcome."
};

export const familyHowItWorksData = {
  badge: "Process",
  title: "How It",
  highlightText: "Works",
  description: "A clear, structured path to better health for your entire family."
};

export const familyCTAData = {
  badge: "Next Steps",
  title: "Ready to Lead Your",
  highlightText: "Family?",
  description: "Join our community of families making health a priority. Let's build a plan that works for you.",
  primaryButton: {
    text: "Join Family Coaching",
    link: "/contact"
  },
  secondaryButton: {
    text: "Enquire to Learn More",
    link: "/contact"
  }
};

export const familyWhoForPoints = [
  {
    title: "Busy Parents",
    description: "Who want to lead by example and simplify family nutrition."
  },
  {
    title: "Active Households",
    description: "Who need a clear plan to balance busy schedules with health goals."
  },
  {
    title: "Health-Conscious Families",
    description: "Who want a structured approach to wellness that involves everyone."
  }
];

export const familyWhatIsFeatures = [
  {
    icon: <Utensils className="text-primary" size={24} />,
    title: "Nutrition for all ages",
    description: "Simple, healthy meals that work for the whole household without cooking multiple dishes."
  },
  {
    icon: <Activity className="text-primary" size={24} />,
    title: "Flexible Movement",
    description: "Training and activity that fits into busy family schedules and varying fitness levels."
  },
  {
    icon: <Calendar className="text-primary" size={24} />,
    title: "Shared Routines",
    description: "Healthy systems that everyone understands, follows, and maintains together."
  },
  {
    icon: <Share2 className="text-primary" size={24} />,
    title: "Long-term Wellbeing",
    description: "A shared approach to health that ensures sustainable progress for the entire home."
  }
];
