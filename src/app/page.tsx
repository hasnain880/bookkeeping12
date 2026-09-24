import { SiteHeader } from "@/components/landing/site-header";
import { Hero } from "@/components/landing/hero";
import { Services } from "@/components/landing/services";
import { HowItWorks } from "@/components/landing/how-it-works";
import { About } from "@/components/landing/about";
import { Testimonials } from "@/components/landing/testimonials";
import { Faq } from "@/components/landing/faq";
import { Contact } from "@/components/landing/contact";
import { SiteFooter } from "@/components/landing/site-footer";
import { SITE, FAQS } from "@/lib/site-data";

function buildJsonLd() {
  const person = {
    "@type": "Person",
    name: SITE.owner.name,
    jobTitle: SITE.owner.jobTitle,
    email: `mailto:${SITE.email}`,
    worksFor: { "@type": "ProfessionalService", name: SITE.name },
  };

  const professionalService = {
    "@type": "ProfessionalService",
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    slogan: SITE.tagline,
    description: SITE.description,
    url: SITE.url,
    email: SITE.email,
    image: `${SITE.url}${SITE.portrait}`,
    logo: `${SITE.url}/nw-logo.svg`,
    founder: person,
    areaServed: { "@type": "Country", name: SITE.areaServed },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    knowsAbout: [
      "Monthly Bookkeeping",
      "Bookkeeping Cleanup & Catch-Up",
      "Financial Reporting",
      "Payroll Support",
      "Accounts Payable & Receivable",
      "QuickBooks Setup & Training",
    ],
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    publisher: { "@id": `${SITE.url}/#business` },
    inLanguage: "en-US",
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${SITE.url}/#faq`,
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [professionalService, person, website, faqPage],
  };
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()) }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-500 focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main" className="flex-1">
        <Hero />
        <Services />
        <HowItWorks />
        <About />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
