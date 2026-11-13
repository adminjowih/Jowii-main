import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, FileText, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mission Fund | Jowih Foundation',
  description:
    'A public overview of the Jowih Foundation Mission Fund, its constitutional funding allocation, mission priorities, and financial safeguards.',
};

const pillars = [
  ['01', 'Empower Communities & Basic Needs', 'Community services and essential development priorities.'],
  ['02', 'Digital Opportunity & Youth Advancement', 'Digital access, skills, education, and pathways for young people.'],
  ['03', 'African Research & Innovation Leadership', 'Research, local innovation capacity, and technology development.'],
  ['04', 'The Future Civilization Agenda', 'Long-horizon African capabilities across infrastructure, science, and technology.'],
];

const sourceDocuments = [
  {
    title: 'Jowih Foundation Constitution',
    href: '/documents/JOWIH%20FOUNDATION.pdf',
    detail: 'Article V: primary funding source, Mission Fund purpose, budget process, and financial controls.',
  },
  {
    title: 'Ecosystem Investment Architecture',
    href: '/documents/JOWIH%20ECOSYSTEM%20INVESTMENT%20ARCHITECTURE.pdf',
    detail: 'The broader proposed ownership and economic allocation model, distinct from the Mission Fund itself.',
  },
  {
    title: 'The GAG Initiative',
    href: '/documents/The%20GAG%20initiative%20.pdf',
    detail: 'The development framework and its seven infrastructure corridors.',
  },
];

