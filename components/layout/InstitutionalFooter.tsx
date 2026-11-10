import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import { gmailComposeUrl, siteData } from '@/lib/site-data';

export function InstitutionalFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <Link href="/" className="font-semibold tracking-tight text-neutral-950">
            Jowih Foundation
          </Link>
          <p className="mt-1 text-sm text-neutral-500">
            African-led ideas for a more connected future.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm sm:items-end">
          <a
            href={gmailComposeUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium text-[#1a4d2e] hover:underline"
          >
            <Mail aria-hidden="true" size={15} />
            {siteData.config.fallbackEmail}
          </a>
          <a
            href={`tel:${siteData.config.phone}`}
            className="inline-flex items-center gap-2 font-medium text-[#1a4d2e] hover:underline"
          >
            <Phone aria-hidden="true" size={15} />
            {siteData.config.phone}
          </a>
          <a
            href={`https://wa.me/${siteData.config.phone.replace(/^\+/, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-neutral-950"
          >
            Message us on WhatsApp
          </a>
          <Link href="/framework" className="text-neutral-600 hover:text-neutral-950">
            Explore the framework
          </Link>
        </div>
      </div>
      <div className="border-t border-neutral-100 px-6 py-4 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Jowih Foundation
      </div>
    </footer>
  );
}
