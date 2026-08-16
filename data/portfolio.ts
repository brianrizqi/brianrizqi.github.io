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
  { value: 24, label: "Proyek" },
  { value: 15, label: "Klien" },
  { value: 5, label: "Tahun Exp." },
];

export const techStack = [
  "Laravel", "Next.js", "React", "Node.js", "Flutter", "MySQL",
  "Vue.js", "PostgreSQL", "Docker", "Firebase", "Redis", "Python",
];

export const education = [
  {
    year: "2016 – 2020",
    badge: "Bachelor Degree",
    school: "Universitas Jember",
    major: "Information System",
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
  { year: "2025–Present", title: "Post Doctoral", org: "ITS Surabaya", tag: "Now" },
  { year: "2024–2026", title: "Project Manager", org: "Rootpixel" },
  { year: "2024–Present", title: "Dosen / Lecturer", org: "Universitas Jember", tag: "Now" },
  { year: "2025", title: "Sertifikasi BNSP", org: "UI/UX Design", tag: "BNSP" },
  { year: "2023–2024", title: "Fullstack Developer", org: "Halosis / PT HSI" },
  { year: "2022–2024", title: "Fullstack Developer", org: "Indo Ahsan Teknologi" },
  { year: "2022–2023", title: "QA & System Analyst", org: "PT Widya Solusi Utama" },
  { year: "2019–2023", title: "Backend Developer", org: "Rootpixel" },
  { year: "2019–2021", title: "Sertifikasi BNSP", org: "Mobile Programming & DB", tag: "BNSP" },
  { year: "2018–2019", title: "Ketua HIMASIF", org: "Sistem Informasi UNEJ" },
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
    title: "Website Company Profile",
    desc: "Website profesional yang merepresentasikan identitas & nilai perusahaan Anda secara optimal.",
  },
  {
    num: "02",
    icon: "🛒",
    title: "Website E-Commerce",
    desc: "Platform e-commerce dengan konversi tinggi untuk memaksimalkan penjualan produk Anda.",
  },
  {
    num: "03",
    icon: "🧾",
    title: "Website Point of Sales",
    desc: "Sistem kasir digital modern untuk mengelola transaksi penjualan secara akurat dan efisien.",
  },
  {
    num: "04",
    icon: "🤝",
    title: "Website CRM",
    desc: "Platform CRM untuk melacak data pelanggan dan mengintegrasikan seluruh saluran bisnis.",
  },
];

export type Work = { title: string; desc: string; image: string };

export const works: Work[] = [
  ["SSO Rootpixel", "Single sign-on terpusat untuk semua platform Rootpixel."],
  ["Membership Rootpixel", "Marketplace produk digital internal Rootpixel."],
  ["Vodub (Voice Dubber)", "Marketplace voice over — klien & talent VO profesional."],
  ["Web Survey", "Platform survei online untuk mencari & mengelola responden."],
  ["Jo-Florist", "Toko bunga online berbasis di Jember."],
  ["Arjuna Ristekdikti", "Sistem akreditasi jurnal Kementerian Ristekdikti."],
  ["TSA National Foundation", "Website profil resmi TSA National Foundation."],
  ["Gizihub.com", "Portal e-commerce dan konsultasi gizi digital."],
  ["Pixelpaper", "E-commerce merchandise & kaos kreatif Rootpixel."],
  ["Point of Sales Toko Emas", "Sistem kasir modern untuk toko emas di Kalisat."],
  ["Kalsa", "Kalkulator analisis pergerakan aset kripto."],
  ["Undangan Pernikahan", "Undangan digital dengan fitur ucapan online."],
  ["SPPK Pakan Sapi", "SPK pemilihan pakan sapi (TOPSIS)."],
  ["Aplikasi Prosalina Radio", "Streaming Radio Prosalina Jember berbasis mobile."],
  ["Aplikasi Kiss FM", "Streaming Radio Kiss FM Jember berbasis mobile."],
  ["CRM TOG Soft Bank (SG)", "Monitoring aktivitas harian TOG Soft Bank, Singapore."],
  ["Talentgrowth", "Platform pembelajaran & kuis interaktif untuk jobseeker."],
  ["Work Order System", "Monitoring real-time engineer dan sales lapangan."],
  ["Geram Apps Pasuruan", "SPK epidemi DBD Kab. Pasuruan."],
  ["Apotek Rachman Farma", "Sistem kasir apotek — laporan, faktur, stok opnam."],
  ["PPE Butar PDSI PERTAMINA", "Monitoring APD crew PERTAMINA."],
  ["INVEE.NET", "Platform pembuatan undangan digital serbaguna."],
  ["Levidio Market", "Marketplace produk desain digital Levidio."],
  ["RISS Radana", "Sistem pengajuan pinjaman platform Radana."],
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
