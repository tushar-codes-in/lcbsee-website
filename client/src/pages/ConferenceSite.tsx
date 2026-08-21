/**
 * Reference-faithful ICBSEE 2026 rebuild.
 * Preserve the supplied Wix desktop composition and the supplied tall mobile masthead,
 * lime content field, direct academic copy, original images, and functional navigation.
 */
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { CalendarDays, ChevronDown, ChevronLeft, ChevronRight, MapPin, Menu, X } from "lucide-react";

const assets = {
  logo: "/media/lcbsee/icbsee-logo.png",
  nitr: "/media/lcbsee/nitr-logo.png",
  building: "/media/lcbsee/bm-building.jpg",
  fees: "/media/lcbsee/registration-fees.jpg",
  qr: "/media/lcbsee/payment-qr.png",
  social: {
    instagram: "/media/lcbsee/social-instagram.png",
    facebook: "/media/lcbsee/social-facebook.png",
    twitter: "/media/lcbsee/social-twitter.png",
    linkedin: "/media/lcbsee/social-linkedin.png",
  },
};

const navItems = [
  ["Home", "/"],
  ["Scope", "/scope"],
  ["Key Speakers", "/key-speakers"],
  ["Abstract Submission", "/abstract-submission"],
  ["Registration", "/registration"],
  ["Sponsors", "/sponsors"],
  ["Publications", "/copy-of-scope"],
  ["Reach Rourkela", "/reach-rourkela"],
] as const;

const chapterItems = [
  ["ICBSEE 2022", "/icbsee-2022"],
  ["ICBSEE 2020", "/icbsee-2020-1"],
  ["ICBSEE 2018", "/icbsee-2018"],
] as const;

const speakers = [
  ["/media/lcbsee/speaker-nk-dhal.png", "Prof. N. K. Dhal", "CSIR IMMT"],
  ["/media/lcbsee/speaker-pakshirajan.png", "Prof. K. Pakshirajan", "IIT Guwahati, India"],
  ["/media/lcbsee/speaker-dasgupta.png", "Dr. Santanu Dasgupta", "Senior Vice President at Reliance, India"],
  ["/media/lcbsee/speaker-ulla-lassi.png", "Prof. Ulla Lassi", "University of Oulu, Finland"],
  ["/media/lcbsee/speaker-rintu-banerjee.png", "Prof. Rintu Banerjee", "IIT Kharagpur, India"],
  ["/media/lcbsee/speaker-indumathi.png", "Prof. Indumathi M. Nambi", "IIT Madras, India"],
  ["/media/lcbsee/speaker-ramkrishna.png", "Prof. Ramkrishna Sen", "IIT Kharagpur, India"],
  ["/media/lcbsee/speaker-sanjoy-ghosh.png", "Prof. Sanjoy Ghosh", "IIT Roorkee, India"],
] as const;

type ScopeDetail = {
  slug: string;
  label: string;
  title: string;
  image: string;
  topics: string[];
};

