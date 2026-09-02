"use client";

import { useState } from "react";
import {
  CalendarCheck,
  ArrowRight,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { defaultAgencyConfig } from "@/config/agencyConfig";
import { generateWhatsAppLink } from "@/utils/formatters";
import ViewingRequestModal from "@/components/property/ViewingRequestModal";
import { mockProperties } from "@/data/mockProperties";

export default function SchedulePage() {
  const [modalOpen, setModalOpen] = useState(false);

  const featuredProperty =
    mockProperties.find(
      (p) => p.buyOrRent === "Buy" && p.price >= 300000000
    ) || mockProperties[0];

  const whatsappLink = generateWhatsAppLink(
    defaultAgencyConfig.whatsappNumber,
    "Hello Bluehedge Realtors, I would like to schedule a property viewing. Please contact me with available slots."
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-50">
          <CalendarCheck className="h-7 w-7 text-[var(--brand-primary)]" />
        </div>
        <h1 className="mt-4 font-display text-3xl font-bold text-ink">
          Schedule a Viewing
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-sm text-ink-700">
          Book a private inspection of any property on our platform. Choose
          between an in-person walkthrough or a virtual live tour with one of our
          expert agents.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {/* In-Person */}
        <div className="rounded-lg border border-line bg-canvas-card p-6 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-50">
            <MapPin className="h-5 w-5 text-[var(--brand-primary)]" />
          </div>
          <h2 className="mt-4 text-base font-bold text-ink">
            In-Person Inspection
          </h2>
          <p className="mt-2 text-xs text-ink-700">
            Visit the property with one of our agents. We provide
            chauffeur-driven tours across all locations in Lagos and Abuja.
          </p>
          <ul className="mt-4 space-y-2 text-xs text-ink-700">
            <li className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-forest" />
              Guided walkthrough with expert agent
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-forest" />
              Free pickup from your location
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-forest" />
              60–90 minute detailed inspection
            </li>
          </ul>
          <button
            onClick={() => setModalOpen(true)}
            className="mt-6 flex w-full items-center justify-center gap-1.5 rounded-lg bg-ink py-3 text-sm font-bold text-canvas transition-colors hover:bg-ink-800"
          >
            Book In-Person
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Virtual Tour */}
        <div className="rounded-lg border border-line bg-canvas-card p-6 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-50">
            <Clock className="h-5 w-5 text-[var(--brand-primary)]" />
          </div>
          <h2 className="mt-4 text-base font-bold text-ink">
            Virtual Live Tour
          </h2>
          <p className="mt-2 text-xs text-ink-700">
            Join a live video call with our agent who will walk you through the
            property in real time from anywhere in the world.
          </p>
          <ul className="mt-4 space-y-2 text-xs text-ink-700">
            <li className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[var(--brand-primary)]" />
              Live WhatsApp or Zoom walkthrough
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[var(--brand-primary)]" />
              Perfect for overseas buyers
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[var(--brand-primary)]" />
              Q&A session with the agent
            </li>
          </ul>
          <button
            onClick={() => setModalOpen(true)}
            className="mt-6 flex w-full items-center justify-center gap-1.5 rounded-lg border border-line py-3 text-sm font-bold text-ink transition-colors hover:bg-canvas-muted"
          >
            Book Virtual Tour
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Quick Contact */}
      <div className="mt-10 flex flex-col items-center gap-4 rounded-lg border border-line bg-canvas-muted p-6 text-center sm:flex-row sm:text-left">
        <div className="flex-1">
          <h3 className="text-sm font-bold text-ink">Prefer to speak directly?</h3>
          <p className="mt-1 text-xs text-ink-700">
            Call us at {defaultAgencyConfig.phone} or message us on WhatsApp — we
            respond within minutes during business hours.
          </p>
        </div>
        <div className="flex gap-2">
          <a
            href={`tel:${defaultAgencyConfig.phone}`}
            className="flex items-center gap-1.5 rounded-lg border border-line bg-canvas-card px-4 py-2.5 text-xs font-semibold text-ink transition-colors hover:bg-canvas-muted"
          >
            <Phone className="h-3.5 w-3.5" />
            Call Now
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg bg-whatsapp px-4 py-2.5 text-xs font-semibold text-canvas transition-colors hover:bg-whatsapp-700"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            WhatsApp
          </a>
        </div>
      </div>

      <ViewingRequestModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        property={featuredProperty}
      />
    </div>
  );
}
