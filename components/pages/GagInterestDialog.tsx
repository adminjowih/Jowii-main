'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { siteData } from '@/lib/site-data';

const contactEmail = siteData.config.fallbackEmail;

export function GagInterestDialog({
  triggerLabel = 'Read more',
  interest = 'the Great African Grid',
  compact = false,
}: {
  triggerLabel?: string;
  interest?: string;
  compact?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactEmail)}&su=${encodeURIComponent(`Request for information: ${interest}`)}&body=${encodeURIComponent(`Hello Jowih Foundation,\n\nI would like to request more information about ${interest}.\n\nName / organisation:\nMessage:\n`)}`;

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (event.key !== 'Tab') return;
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  function closeDialog() {
    setIsOpen(false);
    triggerRef.current?.focus();
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={`gag-interest-trigger${compact ? ' gag-interest-trigger--compact' : ''}`}
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        {triggerLabel} <ArrowUpRight aria-hidden="true" size={15} />
      </button>

      {isOpen && (
        <div
          className="gag-interest-dialog"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeDialog();
          }}
        >
          <section
            ref={dialogRef}
            className="gag-interest-dialog__content"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
          >
            <button
              type="button"
              className="gag-interest-dialog__close"
              aria-label="Close dialog"
              onClick={closeDialog}
            >
              <X aria-hidden="true" size={19} />
            </button>
            <p className="institutional-eyebrow">JOWIH FOUNDATION · ENQUIRIES</p>
            <h2 id={titleId}>Request more information</h2>
            <p>Contact the Jowih Foundation for additional information about {interest}.</p>
            <div className="gag-interest-dialog__note">
              A Gmail draft addressed to <strong>{contactEmail}</strong> will open for completion and submission.
            </div>
            <div className="gag-interest-dialog__actions">
              <a href={gmailComposeUrl} target="_blank" rel="noopener noreferrer">
                Open Contact Us <ArrowUpRight aria-hidden="true" size={16} />
              </a>
              <button type="button" onClick={closeDialog}>Close</button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
