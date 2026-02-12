import React from 'react';
import { 
  Phone, Mail, MapPin, 
  CheckCircle, ShieldCheck, Clock, Heart, Users,
  Users2, GraduationCap, Lightbulb, LineChart
} from 'lucide-react';

export const contactSwiperSlides = [
  {
    id: 1,
    badge: (
      <span className="flex items-center gap-2">
        <Mail size={14} />
        Contact Us
      </span>
    ),
    title: "How Can We",
    highlightText: "Help?",
    description: "Whether you have questions about family coaching, e-books, or starting your own journey, we're here to provide clarity.",
    bgImage: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1600&auto=format&fit=crop&q=75",
    button1: "Get in Touch",
    to1: "/contact",
    button2: "Our Services",
    to2: "/family-coaching"
  },
  {
    id: 2,
    badge: (
      <span className="flex items-center gap-2">
        <Phone size={14} />
        Free Consultation
      </span>
    ),
    title: "Book Your Free",
    highlightText: "Discovery Call",
    description: "Ready to take the first step? Book a free 15-minute consultation to discuss your goals and how we can help you build health that lasts.",
    bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&auto=format&fit=crop&q=75",
    button1: "Book Now",
    to1: "/contact",
    button2: "FAQs",
    to2: "/faq"
  },
  {
    id: 3,
    badge: (
      <span className="flex items-center gap-2">
        <Users size={14} />
        Community Support
      </span>
    ),
    title: "Join the Better Health",
    highlightText: "Project Community",
    description: "Connect with like-minded individuals and families on a mission to improve their health sustainably.",
    bgImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&auto=format&fit=crop&q=75",
    button1: "Join Now",
    to1: "/contact",
    button2: "Our Story",
    to2: "/"
  },
  {
    id: 4,
    badge: (
      <span className="flex items-center gap-2">
        <GraduationCap size={14} />
        Expert Guidance
      </span>
    ),
    title: "Expert Advice,",
    highlightText: "Proven Results",
    description: "Get access to evidence-based strategies and professional support tailored to your unique lifestyle and goals.",
    bgImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1600&auto=format&fit=crop&q=75",
    button1: "Meet the Coach",
    to1: "/contact",
    button2: "Success Stories",
    to2: "/#transformations"
  }
];

export const contactConsultationData = {
  badge: "Free Consultations",
  title: "Ready to transform your",
  highlightText: "health journey?",
  description: "Book a free 15-minute consultation to discuss your goals, challenges, and how our specialized coaching programs can help you achieve sustainable results."
};

export const contactFormOptions = [
  { value: "individual", label: "Individual Coaching" },
  { value: "family", label: "Family Coaching" },
  { value: "nutrition", label: "Nutrition Only" },
  { value: "training", label: "Training Only" }
];

export const contactLinks = [
  {
    icon: <Phone size={24} />,
    title: "Call Us",
    detail: "+1 (555) 000-0000",
    description: "Mon-Fri from 8am to 5pm",
    link: "tel:+15550000000"
  },
  {
    icon: <Mail size={24} />,
    title: "Email Us",
    detail: "hello@betterhealthproject.com",
    description: "We'll respond within 24 hours",
    link: "mailto:hello@betterhealthproject.com"
  },
  {
    icon: <MapPin size={24} />,
    title: "Visit Us",
    detail: "123 Health Way, Wellness City",
    description: "By appointment only",
    link: "https://maps.google.com"
  }
];

export const whyChooseUs = [
  {
    icon: <CheckCircle className="text-primary" size={20} />,
    title: "Personalised Plans",
    text: "Tailored to your specific goals and lifestyle."
  },
  {
    icon: <ShieldCheck className="text-primary" size={20} />,
    title: "Expert Guidance",
    text: "Professional support every step of the way."
  },
  {
    icon: <Clock className="text-primary" size={20} />,
    title: "Flexible Schedule",
    text: "Consultations that fit your busy life."
  }
];

export const locationData = {
  badge: "Location",
  title: "Visit Our",
  highlightText: "Office",
  description: "We're conveniently located for your convenience. Stop by our office for inquiries, support, or to connect with our team in person.",
  address: "123 Health Way, Wellness City",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d144.9630579153166!3d-37.81362797975124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1625640000000!5m2!1sen!2sus"
};
