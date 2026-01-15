import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

export const navItems = [
  { label: "Why Us", href: "#why-us" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Benefits", href: "#benefits" },
  { label: "FAQs", href: "#faqs" },
]


export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Create an Account",
    description:
      "Sign up and get instant access to our platform.",
  },
  {
    icon: <Fingerprint />,
    text: "Choose a Subscription Plan",
    description:
      "Pick the plan that best fits your business needs.",
  },
  {
    icon: <ShieldHalf />,
    text: "Set Up Your Business Profile",
    description:
      "Add your logo, description, and key details to make your brand shine.",
  },
  {
    icon: <BatteryCharging />,
    text: "Build Your Menu",
    description:
      "Upload photos, write descriptions, and set pricing for all your products.",
  },
  {
    icon: <PlugZap />,
    text: "Create Your Loyalty Program",
    description:
      "Set rewards and incentives to keep your customers coming back.",
  },
  {
    icon: <GlobeLock />,
    text: "Manage Everything from One Place",
    description:
      "Track orders, bookings, and loyalty activity through our Partners Cloud platform.",
  },
];

export const checklistItems = [
  {
    title: "Centralized Platform Hub",
    description:
      "Manage orders, reservations, menu updates, and customer interactions — all from one intuitive dashboard.",
  },
  {
    title: "Analytics",
    description:
      "Track sales, customer behavior, and top-performing items to make smarter business decisions on the go.",
  },
  {
    title: "Facilitate reorders",
    description:
      "On average customers order x3 frequently with a branded app. Just one tap to reorder.",
  },
  {
    title: "Push Notifications",
    description:
      "Instantly reach your customers with updates, offers, and promos. Drive traffic during slow hours or promote special events.",
  },
  {
    title: "Table Bookings Made Simple",
    description:
      "Let guests reserve a table directly through your app, with optional time slots, guest limits, and confirmations.",
  },
  {
    title: "Custom Loyalty Programs",
    description:
      "Reward repeat customers with points, discounts, or special gifts — all configurable from your backend.",
  },
  {
    title: "Order Notifications",
    description:
      "Get instant alerts for new orders and bookings, with options to print, auto-confirm, or integrate with your POS.",
  },
  {
    title: "Modular & Scalable",
    description:
      "Add new features as you grow — from delivery tracking to multi-branch support, Apptizer scales with you.",
  },
]

export const howItWorksItems = [
  {
    title: 'Choose a subscription plan',
    description: 'Pick the plan that fits your restaurant’s needs — no setup fees, no long-term contracts.'
  },
  {
    title: 'Send us your branding',
    description: 'Share your logo, menu, colors, and business info. We’ll handle the rest.'
  },
  {
    title: 'Go live on the App Store & Google Play',
    description: 'Your branded app will be published in just a few days. Start receiving orders directly.'
  }
]

