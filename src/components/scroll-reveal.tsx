"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { animate, inView } from "framer-motion";
import type { DOMKeyframesDefinition, AnimationOptions } from "motion-dom";

/**
 * ScrollReveal — ativa animações DOM (Framer Motion) ao entrar na viewport.
 * Usa JavaScript direto para garantir fluidez independente do motor CSS.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];
    // Helper to force TypeScript into the DOM overload of animate()
    const animateEl = (el: Element, kf: DOMKeyframesDefinition, opts: AnimationOptions) =>
      animate(el as never, kf as never, opts as never);

    const stopSections = inView(".reveal-section", (element) => {
      animateEl(element, { opacity: [0, 1] }, { duration: 1.4, ease });
    }, { margin: "-40px" });

    const stopReveal = inView(".reveal", (element) => {
      let delay = 0;
      if (element.classList.contains("stagger-1")) delay = 0.12;
      if (element.classList.contains("stagger-2")) delay = 0.24;
      if (element.classList.contains("stagger-3")) delay = 0.36;
      if (element.classList.contains("stagger-4")) delay = 0.48;
      if (element.classList.contains("stagger-5")) delay = 0.60;
      animateEl(element, { opacity: [0, 1], y: [20, 0] }, { duration: 1.3, delay, ease });
    }, { margin: "-40px" });

    const stopLeft = inView(".reveal-left", (element) => {
      animateEl(element, { opacity: [0, 1], x: [-20, 0] }, { duration: 1.3, ease });
    }, { margin: "-40px" });

    const stopScale = inView(".reveal-scale", (element) => {
      animateEl(element, { opacity: [0, 1], scale: [0.96, 1] }, { duration: 1.3, ease });
    }, { margin: "-40px" });

    const stopBlur = inView(".reveal-blur", (element) => {
      animateEl(element, { opacity: [0, 1], filter: ["blur(8px)", "blur(0px)"], y: [16, 0] }, { duration: 1.4, ease });
    }, { margin: "-40px" });

    return () => {
      stopSections();
      stopReveal();
      stopLeft();
      stopScale();
      stopBlur();
    };
  }, [pathname]);

  return null;
}
