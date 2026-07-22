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
    const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
    // Helper to force TypeScript into the DOM overload of animate()
    const animateEl = (el: Element, kf: DOMKeyframesDefinition, opts: AnimationOptions) =>
      animate(el as never, kf as never, opts as never);

    const stopSections = inView(".reveal-section", (element) => {
      animateEl(element, { opacity: [0, 1] }, { duration: 0.9, ease });
    }, { margin: "-40px" });

    const stopReveal = inView(".reveal", (element) => {
      let delay = 0;
      if (element.classList.contains("stagger-1")) delay = 0.08;
      if (element.classList.contains("stagger-2")) delay = 0.16;
      if (element.classList.contains("stagger-3")) delay = 0.24;
      if (element.classList.contains("stagger-4")) delay = 0.32;
      if (element.classList.contains("stagger-5")) delay = 0.40;
      animateEl(element, { opacity: [0, 1], y: [16, 0] }, { duration: 0.8, delay, ease });
    }, { margin: "-40px" });

    const stopLeft = inView(".reveal-left", (element) => {
      animateEl(element, { opacity: [0, 1], x: [-16, 0] }, { duration: 0.8, ease });
    }, { margin: "-40px" });

    const stopScale = inView(".reveal-scale", (element) => {
      animateEl(element, { opacity: [0, 1], scale: [0.97, 1] }, { duration: 0.8, ease });
    }, { margin: "-40px" });

    const stopBlur = inView(".reveal-blur", (element) => {
      animateEl(element, { opacity: [0, 1], filter: ["blur(6px)", "blur(0px)"], y: [12, 0] }, { duration: 0.9, ease });
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
