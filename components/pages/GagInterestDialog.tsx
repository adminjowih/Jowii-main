'use client';

import { useRef } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { siteData } from '@/lib/site-data';

const contactEmail = siteData.config.fallbackEmail;
const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactEmail)}&su=${encodeURIComponent('GAG enquiry or expression of interest')}&body=${encodeURIComponent('Hello Jowih Foundation,\n\nI am contacting you regarding the Great African Grid (GAG).\n\nName / organisation:\nArea of interest:\nMessage:\n')}`;

export function GagInterestDialog({ triggerLabel = 'Read more' }: { triggerLabel?: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        className="gag-interest-trigger"
        onClick={() => dialogRef.current?.showModal()}
        aria-haspopup="dialog"
      >
        {triggerLabel} <ArrowUpRight aria-hidden="true" size={15} />
      </button>

      <dialog
        ref={dialogRef}
        className="gag-interest-dialog"
        aria-labelledby="gag-interest-title"
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
          <p className="institutional-eyebrow">GREAT AFRICAN GRID · ENQUIRIES</p>
          <h2 id="gag-interest-title">Start a conversation about GAG.</h2>
          <p>
            Interested in a corridor, a potential partnership, or learning more about the framework? Contact the Jowih
            Foundation with your enquiry or expression of interest. We’ll respond with the appropriate next steps.
          </p>
          <div className="gag-interest-dialog__note">
            Gmail will open with a draft addressed to <strong>{contactEmail}</strong>. You can review and edit it before
            sending.
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
