import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  Gem,
  Watch,
  UtensilsCrossed,
  ShoppingBag,
  LayoutTemplate,
  Sparkles,
  Smartphone,
  Gauge,
  LayoutGrid,
  Compass,
  BadgeDollarSign,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteHeader } from "@/components/site-header";
import { ContactSection, CONTACT } from "@/components/contact-section";
import { useReveal } from "@/hooks/use-reveal";
import boutiqueImg from "@/assets/sample-boutique.jpg";
import jewelleryImg from "@/assets/sample-jewellery.jpg";
import watchImg from "@/assets/sample-watch.jpg";
import akLogo from "@/assets/ak-logo.png.asset.json";

const title = "AK Web Design — Professional Website Design for Modern Businesses";
const description =
  "AK Web Design creates modern, responsive and user-friendly websites for boutiques, jewellery stores, watch stores, restaurants and small businesses.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Briefcase,
    name: "Business Website",
    text: "A professional online home for your company with clear services, contact and enquiry flow.",
  },
  {
    icon: ShoppingBag,
    name: "Boutique Website",
    text: "Elegant catalogue layouts that show collections beautifully on every screen size.",
  },
  {
    icon: Gem,
    name: "Jewellery Website",
    text: "Refined, luxury-styled pages designed to make fine pieces the centre of attention.",
  },
  {
    icon: Watch,
    name: "Watch Store Website",
    text: "Premium product presentation with crisp detail views and confident typography.",
  },
  {
    icon: UtensilsCrossed,
    name: "Restaurant Website",
    text: "Menus, gallery, timings and reservations laid out for hungry mobile visitors.",
  },
  {
    icon: LayoutTemplate,
    name: "Portfolio Website",
    text: "A clean personal or studio site that presents your work with quiet confidence.",
  },
];

const projects = [
  {
    name: "Sample Boutique Website",
    text: "A concept storefront for a fashion boutique with collection grid and lookbook.",
    image: boutiqueImg,
  },
  {
    name: "Sample Jewellery Website",
    text: "A concept layout for a jewellery brand with a dark, luxury product showcase.",
    image: jewelleryImg,
  },
  {
    name: "Sample Watch Store Website",
    text: "A concept design for a watch store focused on detail shots and clear pricing.",
    image: watchImg,
  },
];

const reasons = [
  { icon: Sparkles, name: "Modern Design", text: "Current, clean visual style with no dated templates." },
  { icon: Smartphone, name: "Mobile Responsive", text: "Looks right on phones, tablets and desktops." },
  { icon: Gauge, name: "Fast Loading", text: "Lightweight pages built to open quickly." },
  { icon: LayoutGrid, name: "Professional Layout", text: "Structured sections that build trust instantly." },
  { icon: Compass, name: "Easy Navigation", text: "Visitors find what they need in a click or two." },
  { icon: BadgeDollarSign, name: "Affordable Website Design", text: "Honest pricing suited to small businesses." },
];

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Most small business websites take around 1 to 2 weeks from the moment content and images are ready. Larger sites with more pages take a little longer, and I share a clear timeline before starting.",
  },
  {
    q: "Is the website mobile responsive?",
    a: "Yes. Every website I design is built mobile-first and tested on phone, tablet and desktop widths so the layout stays clean everywhere.",
  },
  {
    q: "Can you redesign an existing website?",
    a: "Absolutely. I can rebuild an existing site with a modern layout, faster pages and a cleaner structure while keeping your brand and content.",
  },
  {
    q: "How can I contact you?",
    a: "Message me on WhatsApp, send an email, or use the contact form on this page. I usually reply the same day.",
  },
];

