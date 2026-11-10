import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import { siteData } from '@/lib/site-data';
import { corridorRanges } from '@/lib/gag-sections';

export function generateStaticParams() {
  return Object.keys(corridorRanges).map((corridor) => ({ corridor }));
}

export default async function CorridorPage({ params }: { params: Promise<{ corridor: string }> }) {
  const { corridor: corridorSlug } = await params;
  const corridor = corridorRanges[corridorSlug];
  const overview = siteData.gag.corridors.find((item) => item.slug === corridorSlug);
  if (!corridor || !overview) notFound();

  return (
    <main className="document-page corridor-page min-h-screen">
      <header className="document-page__hero">
        <div className="document-page__inner">
          <Link href="/gag" className="document-page__back"><ArrowLeft size={16} /> Back to GAG overview</Link>
          <p className="document-page__eyebrow">Great African Grid · Corridor overview</p>
          <h1>{corridor.title}</h1>
        </div>
      </header>
      <section className="document-page__body">
        <div className="document-page__inner corridor-page__summary">
          <p className="corridor-page__summary-copy">{overview.body}</p>
          <Link href="/gag" className="corridor-page__return">View all seven corridors <ArrowUpRight size={15} /></Link>
        </div>
      </section>
    </main>
  );
}
