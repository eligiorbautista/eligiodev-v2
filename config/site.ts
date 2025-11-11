import { profile } from "console";

export const USER_INFO = {
  name: "Eligio Bautista III",
  title: "Web Developer",
  location: "Philippines",
  resumeUrl: "./Resume_BautistaEligio.pdf",
  resumePassword: process.env.RESUME_PASSWORD,
  hero: {
    headline: "I build things for the web.",
    subheadline_p1: "I'm a",
    subheadline_p2: "from the",
    subheadline_p3:
      ", specializing in creating stunning, high-performance digital experiences.",
    cta: "View My Work",
    resumeCta: "Download Resume",
    profileImageUrl: "./assets/profile_pictures/EligioBautista_1.jpg",
  },
  about: {
    paragraph1:
      "I'm a passionate web developer based in the Philippines, with a knack for building beautiful, responsive, and user-friendly web applications. I thrive on turning complex problems into simple, elegant solutions. When I'm not coding, you can find me exploring new technologies or contributing to open-source projects.",
    paragraph2: "Here are a few technologies I've been working with recently:",
    profileImageUrl: "./assets/profile_pictures/EligioBautista_2.jpg",
  },

  contact: {
    title: "06. What's Next?",
    headline: "Get In Touch",
    description:
      "My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!",
    cta: "Say Hello",
  },
};

export const NAVIGATION_LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certificates", label: "Certificates" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const SECTION_TITLES = {
  about: "01. About Me",
  projects: "02. Some Things I've Built",
  experience: "03. Experience",
  certificates: "04. Certificates & Awards",
  testimonials: "05. Testimonials",
};

export const SKILLS = [
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Supabase",
  "REST API",
];

export const SOCIAL_LINKS = {
  github: "#",
  linkedin: "#",
  facebook: "#",
  email: "mailto:eligiobautista.dev@gmail.com",
};
