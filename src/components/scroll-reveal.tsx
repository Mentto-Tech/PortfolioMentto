"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { animate, inView } from "framer-motion";

/**
 * ScrollReveal — ativa animações DOM (Framer Motion) ao entrar na viewport.
 * Usa JavaScript direto para garantir fluidez independente do motor CSS.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const ease = [0.16, 1, 0.3, 1];

    const stopSections = inView(".reveal-section", (element) => {
      animate(element, 
        { opacity: [0, 1] }, 
        { duration: 1.8, ease }
  )}, { margin: "-64px" });

    const stopReveal = inView(".reveal", (element) => {
      let delay = 0;
      if (element.classList.contains("stagger-1")) delay = 0.1;
      if (element.classList.contains("stagger-2")) delay = 0.2;
      if (element.classList.contains("stagger-3")) delay = 0.3;
      if (element.classList.contains("stagger-4")) delay = 0.4;
      if (element.classList.contains("stagger-5")) delay = 0.5;

      animate(element, 
        { opacity: [0, 1], y: [28, 0] }, 
        { duration: 1.2, delay, ease }
      );
    }, { margin: "-48px" });

    const stopLeft = inView(".reveal-left", (element) => {
      animate(element, 
        { opacity: [0, 1], x: [-28, 0] }, 
        { duration: 1.2, ease }
      );
    }, { margin: "-48px" });

    const stopScale = inView(".reveal-scale", (element) => {
      animate(element, 
        { opacity: [0, 1], scale: [0.94, 1] }, 
        { duration: 1.2, ease }
      );
    }, { margin: "-48px" });
    
    const stopBlur = inView(".reveal-blur", (element) => {
      animate(element, 
        { opacity: [0, 1], filter: ["blur(12px)", "blur(0px)"], y: [20, 0] }, 
        { duration: 1.5, ease }
      );
    }, { margin: "-48px" });

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
