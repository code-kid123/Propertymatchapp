"use client";

import { MessageCircle } from "lucide-react";
import { defaultAgencyConfig } from "@/config/agencyConfig";
import { generateWhatsAppLink } from "@/utils/formatters";

const INQUIRY_MESSAGE =
  "Hello Bluehedge Realtors, I am browsing your listings and would like to make an inquiry.";

export default function FloatingWhatsApp() {
  const config = defaultAgencyConfig;
  const href = generateWhatsAppLink(config.whatsappNumber, INQUIRY_MESSAGE);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 hidden md:flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-soft transition-transform duration-200 hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
