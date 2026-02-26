import React from 'react';
import { 
  Users, Heart, Sparkles, CheckCircle, 
  Clock, Baby, Target, Zap, 
  Users2, GraduationCap, Lightbulb, LineChart,
  Utensils, Activity, Calendar, Share2
} from 'lucide-react';
import img1 from "../../public/1.jpg"
import img7 from "../../public/3.jpg"
import img8 from "../../public/4.jpg"
import img4 from "../../public/plan2.jpeg"
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
    bgImage: img1,
    button1: "Join Family Coaching",
    to1: "/contact",
    button2: "Enquire Now",
    to2: "/contact"
  },
  {
    id: 5,
    badge: (
      <span className="flex items-center gap-1">
        <Heart size={14} />
        Sustainable Habits
      </span>
    ),
    title: "Real Life Health",
    subtitle: "No extreme rules or separate plans. Just a practical framework your family can actually stick to.",
    bgImage:img7,
    button1: "Explore Programs",
    to1: "/contact",
    button2: "Learn More",
    to2: "/contact"
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
    bgImage: img4,
    button1: "Start Journey",
    to1: "/contact",
    button2: "Our Methods",
    to2: "/contact"
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
    bgImage: img8,
    button1: "Join Us",
    to1: "/contact",
    button2: "Read Stories",
    to2: "/contact"
  }
];

export const familyHowItWorksSteps = [
  {
    number: "01",
    title: "Family Assessment",
    description: "We take time to understand your household routines, schedules, preferences, and goals."
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
    bgImage: img4,
  },
  {
    icon: <Baby className="text-primary" />,
    title: "Young Children",
    description: "Build healthy habits early without the constant negotiation.",
    bgImage: 'http://localhost:5173/public/4.jpg'
  },
  {
    icon: <Target className="text-primary" />,
    title: "Different Goals",
    description: "Align individual targets like fat loss or energy under one practical family plan.",
    bgImage: 'http://localhost:5173/public/2.JPG'
  },
  {
    icon: <Zap className="text-primary" />,
    title: "Inconsistent Routines",
    description: "Build systems that keep your family moving forward.",
    bgImage: 'http://localhost:5173/public/footer.jpg'
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
  image: "https://plus.unsplash.com/premium_photo-1723863614145-cc14b2bca0c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
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
  description: "A clear, structured path to better health for your entire families."
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
    description: "Who want to lead by example and simplify family nutrition without spending hours in the kitchen.",
    icon: <Clock className="w-6 h-6" />,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Active Households",
    description: "Who need a clear plan to balance busy schedules, school runs, and work with shared health goals.",
    icon: <Activity className="w-6 h-6" />,
    color: "bg-orange-50 text-orange-600"
  },
  {
    title: "Health-Conscious Families",
    description: "Who want a structured approach to wellness that involves everyone and builds lasting habits.",
    icon: <Heart className="w-6 h-6" />,
    color: "bg-rose-50 text-rose-600"
  },
  {
    title: "Unified Growth",
    description: "For households that want to move away from individual diets towards a unified family health culture.",
    icon: <Users className="w-6 h-6" />,
    color: "bg-emerald-50 text-emerald-600"
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
