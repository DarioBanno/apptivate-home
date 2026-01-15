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
    ]
  },
  {
    section: "Connect",
    items: [
      {
        title: "Email",
        text: "hello@go-apptivate.com",
        href: "mailto:hello@go-apptivate.com",
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
        text: "@apptivate.ae",
        href: "https://instagram.com/apptivate.ae",
        newTab: true
      },
    ]
  },
]
