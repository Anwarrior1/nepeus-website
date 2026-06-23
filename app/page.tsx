import type { CSSProperties, ReactNode } from "react";
import { Automation3DScene } from "./components/Automation3DScene";
import { ContactForm } from "./components/ContactForm";
import { DecorativeObject, HeroObjectCluster, MobileHeroBadges } from "./components/DecorativeObjects";
import { HeroNodes } from "./components/HeroNodes";
import { Navbar } from "./components/Navbar";
import { ScrollReveal } from "./components/ScrollReveal";
import { AgentWorkflow } from "./components/WorkflowVisual";

const painPoints = [
  "Customers wait too long for replies",
  "Orders get missed in chats",
  "Teams repeat the same answers every day",
  "Reports are prepared manually",
  "Customer data is scattered across platforms",
  "Decisions are made too late",
  "Employees waste time on repetitive tasks",
  "Systems are not connected"
];

const services = [
  {
    title: "AI Customer Service Agents",
    description:
      "AI agents that reply instantly on Messenger, Instagram DM, WhatsApp, or your website, answer questions, collect customer details, and escalate important cases."
  },
  {
    title: "AI Sales & Order Agents",
    description:
      "Agents that understand customer requests, ask for missing details, confirm orders, save customer information, update your system, and notify your team."
  },
  {
    title: "Workflow & Internal Operations Automation",
    description:
      "Automate the repetitive workflows inside your company - from approvals, reminders, task routing, data entry, follow-ups, and system updates to notifications between teams."
  },
  {
    title: "ERP / CRM Automation",
    description:
      "Connect your ERP or CRM with AI agents that monitor data, update records, send alerts, and help your team act faster."
  },
  {
    title: "Reports & Dashboards",
    description:
      "Generate automatic daily, weekly, or monthly reports and send them to management by email, WhatsApp, or dashboards."
  },
  {
    title: "Custom AI Agents",
    description:
      "Custom AI agents designed for any repetitive business process, built around the way your company actually works."
  }
];

const featureBullets = [
  "Works 24/7",
  "Replies instantly",
  "Collects customer name, phone, city, address, product, and quantity",
  "Confirms orders automatically",
  "Saves data into CRM, ERP, database, or Google Sheets",
  "Alerts the team when human attention is needed",
  "Reduces missed leads and lost orders"
];

const useCases = [
  {
    title: "Customer Support Automation",
    description:
      "AI agents answer repeated questions, guide customers, collect details, and hand off complex cases to your team."
  },
  {
    title: "Order Processing Automation",
    description:
      "Agents receive requests, ask for missing information, confirm orders, register them in your system, and notify your team."
  },
  {
    title: "Sales Follow-Up Automation",
    description:
      "Automatically follow up with leads, send reminders, qualify prospects, and update your CRM."
  },
  {
    title: "ERP / CRM Monitoring",
    description:
      "Monitor records, customer activity, sales movement, inventory, and operational data, then trigger the right action."
  },
  {
    title: "Automated Management Reports",
    description:
      "Automatically generate business summaries and send them to managers every day."
  },
  {
    title: "Internal Workflow Automation",
    description:
      "Route approvals, reminders, data checks, handoffs, and recurring internal tasks without manual chasing."
  }
];

const processSteps = [
  {
    title: "Analyze",
    description:
      "We understand your workflow, customer journey, tools, pain points, and repetitive tasks."
  },
  {
    title: "Design",
    description:
      "We design the AI agent logic, automation flow, data structure, and system connections."
  },
  {
    title: "Build",
    description:
      "We build and connect the AI agents with your tools, CRM, ERP, website, WhatsApp, Messenger, email, or database."
  },
  {
    title: "Launch",
    description:
      "We test the system, launch it, monitor performance, and improve it based on real business use."
  }
];

const benefits = [
  "Automates repetitive work",
  "Connects with your existing tools",
  "Updates your systems automatically",
  "Gives management clear visibility"
];

const chatbotItems = [
  "Answers basic questions",
  "Follows fixed scripts",
  "Limited to one channel",
  "Often disconnected from business systems"
];

const agentItems = [
  "Understands business context",
  "Collects and structures data",
  "Updates systems",
  "Generates reports",
  "Sends alerts",
  "Triggers workflows",
  "Escalates to humans when needed"
];

