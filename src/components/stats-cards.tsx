"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { Calendar, FlaskConical, Target, Building2, LucideIcon } from "lucide-react";

function AnimatedNumberCard({
  value,
  label,
  subtitle,
  prefix = "",
  suffix = "",
  icon: Icon,
  gradient,
  shadowColor,
  textColor = "text-white",
  iconColor = "text-white/80",
  subtitleColor = "text-white/80",
  delay = 0,
}: {
  value: number;
  label: string;
  subtitle: string;
  prefix?: string;
  suffix?: string;
  icon?: LucideIcon;
  gradient: string;
  shadowColor: string;
  textColor?: string;
  iconColor?: string;
  subtitleColor?: string;
  delay?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        // easeOutExpo
        const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setCount(Math.floor(easeOut * value));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      const timeout = setTimeout(() => {
        requestAnimationFrame(animate);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [isInView, value, delay]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-[20px] p-6 ${gradient} shadow-2xl ${textColor} transform transition-transform hover:-translate-y-1`}
      style={{
        boxShadow: `0 20px 40px -15px ${shadowColor}`,
      }}
    >
      {/* Wavy Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-overlay">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="wavy"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 0 20 Q 10 10 20 20 T 40 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M 0 40 Q 10 30 20 40 T 40 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wavy)" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col h-full justify-between gap-8">
        <div className="flex justify-between items-start">
          <span className="font-heading font-medium text-[1.125rem] tracking-wide">
            {label}
          </span>
          {Icon && <Icon className={`w-8 h-8 ${iconColor}`} />}
        </div>

        <div>
          <div className="font-heading font-bold text-[3rem] md:text-[3.5rem] tracking-tight leading-none mb-1">
            {prefix}
            {count}
            {suffix}
          </div>
          <div className={`text-[0.9rem] font-medium ${subtitleColor}`}>
            {subtitle}
          </div>
        </div>
      </div>
    </div>
  );
}

export function StatsCards() {
  const stats = [
    {
      value: 7,
      label: "História",
      subtitle: "Anos de existência",
      icon: Calendar,
      gradient: "bg-gradient-to-br from-[#C25D44] to-[#db6d51]",
      shadowColor: "#C25D44",
      delay: 0,
    },
    {
      value: 6,
      label: "Pesquisa",
      subtitle: "Anos em linha de pesquisa",
      icon: FlaskConical,
      gradient: "bg-gradient-to-br from-[#083D5F] to-[#0c598a]",
      shadowColor: "#083D5F",
      delay: 150,
    },
    {
      value: 80,
      label: "Projetos",
      prefix: "+",
      subtitle: "Projetos acompanhados",
      icon: Target,
      gradient: "bg-gradient-to-br from-[#107F8D] to-[#17a9bc]",
      shadowColor: "#107F8D",
      delay: 150,
    },
    {
      value: 50,
      label: "Empresas",
      prefix: "+",
      subtitle: "Empresas/Instituições atendidas",
      icon: Building2,
      gradient: "bg-gradient-to-br from-[#FFC300] to-[#ffd747]",
      shadowColor: "#D9A600",
      textColor: "text-[#1a1a2e]",
      iconColor: "text-[#1a1a2e]/70",
      subtitleColor: "text-[#1a1a2e]/80",
      delay: 150,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-12">
      {stats.map((stat) => (
        <AnimatedNumberCard key={stat.label} {...stat} />
      ))}
    </div>
  );
}
