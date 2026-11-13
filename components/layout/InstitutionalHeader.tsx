'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Mail, Menu, MessageCircle, Phone, X } from 'lucide-react';
import { SocialIcon } from '@/components/icons/SocialIcons';
import { gmailComposeUrl, siteData } from '@/lib/site-data';

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Framework', href: '/framework' },
  { label: 'GAG Initiative', href: '/gag' },
  { label: 'Mission Fund', href: '/mission-fund' },
];

export function InstitutionalHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-white">
      <div className="border-b border-neutral-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3 sm:px-8">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="Jowih Foundation home"
          >
            <Image
              src="/assets/foundation%20logo.png"
              alt=""
              width={48}
              height={48}
              priority
              className="h-10 w-10 object-contain"
            />
            <span className="text-lg font-semibold tracking-tight text-neutral-950">
              Jowih Foundation
            </span>
          </Link>
          <a
            href={`tel:${siteData.config.phone}`}
            aria-label={`Call ${siteData.config.phone}`}
            className="hidden items-center gap-2 text-sm font-medium text-neutral-700 hover:text-[#1a4d2e] sm:inline-flex"
          >
            <Phone aria-hidden="true" size={15} />
            {siteData.config.phone}
          </a>
        </div>
      </div>

      <nav className="bg-[#1a4d2e] text-white" aria-label="Main navigation">
        <div className="mx-auto flex min-h-12 max-w-6xl items-center justify-between px-6 sm:px-8">
          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? 'page' : undefined}
                className="py-3 text-xs font-bold uppercase tracking-wider text-white/90 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="inline-flex min-h-12 items-center gap-2 text-xs font-bold uppercase tracking-wider text-white md:hidden"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X aria-hidden="true" size={19} /> : <Menu aria-hidden="true" size={19} />}
            Menu
          </button>
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-3 sm:flex" role="group" aria-label="Social media links">
              {siteData.socialMedia.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="inline-flex h-8 w-5 items-center justify-center text-white/85 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <SocialIcon name={social.icon} size={16} />
                </a>
              ))}
            </div>
            <a
              href={`https://wa.me/${siteData.config.whatsappPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Message us on WhatsApp at ${siteData.config.whatsappDisplay}`}
              className="inline-flex min-h-9 items-center gap-2 border border-white/60 px-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-white hover:text-[#1a4d2e]"
            >
              <MessageCircle aria-hidden="true" size={14} />
              <span>{siteData.config.whatsappDisplay}</span>
            </a>
            <a
              href={gmailComposeUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Jowih Foundation by email"
              className="inline-flex min-h-9 items-center gap-2 border border-white/60 px-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-white hover:text-[#1a4d2e]"
            >
              <Mail aria-hidden="true" size={14} />
              <span className="hidden sm:inline">Contact</span>
            </a>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <nav className="border-b border-neutral-200 bg-white px-6 py-2 md:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-6xl flex-col">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-neutral-200 py-3 text-sm font-semibold uppercase tracking-wide text-neutral-800"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${siteData.config.phone}`}
              className="inline-flex items-center gap-2 py-3 text-sm font-semibold text-[#1a4d2e]"
            >
              <Phone aria-hidden="true" size={16} />
              {siteData.config.phone}
            </a>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-neutral-200 py-4">
              {siteData.socialMedia.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-[#1a4d2e]"
                >
                  <SocialIcon name={social.icon} size={16} />
                  <span>{social.platform}</span>
                </a>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