function revealStyle(order: number): CSSProperties {
  return { "--reveal-delay": `${80 + order * 72}ms` } as CSSProperties;
}

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollReveal />
      <main id="top" className="overflow-hidden">
        <HeroSection />
        <PainSection />
        <Automation3DScene />
        <ServicesSection />
        <AgentFeatureSection />
        <UseCasesSection />
        <ProcessSection />
        <WhySection />
        <ComparisonSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

function HeroSection() {
  return (
    <section className="hero-section scroll-reveal-section relative min-h-screen overflow-hidden pt-24 sm:pt-28 md:pt-32 lg:pt-36">
      <HeroNodes />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_43%,rgba(255,255,255,0.78),rgba(238,242,247,0.50)_34%,rgba(217,224,234,0.20)_58%,rgba(255,255,255,0.84)_100%)]" />
      <HeroObjectCluster />
      <div className="section-shell section-reveal-content relative z-10 flex min-h-[calc(100svh-6rem)] items-start pb-20 pt-16 sm:pt-20 md:min-h-[calc(100vh-7rem)] md:items-center md:pb-24 md:pt-0 lg:pb-28">
        <div className="mx-auto w-full max-w-5xl text-center">
          <div className="reveal-item mx-auto mb-8 inline-flex" style={revealStyle(0)}>
            <span className="eyebrow">
              <SparkleIcon className="h-3.5 w-3.5" />
              AI Agents & Business Automations
            </span>
          </div>
          <h1 className="reveal-item mx-auto max-w-xs text-balance text-[clamp(2.25rem,6vw,3.75rem)] font-semibold leading-[1.05] tracking-tight text-ink sm:max-w-xl md:max-w-3xl md:leading-[1.08]" style={revealStyle(1)}>
            Important Work Shouldn't Depend on Memory.
          </h1>
          <p className="reveal-item mx-auto mt-7 max-w-sm text-base leading-7 text-steel sm:max-w-lg sm:text-lg sm:leading-8 md:mt-6 md:max-w-2xl md:text-xl md:leading-9" style={revealStyle(2)}>
            If every order, follow-up, report, and update still depends on someone doing it manually, your business is already losing time, money, and opportunities. Nepeus builds AI agents and automation systems that take over repetitive work, connect your tools, and keep your operations running automatically.
          </p>
          <div className="reveal-item mx-auto mt-10 flex w-full max-w-xs flex-col justify-center gap-4 sm:max-w-sm md:mt-8 md:max-w-none md:flex-row md:gap-3" style={revealStyle(3)}>
            <a href="#contact" className="group primary-button w-full md:w-auto">
              Automate My Business
              <ArrowRightIcon className="btn-arrow h-4 w-4" />
            </a>
            <a href="#process" className="group secondary-button w-full md:w-auto">
              See How It Works
              <ArrowRightIcon className="btn-arrow h-4 w-4" />
            </a>
          </div>
          <MobileHeroBadges />
          <div className="mx-auto mt-10 grid max-w-[17.5rem] gap-3 sm:max-w-sm md:mt-12 md:max-w-[42rem] md:grid-cols-3">
            {["Manual tasks handled", "Systems connected", "Reports and alerts sent"].map((item, index) => (
              <div key={item} className="reveal-item glass-card interactive-card group rounded-[1.35rem] p-4 text-left" style={revealStyle(index + 4)} tabIndex={0}>
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-[0.95rem] bg-ink/5 text-ink">
                  {index === 0 ? <CheckIcon className="h-4 w-4" /> : index === 1 ? <LinkIcon className="h-4 w-4" /> : <BellIcon className="h-4 w-4" />}
                </div>
                <p className="text-[13px] font-semibold leading-snug text-ink">{item}</p>
                <p className="mt-1 text-[11px] leading-4 text-steel">Designed around daily work</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PainSection() {
  return (
    <section className="frosted-section scroll-reveal-section py-24 sm:py-28 lg:py-32">
      <DecorativeObject
        variant="ring"
        className="-left-8 top-20 hidden h-28 w-28 opacity-45 md:block"
      />
      <div className="section-shell section-reveal-content relative">
        <SectionIntro
          eyebrow="The hidden cost"
          title="Manual Work Is Quietly Slowing Your Business Down."
        >
          Every repeated task, delayed reply, missed follow-up, and manual report costs your business time and money.
        </SectionIntro>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((point, index) => (
            <div key={point} className="reveal-item silver-card interactive-card group rounded-[1.75rem] p-5" style={revealStyle(index + 3)} tabIndex={0}>
              <span className="mb-5 block h-2 w-2 rounded-full bg-ink shadow-[0_0_0_7px_rgba(10,10,12,0.08)] transition-all duration-300 group-hover:shadow-[0_0_0_10px_rgba(10,10,12,0.12)]" />
              <p className="text-base font-semibold leading-7 text-graphite">{point}</p>
            </div>
          ))}
        </div>
        <p className="reveal-item mx-auto mt-12 max-w-3xl text-center text-2xl font-semibold text-ink sm:text-3xl" style={revealStyle(11)}>
          Your business does not need more manual work. It needs smarter execution.
        </p>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="frosted-section scroll-reveal-section scroll-mt-24 py-24 sm:py-28 lg:py-32">
      <DecorativeObject
        variant="sphere"
        className="right-8 top-16 hidden h-20 w-20 opacity-55 lg:block"
      />
      <div className="section-shell section-reveal-content relative">
        <SectionIntro
          eyebrow="Services"
          title="AI Agents & Automations Built Around Any Repetitive Work."
        >
          From customer-facing agents to internal operations, Nepeus builds automation systems that understand tasks, act on data, update tools, and keep work moving.
        </SectionIntro>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <InfoCard
              key={service.title}
              index={index + 1}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AgentFeatureSection() {
  return (
    <section className="frosted-section scroll-reveal-section py-24 sm:py-28 lg:py-32">
      <DecorativeObject
        variant="cube"
        className="bottom-12 left-8 hidden h-24 w-24 opacity-45 lg:block"
      />
      <div className="section-shell section-reveal-content relative grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="reveal-item eyebrow" style={revealStyle(0)}>Featured use case</p>
          <h2 className="reveal-item mt-6 text-balance text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-ink" style={revealStyle(1)}>
            AI Customer Service Agents That Turn Messages Into Business Actions.
          </h2>
          <div className="reveal-item mt-6 space-y-5 text-base leading-8 text-steel sm:text-lg" style={revealStyle(2)}>
            <p>
              Customer service and order handling is one of the strongest examples of what Nepeus can build. Your customers are already messaging you, but your team cannot always reply, qualify, confirm, and register every request fast enough.
            </p>
            <p>
              These agents reply instantly, collect customer details, confirm orders, update your systems, and notify your team - so no lead, order, or customer request gets lost. It is a featured use case, not the limit of what Nepeus can automate.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {featureBullets.map((bullet, index) => (
              <FeatureItem key={bullet} order={index + 3}>{bullet}</FeatureItem>
            ))}
          </div>
        </div>
        <AgentWorkflow />
      </div>
    </section>
  );
}

function UseCasesSection() {
  return (
    <section id="use-cases" className="frosted-section scroll-reveal-section scroll-mt-24 py-24 sm:py-28 lg:py-32">
      <DecorativeObject
        variant="capsule"
        className="right-[-2rem] top-28 hidden h-16 w-44 rotate-12 opacity-45 md:block"
      />
      <div className="section-shell section-reveal-content relative">
        <SectionIntro eyebrow="Use cases" title="Built for Real Business Problems Across the Company.">
          From customer messages to internal approvals, reports, system updates, and alerts, every agent is shaped around the work that creates delays.
        </SectionIntro>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <InfoCard
              key={useCase.title}
              index={index + 1}
              title={useCase.title}
              description={useCase.description}
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="frosted-section scroll-reveal-section scroll-mt-24 py-24 sm:py-28 lg:py-32">
      <DecorativeObject
        variant="ring"
        className="bottom-12 right-[12%] hidden h-20 w-20 opacity-45 lg:block"
      />
      <div className="section-shell section-reveal-content relative">
        <SectionIntro eyebrow="Process" title="How Nepeus Builds Your AI System.">
          A clear path from workflow analysis to a launched agent that works inside your real operations.
        </SectionIntro>
        <div className="relative mt-16 grid gap-6 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-11 hidden h-px bg-gradient-to-r from-transparent via-black/20 to-transparent lg:block" />
          {processSteps.map((step, index) => (
            <div key={step.title} className="reveal-item glass-card interactive-card group relative rounded-[1.75rem] p-6" style={revealStyle(index + 3)} tabIndex={0}>
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-sm font-semibold text-white shadow-[0_16px_34px_rgba(10,10,12,0.20)] transition-transform duration-300 group-hover:scale-105">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-7 text-xl font-semibold text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-steel">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="dark-glass-section why-premium-section scroll-reveal-section py-24 text-white sm:py-28 lg:py-32">
      <div className="section-shell section-reveal-content grid gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <div className="relative max-w-2xl">
          <h3 className="reveal-item why-nepeus-pill" style={revealStyle(0)} tabIndex={0}>Why Nepeus?</h3>
          <h2 className="reveal-item text-balance text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight sm:leading-tight" style={revealStyle(1)}>
            Beyond Chatbots. AI Systems That Do the Work.
          </h2>
          <p className="reveal-item mt-6 text-lg leading-9 text-white/68" style={revealStyle(2)}>
            Nepeus builds custom AI agents that connect with your tools, handle repetitive tasks, update systems, and give your team clear visibility — without adding more manual work.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div key={benefit} className="reveal-item why-benefit-card interactive-dark-card rounded-2xl border border-white/12 bg-white/[0.065] p-4 backdrop-blur-xl" style={revealStyle(index + 3)} tabIndex={0}>
                <span className="mb-4 block h-1.5 w-1.5 rounded-full bg-white/80 shadow-[0_0_0_7px_rgba(255,255,255,0.08)]" />
                <p className="text-sm font-semibold leading-6 text-white/90">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-item" style={revealStyle(7)}>
          <WhyAutomationVisual />
        </div>
      </div>
    </section>
  );
}

function WhyAutomationVisual() {
  const nodes = [
    { label: "Tools", detail: "CRM / ERP", className: "why-planet-tools" },
    { label: "Tasks", detail: "Repeated work", className: "why-planet-tasks" },
    { label: "Updates", detail: "Systems sync", className: "why-planet-updates" },
    { label: "Visibility", detail: "Reports / alerts", className: "why-planet-visibility" }
  ];

  return (
    <div className="why-automation-visual" aria-label="Connected AI automation workflow visual">
      <div className="why-desktop-map">
        <div className="why-core-node" tabIndex={0}>
          <span>AI</span>
          <small>Automation Core</small>
        </div>

        {nodes.map((node) => (
          <div key={node.label} className={`why-floating-card ${node.className}`} tabIndex={0}>
            <span className="why-node-dot" />
            <div>
              <p>{node.label}</p>
              <small>{node.detail}</small>
            </div>
          </div>
        ))}

        <div className="why-orbit why-orbit-one" />
        <div className="why-orbit why-orbit-two" />
      </div>

      <div className="why-mobile-map" aria-hidden="true">
        <div className="why-mobile-step">
          <span className="why-node-dot" />
          <div>
            <p>Tools</p>
            <small>CRM / ERP</small>
          </div>
        </div>
        <div className="why-mobile-step">
          <span className="why-node-dot" />
          <div>
            <p>Tasks</p>
            <small>Repeated work</small>
          </div>
        </div>
        <div className="why-mobile-core" tabIndex={0}>
          <span>AI</span>
          <small>Automation Core</small>
        </div>
        <div className="why-mobile-step">
          <span className="why-node-dot" />
          <div>
            <p>Updates</p>
            <small>Systems sync</small>
          </div>
        </div>
        <div className="why-mobile-step">
          <span className="why-node-dot" />
          <div>
            <p>Visibility</p>
            <small>Reports / alerts</small>
          </div>
        </div>
      </div>
    </div>
  );
}

function ComparisonSection() {
  return (
    <section className="frosted-section scroll-reveal-section py-24 sm:py-28 lg:py-32">
      <div className="section-shell section-reveal-content">
        <SectionIntro eyebrow="Comparison" title="Chatbot vs Custom AI Automation">
          The difference is not the interface. It is whether the system can understand the workflow and actually move work forward.
        </SectionIntro>
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <ComparisonCard title="Generic Chatbot" items={chatbotItems} order={3} />
          <ComparisonCard title="Nepeus AI Automation" items={agentItems} featured order={4} />
        </div>
        <p className="reveal-item mx-auto mt-12 max-w-2xl text-center text-2xl font-semibold text-ink sm:text-3xl" style={revealStyle(5)}>
          A chatbot replies. A custom AI automation system gets work done.
        </p>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="frosted-section scroll-reveal-section scroll-mt-24 py-24 sm:py-28 lg:py-32">
      <div className="section-shell section-reveal-content">
        <ContactForm />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer scroll-reveal-section py-12">
      <div className="section-shell section-reveal-content flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="reveal-item flex items-center gap-3" style={revealStyle(0)}>
          <span className="glass-card flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl">
            <img src="/nepeus-logo.png" alt="" className="h-10 w-10 object-cover" />
          </span>
          <div>
            <p className="font-semibold text-ink">Nepeus</p>
            <p className="text-sm text-steel">AI Agents & Automations for Smarter Businesses.</p>
          </div>
        </div>
        <div className="reveal-item flex flex-wrap gap-6 text-sm font-medium text-steel" style={revealStyle(1)}>
          <a href="#services" className="transition hover:text-ink">Services</a>
          <a href="#use-cases" className="transition hover:text-ink">Use Cases</a>
          <a href="#process" className="transition hover:text-ink">Process</a>
          <a href="#contact" className="transition hover:text-ink">Contact</a>
        </div>
        <p className="reveal-item text-sm text-steel" style={revealStyle(2)}>&copy; 2026 Nepeus. All rights reserved.</p>
      </div>
    </footer>
  );
}

function SectionIntro({
  eyebrow,
  title,
  children
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="reveal-item eyebrow" style={revealStyle(0)}>{eyebrow}</p>
      <h2 className="reveal-item mt-6 text-balance text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-ink" style={revealStyle(1)}>
        {title}
      </h2>
      <p className="reveal-item mt-5 text-base leading-8 text-steel sm:text-lg" style={revealStyle(2)}>{children}</p>
    </div>
  );
}

function InfoCard({
  index,
  title,
  description,
  compact = false
}: {
  index: number;
  title: string;
  description: string;
  compact?: boolean;
}) {
  return (
    <article className="reveal-item silver-card interactive-card card-shine group rounded-[1.75rem] p-6" style={revealStyle(index + 3)} tabIndex={0}>
      <div className="flex items-center justify-between gap-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-xs font-semibold text-white shadow-[0_8px_20px_rgba(10,10,12,0.18)] transition-transform duration-300 group-hover:scale-105">
          {String(index).padStart(2, "0")}
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-black/20 to-transparent" />
      </div>
      <h3 className={`${compact ? "mt-6" : "mt-8"} text-xl font-semibold text-ink`}>
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-steel">{description}</p>
    </article>
  );
}

function FeatureItem({ children, order = 0 }: { children: ReactNode; order?: number }) {
  return (
    <div className="reveal-item glass-card interactive-card flex gap-3 rounded-2xl p-4" style={revealStyle(order)} tabIndex={0}>
      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-ink" />
      <p className="text-sm font-medium leading-6 text-graphite">{children}</p>
    </div>
  );
}

function ComparisonCard({
  title,
  items,
  featured = false,
  order = 0
}: {
  title: string;
  items: string[];
  featured?: boolean;
  order?: number;
}) {
  return (
    <div className={`reveal-item ${featured ? "dark-card" : "silver-card interactive-card card-shine"} rounded-[2rem] p-7 sm:p-8`} style={revealStyle(order)} tabIndex={featured ? undefined : 0}>
      <div className="flex items-center gap-3">
        {featured && <SparkleIcon className="h-5 w-5 text-white/80" />}
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
      <ul className="mt-7 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className={`${featured ? "bg-white" : "bg-ink"} mt-2 h-2 w-2 shrink-0 rounded-full`} />
            <span className={`${featured ? "text-white/80" : "text-steel"} text-sm leading-7`}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ArrowRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m20 6-9 12-5-5" />
    </svg>
  );
}

function LinkIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function BellIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 9.8a6 6 0 0 0-12 0c0 6-2.3 6.5-2.3 6.5h16.6S18 15.8 18 9.8Z" />
      <path d="M10 19a2.2 2.2 0 0 0 4 0" />
      <path d="M19.4 5.8 21 4.2" />
      <path d="M4.6 5.8 3 4.2" />
    </svg>
  );
}

function SparkleIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2v4" />
      <path d="m19 5-3 3" />
      <path d="m5 5 3 3" />
      <path d="m17 12h4" />
      <path d="m3 12h4" />
      <path d="m16 19 3 3" />
      <path d="m8 19-3 3" />
      <path d="M12 18v4" />
    </svg>
  );
}