const scopeDetails: ScopeDetail[] = [
  {
    slug: "environment", label: "ENVIRONMENT", title: "ENVIRONMENT", image: "/media/lcbsee/wix-scope-environment.jpg",
    topics: ["Biodiversity and Omics", "Bioprocess and Bio-systems", "Bioremediation: solid and liquid wastes", "Hazardous substances: detection and management techniques", "Carbon sequestration and storage", "Green organic synthesis routes", "Product engineering in the Bio-Industries", "Product innovation, development and economics", "Enzymes of environmental importance", "Biomaterials and Nanotechnology", "Recovery and recycling of effluents", "Value added products from wastes"],
  },
  {
    slug: "energy", label: "ENERGY", title: "ENERGY", image: "/media/lcbsee/wix-scope-energy.jpg",
    topics: ["Municipal wastewater treatment", "Sewage treatment", "Industrial wastewater treatment", "Power plant wastewater treatment", "Nuclear plant wastewater treatment", "Advance technology in wastewater treatment", "Recycle, recovery and reuse of resources from wastewater", "Energy generation from wastewater"],
  },
  {
    slug: "bioprocess", label: "BIOPROCESS", title: "BIOPROCESS", image: "/media/lcbsee/wix-scope-bioprocess.jpg",
    topics: ["Advance approaches for better quality product", "Enzymes of Industrial importance", "Biomass Processing", "Bioprocess for Food and Fermentation"],
  },
  {
    slug: "pollution", label: "POLLUTION", title: "POLLUTION", image: "/media/lcbsee/wix-scope-pollution.png",
    topics: ["Municipal wastewater treatment", "Sewage treatment", "Industrial wastewater treatment", "Power plant wastewater treatment", "Nuclear plant wastewater treatment", "Advance technology in wastewater treatment", "Recycle, recovery and reuse of resources from wastewater", "Energy generation from wastewater"],
  },
  {
    slug: "metabolo-genomics", label: "METABOLO- AND GENOMICS", title: "Metabolic Engineering and Molecular Biology", image: "/media/lcbsee/wix-scope-metabolomics.jpg",
    topics: ["Metagenomics of environmental samples", "Biodiversity analysis from environmental samples", "Microbiome analysis", "Bioinformatics analysis for whole genome", "Metabolomics for pathway analysis", "Proteomics for improved product and process", "Transcriptomics for improved product and process"],
  },
  {
    slug: "wastewater", label: "WASTEWATER", title: "WASTEWATER", image: "/media/lcbsee/wix-scope-wastewater.png",
    topics: ["Heavy metal toxicity", "Health effect of radio nucleotides", "Emerging contaminants and their effects on health", "Microbiome analysis for pollutant toxicity", "Carcinogenesis", "Metabolomics for pathway analysis", "System biology approach for toxicity", "Cause and remediation of diseases from environment"],
  },
];

const journals = [
  ["APPLIED BIOCHEMISRTY AND BIOTECHNOLOGY", "/media/lcbsee/journal-applied-biochem.webp", "https://link.springer.com/journal/12010"],
  ["BIOMASS CONVERSION AND BIOREFINERY", "/media/lcbsee/journal-biomass.webp", "https://link.springer.com/journal/13399"],
  ["ENVIRONMENTAL QUALITY MANAGEMENT", "/media/lcbsee/journal-eqm.webp", "https://onlinelibrary.wiley.com/journal/15206483"],
  ["PREPARATIVE BIOCHEMISRTY AND BIOTECHNOLOGY", "/media/lcbsee/journal-preparative.webp", "https://www.tandfonline.com/toc/lpbb20/current"],
  ["INTERNATIIONAL BIODETERIORATION AND BIODEGRADATION", "/media/lcbsee/journal-biodegradation.jpg", "https://www.sciencedirect.com/journal/international-biodeterioration-and-biodegradation"],
  ["JOURNAL OF ENVIRONMENTAL MANAGEMENT", "/media/lcbsee/journal-environmental-management.jpg", "https://www.sciencedirect.com/journal/journal-of-environmental-management"],
  ["WATER, AIR & SOIL POLLUTION", "/media/lcbsee/journal-water-air-soil.webp", "https://link.springer.com/journal/11270"],
] as const;

const galleryImages = [
  "/media/lcbsee/IMG_1923.jpg",
  "/media/lcbsee/IMG_0117.jpg",
  "/media/lcbsee/IMG_0218.jpg",
  "/media/lcbsee/IMG_0219.jpg",
  "/media/lcbsee/IMG_0220.jpg",
  "/media/lcbsee/IMG_0222.jpg",
  "/media/lcbsee/IMG_0223.jpg",
  "/media/lcbsee/IMG_1054.jpg",
  "/media/lcbsee/IMG_1147.jpg",
  "/media/lcbsee/IMG_1229.jpg",
  "/media/lcbsee/IMG_1251.jpg",
  "/media/lcbsee/IMG_1325.jpg",
  "/media/lcbsee/IMG_1410.jpg",
  "/media/lcbsee/IMG_1495.jpg",
  "/media/lcbsee/IMG_1620.jpg",
];

