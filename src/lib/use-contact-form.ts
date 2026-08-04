"use client";

import { useState, useCallback } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function useContactForm(origem?: string) {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setStatus("loading");

      const form = e.currentTarget;
      const data: Record<string, string> = Object.fromEntries(
        new FormData(form)
      ) as Record<string, string>;
      if (origem) data.origem = origem;

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (!res.ok) throw new Error();
        setStatus("success");
        form.reset();
      } catch {
        setStatus("error");
      }
    },
    [origem]
  );

  return { status, handleSubmit };
}
