"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const KEY = "pfi-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const accept = () => {
    try {
      localStorage.setItem(KEY, "accepted");
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  return (
    <div className="glass-panel fixed inset-x-4 bottom-24 z-40 mx-auto max-w-lg rounded-2xl p-4 md:inset-x-auto md:bottom-8 md:left-8 md:right-auto">
      <p className="text-sm leading-relaxed text-muted">
        Nous utilisons des cookies essentiels et, avec votre accord, des mesures
        d&apos;audience. Voir la{" "}
        <Link href="/confidentialite/" className="text-text underline-offset-2 hover:underline">
          politique de confidentialité
        </Link>
        .
      </p>
      <div className="mt-3 flex gap-2">
        <Button size="sm" variant="primary" onClick={accept}>
          Accepter
        </Button>
        <Button size="sm" variant="outline" onClick={() => setVisible(false)}>
          Continuer
        </Button>
      </div>
    </div>
  );
}
