export const SITE = {
  name: "NW's Not Just Bookkeeping",
  tagline: "Accurate Books · Better Business",
  description:
    "Friendly, accurate bookkeeping for small businesses — monthly reconciliations, bookkeeping cleanup, payroll support, and clear financial reporting. 100% remote, serving all 50 US states. Save 5+ hours a week.",
  url: "https://www.notjustbookkeeping.com",
  email: "nwnotjustbookkeeping23@gmail.com",
  image: "/og-image.png",
  portrait: "/images/owner/hero-lifestyle.jpg",
  portraitAlt:
    "Nicole, owner and bookkeeper of NW's Not Just Bookkeeping, smiling at her desk with her laptop and a coffee",
  owner: {
    name: "Nicole",
    jobTitle: "Owner & Bookkeeper",
  },
  areaServed: "United States",
  hours: "Mo-Fr 09:00-17:00",
  priceRange: "$$",
} as const;

export const FAQS = [
  {
    q: "What do you need from me to get started?",
    a: "Just read-only access to your bank and credit card feeds, your accounting login (or I can set one up), and about 30 minutes for the kickoff call. I'll send a short onboarding checklist so you know exactly what happens and when — most clients are fully up and running within two weeks.",
  },
  {
    q: "Which software do you work with?",
    a: "I work in modern cloud accounting software like QuickBooks Online, and I'm currently completing my Universal Accounting certifications in both bookkeeping and tax preparation. If you're on spreadsheets or shoeboxes, I'll recommend the right tool for your size and budget and handle the entire setup for you.",
  },
  {
    q: "Can you help if my books are years behind?",
    a: "Absolutely — catch-up and cleanup work is one of my specialties. Whether it's six months or six years, I'll reconcile every account, fix duplicate and miscategorized transactions, and hand your tax preparer a clean set of books they'll actually thank you for.",
  },
  {
    q: "How much does it cost?",
    a: "Monthly packages are flat-rate and based on your transaction volume. You'll get an exact quote after the free discovery call — and it never changes mid-month. No hourly meters running, no surprise line items.",
  },
  {
    q: "Is my financial data safe with you?",
    a: "Yes. I connect through bank-level encrypted, read-only feeds, never store your banking passwords, and carry professional liability insurance. Happy to sign an NDA before we even talk numbers — your data belongs to you, full stop.",
  },
] as const;
