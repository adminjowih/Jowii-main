'use client';

import { useId, useRef } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { siteData } from '@/lib/site-data';

const contactEmail = siteData.config.fallbackEmail;
export function GagInterestDialog({ triggerLabel = 'Read more', interest = 'the Great African Grid', compact = false }: { triggerLabel?: string; interest?: string; compact?: boolean }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactEmail)}&su=${encodeURIComponent(`Request for information: ${interest}`)}&body=${encodeURIComponent(`Hello Jowih Foundation,\n\nI would like to request more information about ${interest}.\n\nName / organisation:\nMessage:\n`)}`;

  return (
    <>
      <button
        type="button"
        className={`gag-interest-trigger${compact ? ' gag-interest-trigger--compact' : ''}`}
        onClick={() => dialogRef.current?.showModal()}
        aria-haspopup="dialog"
      >
        {triggerLabel} <ArrowUpRight aria-hidden="true" size={15} />
      </button>

      <dialog
        ref={dialogRef}
        className="gag-interest-dialog"
        aria-labelledby={titleId}
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current?.close();
        }}
      >
        <div className="gag-interest-dialog__content">
          <button
            type="button"
            className="gag-interest-dialog__close"
            aria-label="Close dialog"
            onClick={() => dialogRef.current?.close()}
          >
            <X aria-hidden="true" size={19} />
          </button>
          <p className="institutional-eyebrow">JOWIH FOUNDATION · ENQUIRIES</p>
          <h2 id={titleId}>Request more information</h2>
          <p>
            Contact the Jowih Foundation for additional information about {interest}.
          </p>
          <div className="gag-interest-dialog__note">
            A Gmail draft addressed to <strong>{contactEmail}</strong> will open for completion and submission.
          </div>
          <div className="gag-interest-dialog__actions">
            <a href={gmailComposeUrl} target="_blank" rel="noopener noreferrer">
              Open Contact Us <ArrowUpRight aria-hidden="true" size={16} />
            </a>
            <button type="button" onClick={() => dialogRef.current?.close()}>
              Close
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
