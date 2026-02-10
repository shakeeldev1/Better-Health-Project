import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Family Coaching', to: '/family-coaching' },
  { label: 'E-Books', to: '/ebooks' },
  { label: 'FAQs', to: '/faq' },
  { label: 'Contact', to: '/contact' },
];

export const footerQuickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Family Coaching', to: '/family-coaching' },
  { label: 'E-Books', to: '/ebooks' },
  { label: 'FAQs', to: '/faq' },
  { label: 'Contact', to: '/contact' },
];

export const footerContactInfo = {
  address: "123 Health Way, Wellness City",
  phone: "+1 234 567 890",
  phoneHref: "tel:+1234567890",
  email: "info@betterhealthproject.com",
  emailHref: "mailto:info@betterhealthproject.com"
};

export const footerSocialLinks = [
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaFacebook, href: "#", label: "Facebook" },
  { icon: FaTwitter, href: "#", label: "Twitter" }
];
