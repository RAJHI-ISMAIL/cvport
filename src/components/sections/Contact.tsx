"use client";

import React, { useState } from "react";
import { siteContent } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, Globe, Check, Copy, Send } from "lucide-react";
import { SparkleDoodle } from "@/components/ui/Doodles";

export const Contact: React.FC = () => {
  const { personal } = siteContent;
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
      formState.subject || `Inquiry from ${formState.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section
      id="contact"
      className="w-full bg-paper border-b-3 border-ink"
      aria-label="Contact Section"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Col: Contact Info & Direct Links (Col-span-5) */}
        <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 bg-cream border-b-3 lg:border-b-0 lg:border-r-3 border-ink flex flex-col justify-between relative overflow-hidden">
          <SparkleDoodle
            className="absolute top-4 right-4 w-7 h-7"
            fillColor="#FFD21F"
          />

          <div>
            <span className="inline-block px-3 py-1 bg-violet text-white font-mono text-[11px] font-bold uppercase tracking-wider border-2 border-ink shadow-brut-xs mb-4">
              COMMUNICATION
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl uppercase tracking-tight text-ink">
              GET IN TOUCH
            </h2>

            <p className="font-mono text-xs sm:text-sm text-ink/85 mt-3 leading-relaxed">
              Have an inquiry, project proposal, or research discussion? Reach out
              directly through email, phone, or the contact composer.
            </p>

            {/* Contact Details Stack */}
            <div className="mt-8 space-y-4">
              {/* Email Card */}
              <div className="p-4 bg-paper border-brut-2 border-ink shadow-brut-xs flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-none bg-lime border-2 border-ink flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-ink" />
                  </div>
                  <div className="truncate">
                    <div className="font-mono text-[10px] text-ink/60 font-bold uppercase">
                      EMAIL
                    </div>
                    <a
                      href={`mailto:${personal.email}`}
                      className="font-mono text-xs sm:text-sm font-bold text-ink hover:text-violet truncate block"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(personal.email, "email")}
                  title="Copy email address"
                  className="w-8 h-8 flex items-center justify-center border-2 border-ink bg-cream hover:bg-yellow transition-colors shrink-0 ml-2"
                >
                  {copiedField === "email" ? (
                    <Check className="w-4 h-4 text-ink" />
                  ) : (
                    <Copy className="w-4 h-4 text-ink" />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 bg-paper border-brut-2 border-ink shadow-brut-xs flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-none bg-yellow border-2 border-ink flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-ink" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-ink/60 font-bold uppercase">
                      PHONE / WHATSAPP
                    </div>
                    <a
                      href={`tel:${personal.phone}`}
                      className="font-mono text-xs sm:text-sm font-bold text-ink hover:text-violet block"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(personal.phone, "phone")}
                  title="Copy phone number"
                  className="w-8 h-8 flex items-center justify-center border-2 border-ink bg-cream hover:bg-yellow transition-colors shrink-0 ml-2"
                >
                  {copiedField === "phone" ? (
                    <Check className="w-4 h-4 text-ink" />
                  ) : (
                    <Copy className="w-4 h-4 text-ink" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 bg-paper border-brut-2 border-ink shadow-brut-xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-none bg-pink border-2 border-ink flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-ink" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-ink/60 font-bold uppercase">
                    CURRENT LOCATION
                  </div>
                  <div className="font-mono text-xs sm:text-sm font-bold text-ink">
                    {personal.location}
                  </div>
                </div>
              </div>

              {/* Website Card */}
              <div className="p-4 bg-paper border-brut-2 border-ink shadow-brut-xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-none bg-sky border-2 border-ink flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-ink" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-ink/60 font-bold uppercase">
                    PORTFOLIO DOMAIN
                  </div>
                  <a
                    href={personal.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs sm:text-sm font-bold text-ink hover:text-violet"
                  >
                    {personal.website}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col: Neo-Brutalist Message Composer (Col-span-7) */}
        <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 bg-paper flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b-2 border-ink/20 mb-6">
              <h3 className="font-heading text-xl uppercase tracking-wider text-ink">
                Quick Message Composer
              </h3>
              <span className="font-mono text-[11px] font-bold text-ink/60">
                MAILTO POWERED
              </span>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-mono text-xs font-bold uppercase text-ink mb-1.5"
                  >
                    YOUR NAME *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Alex Smith"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-paper border-brut-2 border-ink shadow-brut-xs font-mono text-xs text-ink focus:outline-none focus:bg-yellow/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-xs font-bold uppercase text-ink mb-1.5"
                  >
                    YOUR EMAIL *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="e.g. alex@company.com"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-paper border-brut-2 border-ink shadow-brut-xs font-mono text-xs text-ink focus:outline-none focus:bg-yellow/10"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block font-mono text-xs font-bold uppercase text-ink mb-1.5"
                >
                  SUBJECT *
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  placeholder="e.g. Research Collaboration / Job Opportunity"
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState({ ...formState, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-paper border-brut-2 border-ink shadow-brut-xs font-mono text-xs text-ink focus:outline-none focus:bg-yellow/10"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block font-mono text-xs font-bold uppercase text-ink mb-1.5"
                >
                  MESSAGE *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Write your note or project inquiry here..."
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-paper border-brut-2 border-ink shadow-brut-xs font-mono text-xs text-ink focus:outline-none focus:bg-yellow/10 resize-none"
                />
              </div>

              <div className="pt-2">
                <Button type="submit" variant="primary" size="lg">
                  <span>OPEN EMAIL CLIENT</span>
                  <Send className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
