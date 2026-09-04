'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { FiX, FiExternalLink } from 'react-icons/fi';

export interface Evidence {
  /** Heading shown above the image, e.g. the credential name. */
  title: string;
  /** Short line of context under the heading. */
  caption?: string;
  /** Public path to the certificate / award image. */
  src: string;
  alt: string;
}

interface EvidenceModalProps {
  evidence: Evidence | null;
  onClose: () => void;
}

/**
 * Lightbox for credential evidence — the scan of a certificate or an award
 * graphic — opened from the "Verify" button on a credential card.
 */
const EvidenceModal = ({ evidence, onClose }: EvidenceModalProps) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const [failed, setFailed] = useState(false);

  // Reset the error state whenever a different credential is opened.
  useEffect(() => {
    setFailed(false);
  }, [evidence?.src]);

  useEffect(() => {
    if (!evidence) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);

    // Lock background scroll while the lightbox is open.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    closeRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [evidence, onClose]);

  return (
    <AnimatePresence>
      {evidence && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-navy-950/85 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${evidence.title} — evidence`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 12 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-3xl max-h-[92vh] flex flex-col bg-cream-50 border border-gold-500/40 shadow-2xl"
            /* Clicks inside the panel must not fall through to the backdrop. */
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 p-5 sm:p-6 border-b border-navy-900/10">
              <div className="min-w-0">
                <p className="text-[10px] tracking-editorial uppercase text-gold-600 mb-1.5">Verification</p>
                <h3 className="font-display text-xl sm:text-2xl text-navy-900 leading-tight">
                  {evidence.title}
                </h3>
                {evidence.caption && (
                  <p className="mt-1.5 text-[13px] text-ink-600">{evidence.caption}</p>
                )}
              </div>
              <button
                ref={closeRef}
                onClick={onClose}
                aria-label="Close verification"
                className="flex-shrink-0 w-9 h-9 border border-navy-900/20 text-navy-800 hover:border-gold-500 hover:text-gold-600 hover:bg-white transition-colors flex items-center justify-center"
              >
                <FiX className="text-lg" />
              </button>
            </div>

            <div className="relative flex-1 min-h-0 overflow-auto bg-navy-900/5 p-4 sm:p-6">
              {failed ? (
                <div className="h-full min-h-[220px] flex flex-col items-center justify-center text-center gap-2 px-6">
                  <p className="font-display text-lg text-navy-900">Image not available</p>
                  <p className="text-[13px] text-ink-600 max-w-sm">
                    The file for this credential has not been added to the site yet.
                  </p>
                </div>
              ) : (
                <div className="relative w-full h-[62vh]">
                  <Image
                    src={evidence.src}
                    alt={evidence.alt}
                    fill
                    sizes="(max-width: 768px) 92vw, 720px"
                    className="object-contain"
                    onError={() => setFailed(true)}
                  />
                </div>
              )}
            </div>

            {!failed && (
              <div className="p-4 sm:p-5 border-t border-navy-900/10 flex justify-end">
                <a
                  href={evidence.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-navy-800 hover:text-gold-600 transition-colors"
                >
                  <FiExternalLink className="text-sm" />
                  <span className="text-[11px] tracking-editorial uppercase font-semibold">Open full size</span>
                </a>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EvidenceModal;