export const whyUsItems = [
  {
    title: "More Sales, Less Costs, Zero Risk",
    description:
      "Boost your orders without aggregator fees or expensive developer costs. Our small, performance-based commission means you keep far more profits than with aggregators — and with plug-and-play upgrades, you scale when you’re ready."
  },
  {
    title: "Boost Customer Loyalty & Reorders",
    description:
      "Our loyalty features and seamless user experience drive repeat orders. On average, businesses using branded apps see a 3x increase in reorders.",
  },
  {
    title: "Enhance Your Brand Image",
    description:
      "Stand out with a beautiful, branded app that reflects your restaurant’s style and professionalism. Impress both loyal customers and new diners with a seamless, high-end digital experience.",
  },
  {
    title: "Launch Fast, No Tech Needed",
    description:
      "Get started with confidence — your account is set up the same day, and once we receive your content, your branded app is live within 5 days, pending store approvals. No technical skills required."
  },

  // {
  //   title: 'Flat Monthly Fee – No Commissions',
  //   description:
  //     'Say goodbye to hefty aggregator fees. With Apptizer, you pay a predictable, fixed monthly tier. No 30–35% commission cuts. This model supports your growth and keeps your margins healthy.',
  // },
  // {
  //   title: 'Ready-to-Use App – Try Before You Commit',
  //   description:
  //     'The app is fully built and ready to go. We let you test-drive your branded mobile experience before any commitment. No lengthy development process or technical headaches.',
  // },
  // {
  //   title: 'Your Brand Front and Center',
  //   description:
  //     'Unlike generic platforms, Apptizer puts your logo, colors, and identity at the heart of the customer experience. Stand out and build brand recognition with every order.',
  // },
  // {
  //   title: 'Direct Customer Relationship',
  //   description:
  //     'You own your customer data. Build meaningful, long-term relationships instead of renting customers from aggregator platforms.',
  // },
  // {
  //   title: 'Grow Without Middlemen',
  //   description:
  //     'Aggregators control your visibility and communication. Apptizer gives you full control—so you can offer promos, updates, and news directly to your audience.',
  // },
  // {
  //   title: 'Seamless Setup, Zero Maintenance',
  //   description:
  //     'We handle all the tech. You get a high-performance iOS and Android app without worrying about updates, servers, or bugs.',
  // },

]

export const pricingOptions = [
  {
    title: "Basic",
    price: "AED 1,200",
    features: [
      "Online orders",
      "Partners cloud",
    ],
  },
  {
    title: "Pro",
    price: "AED 1,500",
    features: [
      "Online orders",
      "Partners cloud",
      "Table bookings",
      "Loyalty features",
    ],
  },
  {
    title: "Pro Annual",
    price: "AED 15,000",
    features: [
      "Online orders",
      "Partners cloud",
      "Table bookings",
      "Loyalty features",
      "2 MONTHS FREE!",
    ],
  },
];

export const faqs = [
  {
    question: "How long does it take to setup?",
    answer: "Setup typically takes between 3 to 5 business days from when we receive your branding assets and menu."
  },
  {
    question: "Is this app really mine?",
    answer: "Yes! Your app is branded just for your restaurant and appears with your name on the App Store and Google Play."
  },
  {
    question: "Do I need a developer?",
    answer: "No developers needed. We handle everything for you. Just send us your brand details and you're good to go."
  },
  {
    question: "Will customers see my branding?",
    answer: "Absolutely. Your app comes fully branded and only showcases your restaurant's name, logo, and colors."
  },
  {
    question: "Am I tied to a contract?",
    answer: "Nope! You can cancel at any time from your Account Overview, or by contacting us at support@apptizeruae.com"
  },
]

const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
]

const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
]

const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
]

export const footerItems = [
  {
    section: "Quick Links",
    items: [
      { title: null, text: "Join Waitlist", href: "#hero", newTab: false },
      { title: null, text: "Why Us", href: "#why-us", newTab: false },
      { title: null, text: "How It Works", href: "#how-it-works", newTab: false },
      { title: null, text: "FAQs", href: "#faqs", newTab: false },
      // { text: "Terms of Service", href: "/terms" },
      // { text: "Privacy Policy", href: "/privacy" },
    ]
  },
  // {
  //   section: "Test 1",
  //   items: resourcesLinks
  // },
  // {
  //   section: "Test 2",
  //   items: platformLinks
  // },
  // {
  //   section: "Test 3",
  //   items: communityLinks
  // },
  {
    section: "Connect",
    items: [
      {
        title: "Email",
        text: "hello@apptizeruae.com",
        href: "mailto:hello@apptizeruae.com",
        newTab: true
      },
      {
        title: "WhatsApp",
        text: "+971 554 245 676",
        href: "https://wa.me/971554245676",
        newTab: true
      },
      {
        title: "Instagram",
        text: "@apptizeruae",
        href: "https://instagram.com/apptizeruae",
        newTab: true
      },
    ]
  },
]