type Countdown = { days: number; hours: number; minutes: number; seconds: number };

function getCountdown(): Countdown {
  const diff = Math.max(0, new Date("2026-12-02T00:00:00+05:30").getTime() - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1_000) % 60),
  };
}

function CountdownClock({ inline = false }: { inline?: boolean }) {
  const [time, setTime] = useState<Countdown>(getCountdown);
  useEffect(() => {
    const timer = window.setInterval(() => setTime(getCountdown()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  if (inline) {
    return (
      <div className="home-countdown-values" aria-label="Countdown to ICBSEE 2026">
        {Object.entries(time).map(([label, value], index) => (
          <div className="home-countdown-pair" key={label}>
            <span><small>{label[0].toUpperCase() + label.slice(1)}</small><strong>{String(value).padStart(2, "0")}</strong></span>
            {index < 3 && <i aria-hidden="true">:</i>}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="countdown" aria-label="Countdown to ICBSEE 2026">
      {Object.entries(time).map(([label, value]) => (
        <div className="countdown-unit" key={label}>
          <strong>{String(value).padStart(2, "0")}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

function Header({ activePath, onMenuOpen }: { activePath: string; onMenuOpen: () => void }) {
  const [chaptersOpen, setChaptersOpen] = useState(false);
  const isChapter = activePath === "/past-chapters" || activePath.startsWith("/icbsee-");
  return (
    <header className="site-header">
      <div className="masthead">
        <a className="masthead-logo masthead-logo-left" href="/" aria-label="ICBSEE home">
          <img src={assets.logo} alt="ICBSEE logo" />
        </a>
        <h1>INTERNATIONAL CONFERENCE ON BIOPROCESS AND SUSTAINABLE<br className="desktop-break" /> ENVIRONMENT AND ENERGY</h1>
        <a className="masthead-logo masthead-logo-right" href="https://nitrkl.ac.in/" target="_blank" rel="noreferrer" aria-label="NIT Rourkela">
          <img src={assets.nitr} alt="NIT Rourkela logo" />
        </a>
        <button className="menu-toggle" onClick={onMenuOpen} aria-label="Open navigation"><Menu size={25} /></button>
      </div>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.slice(0, 6).map(([label, href]) => <a className={activePath === href ? "active" : ""} href={href} key={href}>{label}</a>)}
        <div className="chapter-menu">
          <button className={isChapter ? "active" : ""} onClick={() => setChaptersOpen((value) => !value)} aria-expanded={chaptersOpen}>
            Past Chapters <ChevronDown size={13} strokeWidth={3} />
          </button>
          {chaptersOpen && (
            <div className="chapter-dropdown">
              <a href="/past-chapters">Past Chapters</a>
              {chapterItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
            </div>
          )}
        </div>
        {navItems.slice(6).map(([label, href]) => <a className={activePath === href ? "active" : ""} href={href} key={href}>{label}</a>)}
      </nav>
    </header>
  );
}

function MobileNavigation({ onClose, activePath }: { onClose: () => void; activePath: string }) {
  const [chaptersOpen, setChaptersOpen] = useState(activePath.startsWith("/icbsee-") || activePath === "/past-chapters");
  return (
    <div className="mobile-nav-overlay" role="dialog" aria-modal="true" aria-label="Mobile navigation">
      <button className="mobile-close" onClick={onClose} aria-label="Close navigation"><X size={22} /></button>
      <nav className="mobile-nav-links">
        {navItems.slice(0, 6).map(([label, href]) => <a className={activePath === href ? "active" : ""} href={href} key={href}>{label}</a>)}
        <button className="mobile-chapters" onClick={() => setChaptersOpen((value) => !value)}>
          <ChevronDown className={chaptersOpen ? "rotated" : ""} size={15} /> Chapters
        </button>
        {chaptersOpen && chapterItems.map(([label, href]) => <a className="chapter-link" href={href} key={href}>{label}</a>)}
        {navItems.slice(6).map(([label, href]) => <a className={activePath === href ? "active" : ""} href={href} key={href}>{label}</a>)}
      </nav>
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <img src={assets.logo} alt="ICBSEE" className="footer-logo" />
      <p>Designed by BM Department of NIT Rourkela</p>
      <div className="social-links" aria-label="Social links">
        <a href="https://www.instagram.com/icbsee_conference_nitrkl/" target="_blank" rel="noreferrer"><img src={assets.social.instagram} alt="Instagram" /></a>
        <a href="https://www.facebook.com/icbsee2022?mibextid=ZbWKwL" target="_blank" rel="noreferrer"><img src={assets.social.facebook} alt="Facebook" /></a>
        <a href="https://x.com/icbsee" target="_blank" rel="noreferrer"><img src={assets.social.twitter} alt="Twitter" /></a>
        <a href="https://www.linkedin.com/in/international-conference-on-bioprocess-for-sustainable-environment-and-energy-6a7b32239/" target="_blank" rel="noreferrer"><img src={assets.social.linkedin} alt="LinkedIn" /></a>
      </div>
    </footer>
  );
}

function PageLayout({ children }: { children: React.ReactNode }) {
  return <><main className="conference-page">{children}</main><Footer /></>;
}

function HomePage() {
  return (
    <main className="home-page">
      <section className="home-building" style={{ backgroundImage: `url(${assets.building})` }}>
        <div className="home-building-overlay">
          <section className="home-announcement" aria-label="Abstract submission announcement">
            <div className="announcement-marquee">
              <div className="desktop-announcement">
                <span>LAST DATE FOR ABSTRACT SUBMISSION IS EXTENDED TILL 15 OCTOBER 2026 !!!</span>
                <span>ABSTRACT WILL NOT BE ACCEPTED AFTER THIS DATE</span>
              </div>
              <div className="announcement-block-track">
                {[0, 1].map((block) => (
                  <div className="announcement-block" aria-hidden={block === 1} key={block}>
                    <span>LAST DATE FOR</span>
                    <span>ABSTRACT SUBMISSION</span>
                    <span>IS EXTENDED TILL 15</span>
                    <span>OCTOBER 2026 !!!</span>
                    <span>ABSTRACT WILL NOT BE</span>
                    <span>ACCEPTED AFTER THIS</span>
                    <span>DATE</span>
                  </div>
                ))}
              </div>
            </div>
            <h1 className="conference-code">ICBSEE-<br className="mobile-code-break" />2026</h1>
            <p className="desktop-home-subtitle">5th International Conference on Bioprocess for Sustainable Environment and Energy</p>
            <div className="home-actions">
              <a href="/abstract-submission">SUBMIT ABSTRACT</a>
              <a href="https://fd00b575-d8aa-4068-b108-b2d6ea0d7a6b.filesusr.com/ugd/51ff08_17e0a508f0f44925b654e2d6924abec9.pdf" target="_blank" rel="noreferrer">TECHNICAL SCHEDULE</a>
            </div>
            <div className="event-details">
              <CalendarDays className="event-symbol" aria-hidden="true" />
              <p className="event-date">2 DECEMBER - 4 <br />December, 2026</p>
              <MapPin className="event-symbol" aria-hidden="true" />
              <p className="event-location">Department of Biotechnology <br />and Medical Engineering, NIT <br />Rourkela</p>
            </div>
          </section>
        </div>
      </section>
      <section className="home-countdown">
        <p className="home-countdown-label">ICBSEE 2026 starts in</p>
        <CountdownClock inline />
      </section>
      <Footer />
    </main>
  );
}

function ScopePage() {
  return <PageLayout><section className="lime-field scope-page"><h2>SCOPE OF THE CONFERENCE</h2><p className="scope-intro">The major thrust of ICBSEE-India-2026 is to emphasize the recent innovations and development of bioprocess strategies toward environment and energy. Keeping this in view, exclusive sessions will be dedicated to personnel from broad areas of academia, industry, and research on the thematic-focused regions.</p><div className="scope-grid">{scopeDetails.map(({ label, image, slug }) => <article key={label}><a className="scope-link-card" href={`/scope/${slug}`} aria-label={`Open ${label} scope topics`}><img src={image} alt="" /><h3>{label}</h3></a></article>)}</div></section></PageLayout>;
}

function ScopeDetailPage({ detail }: { detail: ScopeDetail }) {
  return <PageLayout><section className="scope-detail-page"><div className="scope-detail-content"><h2>{detail.title}</h2><ul>{detail.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul><a className="scope-back-link" href="/scope"><ChevronLeft aria-hidden="true" /> Back to Scope</a></div></section></PageLayout>;
}

function SpeakersPage() {
  return <PageLayout><section className="lime-field speakers-page"><h2>KEYNOTE SPEAKERS</h2><div className="speakers-grid">{speakers.map(([image, name, role]) => <article className="speaker" key={name}><img src={image} alt={name} /><h3>{name}</h3><p>{role}</p></article>)}</div></section></PageLayout>;
}

function AbstractPage() {
  return <PageLayout><section className="lime-field abstract-page"><h2>ABSTRACT<br />SUBMISSION</h2><div className="abstract-copy"><p>The participants can submit 2 abstracts: - for invited speakers, both oral presentations while for student participants 1 flash talk and 1 poster presentation.</p><p>The final version of the abstract should be submitted by sending it to <a href="mailto:icbsee2026@gmail.com">icbsee2026@gmail.com</a></p><h3>IMPORTANT DATES</h3><p className="important-date">LAST DATE FOR ABSTRACT SUBMISSION<br />15 OCTOBER, 2026<br /><br />LAST DATE FOR FINAL REGISTRATION<br />15 OCTOBER, 2026</p></div></section></PageLayout>;
}

function RegistrationPage() {
  return <PageLayout><section className="registration-page" style={{ backgroundImage: `linear-gradient(rgba(222,255,162,.89),rgba(222,255,162,.89)),url(${assets.building})` }}><div className="registration-content"><h2>REGISTRATION</h2><h3>The steps for registering in ICBSEE 2026 are as follows:</h3><ol><li>Click the registration form link below to open the conference registration form.<br /><a href="https://docs.google.com/forms/d/e/1FAIpQLSf8g_EFINqjGCwlsOezldfTWBVx2DxZBgl0n4t_CevR_0X3cg/viewform?usp=publish-editor" target="_blank" rel="noreferrer">Registration Link</a></li><li>Fill in all the required personal, academic/professional, and contact details accurately.</li><li>Upload the required documents and payment proof (if applicable), then carefully review all the information entered.</li><li>Click Submit to complete your registration. Please save or take a screenshot of the confirmation page for future reference.</li></ol><h2 className="fee-title">REGISTRATION FEES</h2><h4>Early Bird Registration (15th October, 2026)</h4><img className="fees-image" src={assets.fees} alt="ICBSEE registration fees" /><div className="payment-details"><div><h3>Payment Details</h3><p>Participants may pay the registration fee using UPI (scan the QR code), NEFT, or Demand Draft (DD).</p><ul><li>UPI ID: 2804180418@sbi (or scan the QR code provided)</li><li>NEFT: A/c No. 36734418111 | IFSC: SBIN0002109</li><li>Demand Draft: Drawn in favor of “CONFERENCE NIT ROURKELA”, payable at SBI NIT Campus Branch, Rourkela.</li></ul><p>Note: Kindly upload the payment receipt/transaction proof while submitting the registration form for successful confirmation.</p></div><img src={assets.qr} alt="SBI UPI QR code" /></div></div></section></PageLayout>;
}

function SponsorsPage() {
  return <PageLayout><section className="lime-field sponsors-page"><h2>SPONSORS</h2><div className="sponsor-grid"><a href="https://svscientific87.com/" target="_blank" rel="noreferrer"><img src="/media/lcbsee/sponsor-sv-scientific.jpg" alt="SV Scientific" /></a><a href="https://azurebiosystems.com/" target="_blank" rel="noreferrer"><img src="/media/lcbsee/sponsor-azure.png" alt="Azure Biosystems" /></a><a href="https://nitrkl.ac.in/" target="_blank" rel="noreferrer"><img src="/media/lcbsee/sponsor-nitr.jpg" alt="NIT Rourkela" /></a><a href="https://www.igenels.com/" target="_blank" rel="noreferrer"><img src="/media/lcbsee/sponsor-igene.jpg" alt="iGene Labserve" /></a></div></section></PageLayout>;
}

function PublicationsPage() {
  return <PageLayout><section className="lime-field publications-page"><h2>CONTACTED JOURNALS</h2><div className="journal-grid">{journals.map(([title, image, href]) => <article key={title}><a href={href} target="_blank" rel="noreferrer"><img src={image} alt={title} /><h3>{title}</h3></a></article>)}</div></section></PageLayout>;
}

function ReachPage() {
  return <PageLayout><section className="lime-field reach-page"><h2>REACHING ROURKELA</h2><div className="reach-map"><iframe title="NIT Rourkela map" src="https://www.google.com/maps?q=National%20Institute%20of%20Technology%20Rourkela&output=embed" loading="lazy" /></div></section></PageLayout>;
}

function ChaptersPage({ initialYear }: { initialYear?: string }) {
  const [current, setCurrent] = useState(initialYear === "2022" ? 0 : initialYear === "2020" ? 5 : initialYear === "2018" ? 10 : 0);
  const [lightbox, setLightbox] = useState(false);
  const move = (delta: number) => setCurrent((value) => (value + delta + galleryImages.length) % galleryImages.length);
  return <PageLayout><section className="lime-field chapters-page"><h2>{initialYear ? `ICBSEE ${initialYear}` : "PAST CHAPTERS"}</h2><div className="gallery"><button onClick={() => move(-1)} aria-label="Previous photo"><ChevronLeft /></button><img onClick={() => setLightbox(true)} src={galleryImages[current]} alt={`Past ICBSEE chapter, image ${current + 1}`} /><button onClick={() => move(1)} aria-label="Next photo"><ChevronRight /></button><span>{current + 1}/{galleryImages.length}</span></div>{lightbox && <div className="lightbox" role="dialog" aria-modal="true"><button className="lightbox-close" onClick={() => setLightbox(false)} aria-label="Close photo"><X /></button><button className="lightbox-arrow left" onClick={() => move(-1)} aria-label="Previous photo"><ChevronLeft /></button><img src={galleryImages[current]} alt="Expanded past ICBSEE chapter" /><button className="lightbox-arrow right" onClick={() => move(1)} aria-label="Next photo"><ChevronRight /></button></div>}</section></PageLayout>;
}

export default function ConferenceSite() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => setMobileOpen(false), [location]);

  const path = location === "" ? "/" : location;
  let page: React.ReactNode;
  if (path === "/") page = <HomePage />;
  else if (path === "/scope") page = <ScopePage />;
  else if (path.startsWith("/scope/")) {
    const detail = scopeDetails.find(({ slug }) => `/scope/${slug}` === path);
    page = detail ? <ScopeDetailPage detail={detail} /> : <ScopePage />;
  }
  else if (path === "/key-speakers") page = <SpeakersPage />;
  else if (path === "/abstract-submission") page = <AbstractPage />;
  else if (path === "/registration") page = <RegistrationPage />;
  else if (path === "/sponsors") page = <SponsorsPage />;
  else if (path === "/copy-of-scope") page = <PublicationsPage />;
  else if (path === "/reach-rourkela") page = <ReachPage />;
  else if (path === "/icbsee-2022") page = <ChaptersPage initialYear="2022" />;
  else if (path === "/icbsee-2020-1") page = <ChaptersPage initialYear="2020" />;
  else if (path === "/icbsee-2018") page = <ChaptersPage initialYear="2018" />;
  else page = <ChaptersPage />;

  const activePath = path.startsWith("/scope/") ? "/scope" : path;
  return <div className="conference-site"><Header activePath={activePath} onMenuOpen={() => setMobileOpen(true)} />{page}{mobileOpen && <MobileNavigation activePath={activePath} onClose={() => setMobileOpen(false)} />}</div>;
}
