import type { CSSProperties } from "react";

function revealStyle(order: number): CSSProperties {
  return { "--reveal-delay": `${80 + order * 72}ms` } as CSSProperties;
}

export function ContactForm() {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="reveal-item dark-card rounded-[2rem] p-8 sm:p-10" style={revealStyle(0)}>
        <div className="reveal-item" style={revealStyle(1)}>
          <span className="eyebrow-dark">
            Contact
          </span>
        </div>
        <h2 className="reveal-item mt-6 text-balance text-3xl font-semibold text-white sm:text-4xl" style={revealStyle(2)}>
          Let's Build Your AI Agent.
        </h2>
        <p className="reveal-item mt-4 text-base leading-8 text-white/70" style={revealStyle(3)}>
          Send us a message and tell us what you want to automate. We will help you map the work your team repeats and turn it into a smarter system.
        </p>

        <div className="reveal-item mt-10 grid gap-4 sm:grid-cols-2" style={revealStyle(4)}>
          <a
            href="mailto:nepeusai@gmail.com"
            className="group flex items-center gap-4 rounded-2xl border border-white/12 bg-white/[0.06] p-4 backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:bg-white/[0.10]"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white transition-transform duration-300 group-hover:scale-105">
              <MailIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/50">Email us</p>
              <p className="mt-0.5 text-sm font-semibold text-white">nepeusai@gmail.com</p>
            </div>
          </a>

          <a
            href="https://t.me/nepeusai"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-white/12 bg-white/[0.06] p-4 backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:bg-white/[0.10]"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white transition-transform duration-300 group-hover:scale-105">
              <TelegramIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/50">Chat on</p>
              <p className="mt-0.5 text-sm font-semibold text-white">Telegram</p>
            </div>
          </a>
        </div>

        <div className="reveal-item mt-8 flex flex-col gap-4 sm:flex-row" style={revealStyle(5)}>
          <a
            href="mailto:nepeusai@gmail.com"
            className="secondary-button w-full justify-center border-white/15 bg-white/10 text-white hover:bg-white/15 hover:text-white sm:w-auto"
          >
            Send an Email
          </a>
          <a
            href="https://t.me/nepeusai"
            target="_blank"
            rel="noreferrer"
            className="secondary-button w-full justify-center border-white/15 bg-white/10 text-white hover:bg-white/15 hover:text-white sm:w-auto"
          >
            Chat on Telegram
          </a>
        </div>
      </div>
    </div>
  );
}

function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function TelegramIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21.5 4.5 2.5 11.5l7 3 3 7 9-17z" />
      <path d="M12.5 14.5 17 9" />
    </svg>
  );
}
