import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, FileText, ShieldCheck } from 'lucide-react';
import { GagInterestDialog } from '@/components/pages/GagInterestDialog';

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
    detail: 'Holding structure and economic allocation architecture.',
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
            JOWIH FOUNDATION · DEVELOPMENT FINANCE
          </p>
          <h1 className="max-w-4xl text-4xl leading-[1.04] sm:text-6xl" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
            The Mission Fund
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed sm:text-xl" style={{ color: 'rgba(255,254,250,.78)' }}>
            The ring-fenced Jowih Foundation fund for Great African Grid mission activities. Article V establishes its
            funding allocation, mission use, annual budgeting, and financial controls.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <GagInterestDialog triggerLabel="Read detail" interest="Mission Fund allocation" />
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
              A 90% mission reinvestment allocation
            </h2>
            <p className="leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
              Article V.1 allocates not less than 90% of Jowih Holding Company profits to the Foundation. These
              resources are directed to mission activities through the ring-fenced Mission Fund and continental
              development programs. The remaining 10% of Holding Company dividends is designated for the Founder
              Family Trust. The Foundation Remittance Agreement governs the allocation between the Foundation and
              operating companies.
            </p>
          </div>
        </section>

        <section className="grid gap-5 border-y py-10 sm:grid-cols-3" style={{ borderColor: 'var(--line)' }} aria-label="Mission Fund summary">
          <article>
            <p className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--green)' }}>Purpose</p>
            <p className="mt-2 text-sm leading-relaxed">Ring-fenced funding for mission activities under the Great African Grid.</p>
            <div className="mt-4"><GagInterestDialog triggerLabel="Read detail" interest="Mission Fund purpose" compact /></div>
          </article>
          <article>
            <p className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--green)' }}>Funding allocation</p>
            <p className="mt-2 text-sm leading-relaxed">At least 90% of Jowih Holding Company profits is allocated to the Foundation for mission reinvestment.</p>
            <div className="mt-4"><GagInterestDialog triggerLabel="Read detail" interest="the 90% Mission Fund allocation" compact /></div>
          </article>
          <article>
            <p className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--green)' }}>Annual budget</p>
            <p className="mt-2 text-sm leading-relaxed">The Foundation budget allocates resources across operations, pilot projects, and reserves.</p>
            <div className="mt-4"><GagInterestDialog triggerLabel="Read detail" interest="Mission Fund budgeting" compact /></div>
          </article>
        </section>

        <section id="pillars" className="space-y-7">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: 'var(--green)' }}>STRATEGIC PRIORITIES</p>
            <h2 className="mt-2 text-3xl sm:text-4xl" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>Four strategic pillars</h2>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
              Mission Fund allocations support the Foundation’s work across these four priorities.
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
            <h2 className="mt-2 text-3xl" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>Financial controls and reporting</h2>
          </div>
          <div className="space-y-5 md:col-span-8">
            <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
              Article V.3 requires an annual budget covering operations, pilot projects, and reserves, with priority for
              seed and capital expenditure to scale social programs. Article V.4 requires two signatories for
              expenditures above the defined threshold, competitive procurement above defined thresholds, and
              quarterly and annual audited financial statements.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ['Ring-fenced purpose', 'The Fund is used exclusively for mission activities under the GAG.'],
                ['Annual budget', 'Allocations cover operations, pilot projects, and reserves.'],
                ['Spending approvals', 'Expenditures above the defined threshold require two signatories.'],
                ['Procurement and audit', 'Above-threshold procurement uses open tender or competitive bidding; financial statements are audited quarterly and annually.'],
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
          <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: 'var(--green)' }}>FUNDING CHANNELS</p>
          <h2 className="mt-2 text-2xl sm:text-3xl" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
            Mission funding, pre-launch contributions, and investment capital.
          </h2>
          <div className="mt-5 grid gap-5 text-sm leading-relaxed md:grid-cols-3" style={{ color: 'var(--ink-soft)' }}>
            <p><strong className="text-[var(--ink)]">Mission Fund:</strong> Foundation resources ring-fenced for Great African Grid mission activities.</p>
            <p><strong className="text-[var(--ink)]">Pre-launch contributions:</strong> donations support legal registration and structural setup; they confer no ownership, repayment, or governance rights.</p>
            <p><strong className="text-[var(--ink)]">Investment capital:</strong> the Grid Bond and Ecosystem Investment Fund are separate financing structures with distinct purposes.</p>
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
            <h2 className="mt-2 text-2xl sm:text-3xl" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>Source documents</h2>
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
        </section>
      </div>
    </div>
  );
}
