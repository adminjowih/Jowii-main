'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Mail, Menu, Phone, X } from 'lucide-react';
import { siteData } from '@/lib/site-data';

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Framework', href: '/framework' },
];

export function InstitutionalHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3 sm:px-8">
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

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? 'page' : undefined}
              className="text-sm font-medium text-neutral-700 transition-colors hover:text-[#1a4d2e]"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`mailto:${siteData.config.fallbackEmail}`}
            className="inline-flex items-center gap-2 bg-[#1a4d2e] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#143d24]"
          >
            <Mail aria-hidden="true" size={15} />
            Contact
          </a>
          <a
            href={`tel:${siteData.config.phone}`}
            aria-label={`Call ${siteData.config.phone}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 transition-colors hover:text-[#1a4d2e]"
          >
            <Phone aria-hidden="true" size={15} />
            {siteData.config.phone}
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center border border-neutral-300 text-neutral-900 md:hidden"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav
          className="border-t border-neutral-200 bg-white px-6 py-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-6xl flex-col">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-neutral-100 py-3 text-sm font-medium text-neutral-800"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`mailto:${siteData.config.fallbackEmail}`}
              className="inline-flex items-center gap-2 py-4 text-sm font-semibold text-[#1a4d2e]"
            >
              <Mail aria-hidden="true" size={16} />
              Contact us
            </a>
            <a
              href={`tel:${siteData.config.phone}`}
              className="inline-flex items-center gap-2 py-3 text-sm font-semibold text-[#1a4d2e]"
            >
              <Phone aria-hidden="true" size={16} />
              {siteData.config.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
