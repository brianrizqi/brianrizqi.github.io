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
import { SITE } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  givenName: "Brian",
  familyName: "Darnoto",
  honorificPrefix: "Dr.",
  jobTitle: ["Software Engineer", "Lecturer", "Project Manager"],
  description:
    "Software Engineer, Lecturer, and Project Manager with 9+ years building web, mobile, and enterprise systems.",
  email: `mailto:${profile.email}`,
  url: SITE,
  image: `${SITE}/images/brian.jpeg`,
  sameAs: [profile.linkedin],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jember",
    addressRegion: "East Java",
    addressCountry: "ID",
  },
  worksFor: {
    "@type": "CollegeOrUniversity",
    name: "University of Jember",
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "University of Jember" },
    {
      "@type": "CollegeOrUniversity",
      name: "Institut Teknologi Sepuluh Nopember",
    },
  ],
  knowsAbout: [
    "Software Engineering",
    "Web Development",
    "Mobile Development",
    "Database Engineering",
    "Project Management",
    "System Analysis",
  ],
  knowsLanguage: ["en", "id"],
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

      <main className="lg:pl-[210px]">
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