export default function MissionFundPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
      <header
        className="border-b pt-28 pb-16 sm:pt-32 sm:pb-20"
        style={{ background: 'var(--ink)', color: 'var(--white)', borderColor: 'var(--line-light)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em]" style={{ color: 'var(--brass)' }}>
            JOWIH FOUNDATION · PUBLIC OVERVIEW
          </p>
          <h1 className="max-w-4xl text-4xl leading-[1.04] sm:text-6xl" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
            The Mission Fund
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed sm:text-xl" style={{ color: 'rgba(255,254,250,.78)' }}>
            The Foundation’s ring-fenced fund for mission activities under the Great African Grid. Article V of the
            Foundation Constitution sets out its funding allocation, intended uses, and financial controls.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#allocation" className="inline-flex min-h-11 items-center gap-2 bg-white px-5 text-xs font-bold uppercase tracking-wide text-[var(--ink)] hover:bg-[var(--sage)]">
              The constitutional allocation <ArrowRight aria-hidden="true" size={15} />
            </a>
            <Link href="/funding" className="inline-flex min-h-11 items-center gap-2 border border-white/60 px-5 text-xs font-bold uppercase tracking-wide text-white hover:bg-white/10">
              Funding architecture <ArrowUpRight aria-hidden="true" size={15} />
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-16 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <section id="allocation" className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: 'var(--green)' }}>
              ARTICLE V · PRIMARY FUNDING SOURCE
            </p>
            <p className="mt-3 font-serif text-7xl leading-none sm:text-8xl" style={{ color: 'var(--green)' }}>90%</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
              Not less than 90% of Jowih Holding Company profits are allocated to the Foundation under Article V.1.
            </p>
          </div>
          <div className="space-y-4 lg:col-span-8">
            <h2 className="text-2xl sm:text-3xl" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
              How the allocation is stated
            </h2>
            <p className="leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
              Article V.1 identifies the initial received Bond and the designated share of Jowih Holding Company
              dividends as Foundation revenue. It states that not less than 90% of profits is allocated to the
              Foundation, with the allocation set out through a Jowih Company–Foundation Remittance Agreement. The
              remaining 10% of dividends is designated for the Founder Family Trust.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
              In practical terms, the 90% applies to <strong>profits</strong>, not gross revenue. The Foundation’s
              constitutional preamble describes those commercial returns as being devoted to the Mission Fund and
              reinvested in continental development; Article V.3 limits Mission Fund use to GAG mission activities.
            </p>
            <p className="border-l-4 p-5 text-sm leading-relaxed" style={{ background: 'var(--sage)', borderColor: 'var(--brass)', color: 'var(--ink-soft)' }}>
              <strong className="text-[var(--ink)]">Reading the source accurately:</strong> the Constitution’s
              preamble contains the phrase “eighty percent (90%),” while Article V.1 states “not less than 90%.” This
              page follows the specific Article V.1 allocation. The Foundation PDF is marked “Draft Constitution”; the
              text also makes the remittance agreement part of the allocation mechanism. The stated allocation is not
              a claim that transfers or Fund operations are already underway.
            </p>
          </div>
        </section>

        <section className="grid gap-5 border-y py-10 sm:grid-cols-3" style={{ borderColor: 'var(--line)' }} aria-label="Mission Fund summary">
          <article>
            <p className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--green)' }}>Purpose</p>
            <p className="mt-2 text-sm leading-relaxed">Article V.3 defines the Mission Fund as ring-fenced and used only for mission activities under the GAG.</p>
          </article>
          <article>
            <p className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--green)' }}>Allocation</p>
            <p className="mt-2 text-sm leading-relaxed">The Foundation Constitution states a minimum 90% allocation of Jowih Holding Company profits to the Foundation.</p>
          </article>
          <article>
            <p className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--green)' }}>Status</p>
            <p className="mt-2 text-sm leading-relaxed">The linked Constitution is marked draft. This page does not represent that the fund is capitalized or disbursing.</p>
          </article>
        </section>

        <section id="pillars" className="space-y-7">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: 'var(--green)' }}>INTENDED MISSION AREAS</p>
            <h2 className="mt-2 text-3xl sm:text-4xl" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>Four strategic pillars</h2>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
              The Foundation Constitution names these priorities. They describe the mission framework, not a claim that
              specific programs have already been funded or delivered.
            </p>
          </div>
          <div className="grid gap-px border sm:grid-cols-2 lg:grid-cols-4" style={{ background: 'var(--line)', borderColor: 'var(--line)' }}>
            {pillars.map(([number, title, description]) => (
              <article key={number} className="min-h-52 p-6" style={{ background: 'var(--white)' }}>
                <span className="text-xs font-bold" style={{ color: 'var(--green)' }}>{number}</span>
                <h3 className="mt-5 text-lg font-semibold leading-snug">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="governance" className="grid gap-8 border-t pt-12 md:grid-cols-12" style={{ borderColor: 'var(--line)' }}>
          <div className="md:col-span-4">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center" style={{ background: 'var(--sage)', color: 'var(--green)' }}>
              <ShieldCheck aria-hidden="true" size={22} />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: 'var(--green)' }}>ARTICLE V · SAFEGUARDS</p>
            <h2 className="mt-2 text-3xl" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>Budgeted and accountable use</h2>
          </div>
          <div className="space-y-5 md:col-span-8">
            <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
              Article V.3 provides for an annual budget with allocations to core areas such as operations, pilot projects,
              and reserves, while prioritizing seed and capital expenditure to scale social programs. Article V.4
              describes approval, procurement, and audit controls. These are provisions in the linked Constitution;
              their implementation depends on the Foundation’s legal and operational arrangements.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ['Ring-fenced purpose', 'Fund use is limited to mission activities under the GAG.'],
                ['Annual budget', 'The Foundation adopts a budget and sets allocations across core areas.'],
                ['Spending controls', 'Expenditures above a defined threshold require two signatories.'],
                ['Procurement and audit', 'The text provides for competitive procurement above thresholds and quarterly and annual audited statements.'],
              ].map(([title, detail]) => (
                <article key={title} className="border p-4" style={{ background: 'var(--white)', borderColor: 'var(--line)' }}>
                  <h3 className="text-sm font-bold">{title}</h3>
                  <p className="mt-2 text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>{detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border p-6 sm:p-9" style={{ background: 'var(--sage)', borderColor: 'var(--line)' }}>
          <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: 'var(--green)' }}>KEEP THE FUNDING PATHS DISTINCT</p>
          <h2 className="mt-2 text-2xl sm:text-3xl" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
            Mission Fund, pre-launch support, and investment are separate.
          </h2>
          <div className="mt-5 grid gap-5 text-sm leading-relaxed md:grid-cols-3" style={{ color: 'var(--ink-soft)' }}>
            <p><strong className="text-[var(--ink)]">Mission Fund:</strong> the ring-fenced Foundation mechanism described in Article V.3 for mission spending.</p>
            <p><strong className="text-[var(--ink)]">Pre-launch support:</strong> the site’s current support path is donation-only and does not offer ownership or financial returns.</p>
            <p><strong className="text-[var(--ink)]">Investment:</strong> bonds and regulated fund structures are not currently available as offers on this site.</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="inline-flex min-h-11 items-center gap-2 bg-[var(--green)] px-5 text-xs font-bold uppercase tracking-wide text-white hover:bg-[var(--green-deep)]" href="/funding">
              Funding overview <ArrowRight aria-hidden="true" size={15} />
            </Link>
            <Link className="inline-flex min-h-11 items-center gap-2 border border-[var(--green)] px-5 text-xs font-bold uppercase tracking-wide text-[var(--green)] hover:bg-white" href="/donate">
              Pre-launch support information <ArrowUpRight aria-hidden="true" size={15} />
            </Link>
          </div>
        </section>

        <section className="space-y-5 border-t pt-10" style={{ borderColor: 'var(--line)' }}>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: 'var(--green)' }}>SOURCE DOCUMENTS</p>
            <h2 className="mt-2 text-2xl sm:text-3xl" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>Read the source papers</h2>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {sourceDocuments.map((source) => (
              <a key={source.title} href={source.href} target="_blank" rel="noreferrer" className="group border p-5 transition-colors hover:border-[var(--green)]" style={{ background: 'var(--white)', borderColor: 'var(--line)' }}>
                <FileText aria-hidden="true" size={18} style={{ color: 'var(--green)' }} />
                <h3 className="mt-4 flex items-center justify-between gap-2 text-sm font-bold">
                  {source.title}<ArrowUpRight aria-hidden="true" size={14} className="shrink-0" />
                </h3>
                <p className="mt-2 text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>{source.detail}</p>
              </a>
            ))}
          </div>
          <p className="max-w-4xl text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
            This page summarizes the linked source documents for general information. The Foundation PDF is marked
            “Draft Constitution”; formal registration, remittance agreements, budgets, and operating arrangements are
            distinct from the figures and controls described in the text. No investment, return, current balance, or
            disbursement is represented here.
          </p>
        </section>
      </div>
    </div>
  );
}