function Index() {
  useReveal();

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Home */}
        <section id="home" className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-28">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-[image:var(--gradient-royal)] opacity-15 blur-3xl"
          />
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <div className="reveal max-w-3xl">
              <p className="eyebrow">AK Web Design</p>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
                Professional Website Design for{" "}
                <span className="text-royal-gradient">Modern Businesses</span>
              </h1>
              <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
                I create modern, responsive and user-friendly websites for businesses.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button variant="royal" size="lg" asChild>
                  <a href="#portfolio">
                    View Portfolio <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button variant="royalOutline" size="lg" asChild>
                  <a href="#contact">Contact Me</a>
                </Button>
              </div>
            </div>

            <div className="reveal mt-16 grid gap-4 sm:grid-cols-3">
              {["Mobile responsive by default", "Fast, lightweight pages", "Clean, professional layouts"].map(
                (item) => (
                  <div key={item} className="surface-card p-5 text-sm font-medium">
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24 border-y border-border bg-secondary/50 py-20 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <div className="reveal">
              <p className="eyebrow">About</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Design studio work, small business pricing
              </h2>
            </div>
            <div className="reveal space-y-5 text-muted-foreground">
              <p>
                AK Web Design is an independent web design practice focused on giving small
                businesses a website they are proud to share. Every project starts with your brand,
                your customers and the action you want visitors to take.
              </p>
              <p>
                I design modern business websites for boutiques, jewellery stores, watch stores,
                restaurants and small businesses — from a single elegant landing page to a full
                multi-page site with menus, catalogues and enquiry forms.
              </p>
              <p className="font-medium text-foreground">
                Every website I deliver is mobile responsive, fast, clean and professional.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-24 py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <div className="reveal max-w-2xl">
              <p className="eyebrow">Services</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">What I design</h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article key={s.name} className="reveal surface-card p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-accent-foreground">
                    <s.icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{s.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="scroll-mt-24 bg-ink py-20 text-ink-foreground lg:py-28">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <div className="reveal max-w-2xl">
              <p className="eyebrow">Portfolio</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Sample projects</h2>
              <p className="mt-4 text-sm text-ink-foreground/70">
                These are sample design concepts created to demonstrate my design style. They are
                not client projects.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <article
                  key={p.name}
                  className="reveal overflow-hidden rounded-3xl border border-ink-foreground/12 bg-ink-foreground/[0.04] transition-transform duration-300 hover:-translate-y-1"
                >
                  <img
                    src={p.image}
                    alt={`${p.name} design preview`}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="p-6">
                    <span className="eyebrow">Sample project</span>
                    <h3 className="mt-2 text-lg font-semibold">{p.name}</h3>
                    <p className="mt-2 text-sm text-ink-foreground/65">{p.text}</p>
                    <Button variant="royal" size="sm" className="mt-5" asChild>
                      <a href="#contact">
                        View Demo <ArrowRight className="size-4" />
                      </a>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why choose */}
        <section id="why" className="scroll-mt-24 py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <div className="reveal max-w-2xl">
              <p className="eyebrow">Why choose</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Why choose AK Web Design</h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {reasons.map((r) => (
                <div key={r.name} className="reveal surface-card flex gap-4 p-6">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[image:var(--gradient-royal)] text-primary-foreground">
                    <r.icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold">{r.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-24 border-y border-border bg-secondary/50 py-20 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
            <div className="reveal">
              <p className="eyebrow">FAQ</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Common questions</h2>
            </div>
            <Accordion type="single" collapsible className="reveal w-full">
              {faqs.map((f) => (
                <AccordionItem key={f.q} value={f.q}>
                  <AccordionTrigger className="text-left text-base font-semibold">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <ContactSection />
      </main>

      <footer className="bg-ink py-14 text-ink-foreground">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="flex items-center gap-2">
                <img
                  src={akLogo.url}
                  alt="AK Web Design logo"
                  width={36}
                  height={36}
                  className="h-9 w-9 rounded-xl object-cover"
                />
                <span className="font-display text-lg font-semibold">AK Web Design</span>
              </div>
              <p className="mt-4 max-w-xs text-sm text-ink-foreground/65">
                Modern, responsive and professional website design for boutiques, jewellery and
                watch stores, restaurants and small businesses.
              </p>
            </div>

            <nav className="text-sm">
              <h3 className="text-sm font-semibold">Navigation</h3>
              <ul className="mt-4 space-y-2 text-ink-foreground/65">
                {[
                  ["#home", "Home"],
                  ["#about", "About"],
                  ["#services", "Services"],
                  ["#portfolio", "Portfolio"],
                  ["#faq", "FAQ"],
                  ["#contact", "Contact"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a href={href} className="transition-colors hover:text-primary-foreground">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="text-sm">
              <h3 className="text-sm font-semibold">Contact</h3>
              <ul className="mt-4 space-y-2 text-ink-foreground/65">
                <li>
                  <a href={`mailto:${CONTACT.email}`} className="hover:text-primary-foreground">
                    {CONTACT.email}
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 hover:text-primary-foreground"
                  >
                    <MessageCircle className="size-4" /> {CONTACT.whatsappNumber}
                  </a>
                </li>
                <li>{CONTACT.location}</li>
              </ul>
            </div>
          </div>

          <p className="mt-12 border-t border-ink-foreground/12 pt-6 text-xs text-ink-foreground/55">
            © {new Date().getFullYear()} AK Web Design. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
