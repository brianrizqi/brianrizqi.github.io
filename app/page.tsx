import { Cursor } from "@/components/Cursor";
import { Navigation } from "@/components/Navigation";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { Works } from "@/components/sections/Works";
import { profile } from "@/data/portfolio";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Software Engineer",
  email: `mailto:${profile.email}`,
  url: "https://brianrizqi.vercel.app",
  sameAs: [profile.github, profile.linkedin, profile.instagram],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Universitas Jember" },
    { "@type": "CollegeOrUniversity", name: "Institut Teknologi Sepuluh Nopember" },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Cursor />
      <Navigation />

      <main className="lg:pl-[84px]">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Services />
        <Works />
        <Contact />
      </main>
    </>
  );
}
