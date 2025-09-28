"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import { Megaphone, Phone, X } from "lucide-react";

interface Props {
  dismissed: boolean;
  setDismissed: Dispatch<SetStateAction<boolean>>;
}

export default function AnnouncementBar(props: Props) {
  const { dismissed, setDismissed } = props;

  //   useEffect(() => {
  //     try {
  //       const v = localStorage.getItem("announcement-dismissed");
  //       if (v === "1") setDismissed(true);
  //     } catch {}
  //   }, []);

  if (dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
    // try {
    //   localStorage.setItem("announcement-dismissed", "1");
    // } catch {}
  };

  return (
    <div
      role="region"
      aria-label="Site announcement"
      className="fixed top-0 z-50 w-full border-b border-destructive/20 bg-red-500 text-destructive-foreground hidden md:block"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-3 py-2 text-sm md:px-4">
        {/* Left group: icon + message */}
        <div className="flex flex-1 items-center gap-3 min-w-0">
          <Megaphone
            className="h-4 w-4 shrink-0 opacity-90 text-white"
            aria-hidden="true"
          />
          <span className="inline-flex items-center gap-2">
            <span className="rounded-full bg-destructive-foreground px-2 py-0.5 text-xs font-semibold text-destructive">
              NEW
              <span className="sr-only"> announcement</span>
            </span>
          </span>
          <p className="text-pretty truncate text-white">
            Free eligibility check is open this week — get expert guidance in
            minutes.
          </p>
        </div>

        {/* Right actions */}
        <div className="flex shrink-0 items-center gap-3">
          <a
            href="tel:+917818000777"
            className="hidden items-center gap-1 rounded-full bg-destructive/80 px-2 py-1 text-xs font-medium ring-inset ring-white/10 hover:bg-destructive/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 md:inline-flex text-white"
            aria-label="Call us at +91 78-18-000-777"
          >
            <Phone className="h-3.5 w-3.5 text-white" aria-hidden="true" />
            +91 78-18-000-777
          </a>

          <Link
            href="#book-slot"
            className="rounded-full bg-destructive-foreground px-3 py-1.5 text-xs font-semibold transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-destructive-foreground/40 text-white"
            aria-label="Book your free slot"
          >
            Book Your Free Slot
          </Link>

          <button
            type="button"
            onClick={handleDismiss}
            aria-label="Dismiss announcement"
            className="inline-flex h-7 w-7 items-center justify-center rounded-full/none hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-destructive-foreground/40 text-white cursor-pointer"
            title="Dismiss"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
