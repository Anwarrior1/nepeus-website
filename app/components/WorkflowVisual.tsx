"use client";

import { useState } from "react";

const agentFlow = [
  {
    title: "Understand Request",
    detail: "Reads the customer message and identifies intent, product, urgency, and missing information."
  },
  {
    title: "Ask for Missing Details",
    detail: "Collects name, phone, city, address, product, quantity, or any detail your process requires."
  },
  {
    title: "Confirm Order",
    detail: "Checks the final request with the customer before creating or updating the order."
  },
  {
    title: "Save Customer & Order",
    detail: "Registers the customer and order inside your CRM, ERP, spreadsheet, or database."
  },
  {
    title: "Notify Team",
    detail: "Sends the right alert to the team so human work starts only when it is actually needed."
  }
];

const channels = [
  { name: "Messenger", icon: <MessengerIcon /> },
  { name: "WhatsApp", icon: <WhatsAppIcon /> },
  { name: "Instagram", icon: <InstagramIcon /> },
  { name: "Website", icon: <WebsiteIcon /> }
];

export function AgentWorkflow() {
  const [activeChannel, setActiveChannel] = useState(channels[0].name);
  const [activeStep, setActiveStep] = useState(0);
  const selectedStep = agentFlow[activeStep];

  return (
    <div className="silver-card relative overflow-hidden rounded-[2rem] p-5 sm:p-7">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/30 to-transparent" />
      <div className="flex flex-wrap gap-2" role="group" aria-label="Choose customer channel">
        {channels.map((channel) => (
          <button
            key={channel.name}
            type="button"
            onClick={() => setActiveChannel(channel.name)}
            className={`workflow-filter glass-chip inline-flex min-h-[2.75rem] items-center gap-2 px-3 py-2 text-xs font-semibold transition-all duration-200 ${
              activeChannel === channel.name ? "is-active" : ""
            }`}
            aria-pressed={activeChannel === channel.name}
          >
            <span className="h-4 w-4">{channel.icon}</span>
            {channel.name}
          </button>
        ))}
      </div>

      <div className="my-7 flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-black/20 to-black/20" />
        <div className="flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(10,10,12,0.22)]">
          <SparkleIcon className="h-4 w-4" />
          AI Agent
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-black/20 via-black/20 to-transparent" />
      </div>

      <div
        key={`${activeChannel}-${activeStep}`}
        className="mb-4 rounded-2xl border border-white/80 bg-white/50 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.84),0_14px_36px_rgba(47,56,68,0.08)] backdrop-blur-xl transition-all duration-300 animate-fade-in"
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-steel">{activeChannel} workflow</p>
        <p className="mt-2 text-base font-semibold text-ink">{selectedStep.title}</p>
        <p className="mt-1 text-sm leading-6 text-steel">{selectedStep.detail}</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {agentFlow.map((step, index) => (
          <button
            key={step.title}
            type="button"
            onClick={() => setActiveStep(index)}
            className={`glass-card interactive-card min-h-[4.5rem] rounded-2xl p-4 text-left transition-all duration-200 ${
              activeStep === index ? "is-selected" : ""
            }`}
            aria-pressed={activeStep === index}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-steel">
              Step {index + 1}
            </p>
            <p className="mt-2 text-sm font-semibold text-ink">{step.title}</p>
          </button>
        ))}
      </div>
    </div>
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

function MessengerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 11.5 14 8.5l-4 4.5-3-3" />
      <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0-1 0v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 0-1H9V10Z" />
      <path d="M14 10.5v.01" />
      <path d="M14 13.5v.01" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function WebsiteIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
