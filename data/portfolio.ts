export const profile = {
  name: "Dr. Brian Rizqi Paradisiaca Darnoto",
  shortName: "Brian Rizqi P.D.",
  role: "Software Engineer",
  subRole: "Lecturer · Project Manager",
  tagline: "AVAILABLE FOR PROJECTS",
  photo: "/images/brian.jpeg",
  logo: "/images/logo.png",
  email: "brian@onestep.id",
  linkedin: "https://www.linkedin.com/in/brianrizqi/",
};

export const stats = [
  { value: 24, label: "Projects" },
  { value: 15, label: "Clients" },
  { value: 9, label: "Years Exp." },
];

export const techStack = [
  "Laravel", "Next.js", "React", "Node.js", "Flutter", "MySQL",
  "Vue.js", "PostgreSQL", "Docker", "Firebase", "Redis", "Python",
];

export const education = [
  {
    year: "2016 – 2020",
    badge: "Bachelor Degree",
    school: "University of Jember",
    major: "Information Systems",
    accent: false,
  },
  {
    year: "2020 – 2022",
    badge: "Master Degree",
    school: "ITS Surabaya",
    major: "Informatics",
    accent: false,
  },
  {
    year: "2022 – 2025",
    badge: "Doctoral Degree",
    school: "ITS Surabaya",
    major: "Computer Science",
    accent: true,
  },
];

export type ExperienceItem = {
  year: string;
  title: string;
  org: string;
  tag?: "Now" | "BNSP";
};

export const experience: ExperienceItem[] = [
  { year: "2024–Present", title: "Lecturer", org: "University of Jember", tag: "Now" },
  { year: "2025–Present", title: "Post Doctoral", org: "ITS Surabaya", tag: "Now" },
  { year: "2024–2026", title: "Project Manager", org: "Rootpixel" },
  { year: "2025", title: "BNSP Certification", org: "UI/UX Design", tag: "BNSP" },
  { year: "2023–2024", title: "Fullstack Developer", org: "Halosis / PT HSI" },
  { year: "2022–2024", title: "Fullstack Developer", org: "Indo Ahsan Teknologi" },
  { year: "2022–2023", title: "QA & System Analyst", org: "PT Widya Solusi Utama" },
  { year: "2019–2023", title: "Backend Developer", org: "Rootpixel" },
  { year: "2019–2021", title: "BNSP Certification", org: "Mobile Programming & Database", tag: "BNSP" },
  { year: "2018–2019", title: "Student Association President", org: "Information Systems, UNEJ" },
];

export const skills = [
  { icon: "🌐", name: "Website Developer" },
  { icon: "📱", name: "Mobile Developer" },
  { icon: "📋", name: "Project Manager" },
  { icon: "🔍", name: "System Analyst" },
  { icon: "🗄️", name: "Database Engineer" },
  { icon: "🎓", name: "Lecturer" },
  { icon: "✍️", name: "Technical Writer" },
  { icon: "🔬", name: "Researcher" },
];

export const services = [
  {
    num: "01",
    icon: "💻",
    title: "Company Profile Website",
    desc: "A professional website that represents your company's identity and values at their best.",
  },
  {
    num: "02",
    icon: "🛒",
    title: "E-Commerce Website",
    desc: "High-converting e-commerce platforms built to maximise your product sales.",
  },
  {
    num: "03",
    icon: "🧾",
    title: "Point of Sales System",
    desc: "A modern digital cashier system that handles sales transactions accurately and efficiently.",
  },
  {
    num: "04",
    icon: "🤝",
    title: "CRM Platform",
    desc: "A CRM platform to track customer data and connect every channel of your business.",
  },
];

export type Work = { title: string; desc: string; image: string };

export const works: Work[] = [
  ["SSO Rootpixel", "Centralised single sign-on for every Rootpixel platform."],
  ["Membership Rootpixel", "Internal marketplace for Rootpixel digital products."],
  ["Vodub (Voice Dubber)", "Voice-over marketplace connecting clients with professional VO talent."],
  ["Web Survey", "Online survey platform for recruiting and managing respondents."],
  ["Jo-Florist", "Online flower shop based in Jember."],
  ["Arjuna Ristekdikti", "Journal accreditation system for the Indonesian Ministry of Research."],
  ["TSA National Foundation", "Official profile website for the TSA National Foundation."],
  ["Gizihub.com", "E-commerce and digital nutrition consultation portal."],
  ["Pixelpaper", "E-commerce for Rootpixel creative merchandise and apparel."],
  ["Gold Store Point of Sales", "Modern cashier system for a gold retailer in Kalisat."],
  ["Kalsa", "Analytics calculator for tracking crypto asset movement."],
  ["Digital Wedding Invitation", "Digital invitation platform with online guest wishes."],
  ["Cattle Feed DSS", "Decision support system for cattle feed selection (TOPSIS)."],
  ["Prosalina Radio App", "Mobile streaming app for Radio Prosalina Jember."],
  ["Kiss FM App", "Mobile streaming app for Radio Kiss FM Jember."],
  ["CRM TOG Soft Bank (SG)", "Daily activity monitoring for TOG Soft Bank, Singapore."],
  ["Talentgrowth", "Interactive learning and quiz platform for job seekers."],
  ["Work Order System", "Real-time monitoring for field engineers and sales teams."],
  ["Geram Apps Pasuruan", "Dengue outbreak decision support system for Pasuruan Regency."],
  ["Rachman Farma Pharmacy", "Pharmacy POS — reporting, invoicing, and stock audits."],
  ["PPE Butar PDSI PERTAMINA", "Safety equipment monitoring for PERTAMINA crews."],
  ["INVEE.NET", "All-purpose platform for building digital invitations."],
  ["Levidio Market", "Marketplace for Levidio digital design products."],
  ["RISS Radana", "Loan application system for the Radana platform."],
].map(([title, desc], i) => ({
  title: title as string,
  desc: desc as string,
  image: `/images/work-${i}.png`,
}));

export const sections = [
  "Home",
  "About",
  "Education",
  "Experience",
  "Skills",
  "Services",
  "Works",
  "Contact",
] as const;
