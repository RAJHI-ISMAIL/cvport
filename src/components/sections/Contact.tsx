"use client";

import React, { useState } from "react";
import { siteContent } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, Globe, Check, Copy, Send, QrCode, X } from "lucide-react";
import { SparkleDoodle } from "@/components/ui/Doodles";
import { useLang } from "@/context/LanguageContext";

const WechatIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8.5 2C4.36 2 1 4.91 1 8.5c0 1.99.98 3.78 2.53 5.01L2.6 16.7a.5.5 0 0 0 .72.54l3.52-1.76c.53.11 1.09.18 1.66.18.23 0 .45-.02.68-.04C9.07 15.17 9 14.6 9 14c0-3.87 3.81-7 8.5-7 .34 0 .67.02 1 .06C17.48 4.14 13.34 2 8.5 2zm-2.25 4.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zm4.5 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM16 8.5c-3.87 0-7 2.46-7 5.5s3.13 5.5 7 5.5c.52 0 1.02-.05 1.5-.15l2.84 1.42a.5.5 0 0 0 .72-.54l-.75-2.58C21.46 16.59 23 15.16 23 14c0-3.04-3.13-5.5-7-5.5zm-2.25 3.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4.5 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
  </svg>
);

export const Contact: React.FC = () => {
  const { personal } = siteContent;
  const { t } = useLang();
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [showWechatQr, setShowWechatQr] = useState(false);

  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowWechatQr(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

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
              {t.contact.sectionLabel}
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

              {/* WeChat Card (Clickable to show QR code) */}
              <div
                onClick={() => setShowWechatQr(true)}
                className="p-4 bg-paper border-brut-2 border-ink shadow-brut-xs flex items-center justify-between cursor-pointer transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-lime/10 group select-none"
                title="Click to view WeChat QR Code"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-none bg-lime border-2 border-ink flex items-center justify-center shrink-0 text-ink group-hover:bg-yellow transition-colors">
                    <WechatIcon />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-ink/60 font-bold uppercase">
                        WECHAT (微信)
                      </span>
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.2 bg-yellow border border-ink text-[9px] font-mono font-bold text-ink">
                        <QrCode className="w-2.5 h-2.5" />
                        VIEW QR
                      </span>
                    </div>
                    <span className="font-mono text-xs sm:text-sm font-bold text-ink block mt-0.5">
                      {personal.wechat}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowWechatQr(true);
                    }}
                    title="View QR Code"
                    aria-label="View WeChat QR Code"
                    className="w-8 h-8 flex items-center justify-center border-2 border-ink bg-yellow hover:bg-lime transition-colors shrink-0"
                  >
                    <QrCode className="w-4 h-4 text-ink" />
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopy(personal.wechat, "wechat");
                    }}
                    title="Copy WeChat ID"
                    aria-label="Copy WeChat ID"
                    className="w-8 h-8 flex items-center justify-center border-2 border-ink bg-cream hover:bg-yellow transition-colors shrink-0"
                  >
                    {copiedField === "wechat" ? (
                      <Check className="w-4 h-4 text-ink" />
                    ) : (
                      <Copy className="w-4 h-4 text-ink" />
                    )}
                  </button>
                </div>
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
                  <label htmlFor="contact-name" className="block font-mono text-xs font-bold uppercase text-ink mb-1.5">
                    {t.contact.namePlaceholder} *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder={t.contact.namePlaceholder}
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 bg-paper border-brut-2 border-ink shadow-brut-xs font-mono text-xs text-ink focus:outline-none focus:bg-yellow/10"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block font-mono text-xs font-bold uppercase text-ink mb-1.5">
                    {t.contact.emailPlaceholder} *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder={t.contact.emailPlaceholder}
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
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
                <label htmlFor="contact-message" className="block font-mono text-xs font-bold uppercase text-ink mb-1.5">
                  {t.contact.messagePlaceholder} *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder={t.contact.messagePlaceholder}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
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

      {/* WeChat QR Code Modal */}
      {showWechatQr && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="WeChat QR Code Modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/75 backdrop-blur-xs animate-fadeIn"
          onClick={() => setShowWechatQr(false)}
        >
          <div
            className="w-full max-w-sm bg-paper border-brut-3 border-ink shadow-brut p-6 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b-3 border-ink mb-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-lime border-2 border-ink flex items-center justify-center">
                  <WechatIcon />
                </div>
                <h3 className="font-heading text-lg uppercase tracking-tight text-ink">
                  WeChat (微信)
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowWechatQr(false)}
                aria-label="Close QR dialog"
                className="w-8 h-8 flex items-center justify-center border-2 border-ink bg-yellow hover:bg-lime transition-colors"
              >
                <X className="w-5 h-5 text-ink" />
              </button>
            </div>

            {/* QR Code Graphic Frame */}
            <div className="bg-cream border-brut-2 border-ink p-3 flex flex-col items-center justify-center shadow-brut-xs">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/qr-wechat.jpg"
                alt="Rajhi Ismail WeChat QR Code"
                className="w-full max-w-[280px] h-auto border-2 border-ink object-contain bg-white"
              />
              <p className="font-mono text-xs font-bold text-ink mt-3 text-center">
                Scan with WeChat (微信扫一扫)
              </p>
              <p className="font-mono text-[11px] text-ink/70 text-center mt-0.5">
                Add Ismail directly on WeChat
              </p>
            </div>

            {/* WeChat ID and Copy Action */}
            <div className="mt-4 pt-3 border-t-2 border-ink/20 flex items-center justify-between gap-2">
              <div className="truncate">
                <div className="font-mono text-[10px] text-ink/60 font-bold uppercase">
                  WECHAT ID
                </div>
                <span className="font-mono text-xs font-bold text-ink truncate block">
                  {personal.wechat}
                </span>
              </div>
              <Button
                variant="primary"
                size="sm"
                onClick={() => handleCopy(personal.wechat, "wechat-modal")}
              >
                {copiedField === "wechat-modal" ? "COPIED ✓" : "COPY ID"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
