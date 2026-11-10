import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { siteData } from '@/lib/site-data';

const focusAreas = [
  {
    title: 'Great African Grid',
    description: 'A proposed framework for connecting infrastructure and essential services.',
  },
  {
    title: 'ASTA OS',
    description: 'A proposed digital platform for coordination and partner integration.',
  },
  {
    title: 'Community development',
    description: 'An effort centered on practical, locally led priorities and opportunity.',
  },
];

export function InstitutionalHome() {
  return (
    <div className="bg-white text-neutral-950">
      <section className="border-b border-neutral-200 bg-[#f7f7f4]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-32">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#1a4d2e]">
              Jowih Foundation
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Ideas for a more connected Africa.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
              Jowih is developing a framework for African-led infrastructure,
              digital systems, and community opportunity.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={`mailto:${siteData.config.fallbackEmail}`}
                className="inline-flex items-center gap-2 bg-[#1a4d2e] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#143d24]"
              >
                <Mail aria-hidden="true" size={16} />
                Contact us
              </a>
              <a
                href={`tel:${siteData.config.phone}`}
                className="inline-flex items-center gap-2 border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-900 transition-colors hover:border-neutral-500"
              >
                <Phone aria-hidden="true" size={16} />
                Call us
              </a>
              <Link
                href="/framework"
                className="inline-flex items-center gap-2 border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-900 transition-colors hover:border-neutral-500"
              >
                Explore the framework
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/assets/foundation%20logo.png"
              alt="Jowih Foundation"
              width={280}
              height={280}
              priority
              className="h-48 w-48 object-contain sm:h-64 sm:w-64"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1a4d2e]">
            Areas of focus
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            A clear starting point.
          </h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {focusAreas.map((area) => (
            <article
              key={area.title}
              className="border border-neutral-200 bg-white p-6"
            >
              <h3 className="text-lg font-semibold">{area.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="bg-[#1a4d2e] px-6 py-14 text-white sm:px-8 sm:py-16"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
              Get in touch
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              Let&apos;s start a conversation.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:items-end">
            <a
              href={`mailto:${siteData.config.fallbackEmail}`}
              className="inline-flex w-fit items-center gap-2 border border-white/50 px-5 py-3 text-sm font-semibold transition-colors hover:bg-white hover:text-[#1a4d2e]"
            >
              <Mail aria-hidden="true" size={16} />
              {siteData.config.fallbackEmail}
            </a>
            <a
              href={`tel:${siteData.config.phone}`}
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-white/90 hover:text-white hover:underline"
            >
              <Phone aria-hidden="true" size={16} />
              {siteData.config.phone}
            </a>
            <a
              href={`https://wa.me/${siteData.config.phone.replace(/^\+/, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-white/90 hover:text-white hover:underline"
            >
              Message us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
