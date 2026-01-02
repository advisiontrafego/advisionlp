"use client";

import React from "react";
import { m } from "motion/react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import LogoMetaAds from "../logos/Logometaads";
import LogoGoogleAds from "../logos/LogoGoogleAds";
import LogoTikTok from "../logos/LogoTikTok";
import { Logo } from "../logos/Logo";

const SparklesIcon = dynamic(() => import('lucide-react').then(mod => ({ default: mod.SparklesIcon })), { ssr: false });
const Globe = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Globe })), { ssr: false });
const Users = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Users })), { ssr: false });
const TrendingUp = dynamic(() => import('lucide-react').then(mod => ({ default: mod.TrendingUp })), { ssr: false });
const BarChart3 = dynamic(() => import('lucide-react').then(mod => ({ default: mod.BarChart3 })), { ssr: false });

interface HowItWorksProps {
  className?: string;
  badgeTexts?: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  buttonTexts?: {
    first: string;
    second: string;
    third: string;
  };
  title?: string;
  lightColor?: string;
}

const HowItWorks = ({
  className,
  badgeTexts,
  buttonTexts,
  title,
  lightColor,
}: HowItWorksProps) => {
  return (
    <div
      className={cn(
        "relative flex h-[350px] w-full max-w-[500px] flex-col items-center",
        className
      )}
    >
      {/* SVG Paths  */}
      <svg
        className="h-full sm:w-full text-muted"
        width="100%"
        height="100%"
        viewBox="0 0 200 100"
      >
        <g
          stroke="currentColor"
          fill="none"
          strokeWidth="0.6"
          strokeDasharray="100 100"
          pathLength="100"
        >
          <path d="M 31 10 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 10" />
          <path d="M 77 10 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 10" />
          <path d="M 124 10 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 10" />
          <path d="M 170 10 v 15 q 0 5 -5 5 h -60 q -5 0 -5 5 v 10" />
          {/* Animation For Path Starting */}
          <animate
            attributeName="stroke-dashoffset"
            from="100"
            to="0"
            dur="1s"
            fill="freeze"
            calcMode="spline"
            keySplines="0.25,0.1,0.5,1"
            keyTimes="0; 1"
          />
        </g>
        {/* Blue Lights */}
        <g mask="url(#db-mask-1)">
          <circle
            className="database db-light-1"
            cx="0"
            cy="0"
            r="12"
            fill="url(#db-blue-grad)"
          />
        </g>
        <g mask="url(#db-mask-2)">
          <circle
            className="database db-light-2"
            cx="0"
            cy="0"
            r="12"
            fill="url(#db-blue-grad)"
          />
        </g>
        <g mask="url(#db-mask-3)">
          <circle
            className="database db-light-3"
            cx="0"
            cy="0"
            r="12"
            fill="url(#db-blue-grad)"
          />
        </g>
        <g mask="url(#db-mask-4)">
          <circle
            className="database db-light-4"
            cx="0"
            cy="0"
            r="12"
            fill="url(#db-blue-grad)"
          />
        </g>
        {/* Platform Logos */}
        <g>
          {/* Meta */}
          <g>
            <circle cx="31" cy="8" r="8" fill="currentColor" className="text-card dark:text-navy-800" />
            <foreignObject x="26" y="3" width="10" height="10">
              <LogoMetaAds className="w-full h-full" />
            </foreignObject>
            <text x="31" y="21" fill="currentColor" className="text-foreground dark:text-white" stroke="none" fontSize="4.5" fontWeight="500" textAnchor="middle">
              Meta Ads
            </text>
          </g>
          {/* Google */}
          <g>
            <circle cx="77" cy="8" r="8" fill="currentColor" className="text-card dark:text-navy-800" />
            <foreignObject x="72" y="3" width="10" height="10">
              <LogoGoogleAds className="w-full h-full" />
            </foreignObject>
            <text x="77" y="21" fill="currentColor" className="text-foreground dark:text-white" stroke="none" fontSize="4.5" fontWeight="500" textAnchor="middle">
              Google Ads
            </text>
          </g>
          {/* TikTok */}
          <g>
            <circle cx="124" cy="8" r="8" fill="currentColor" className="text-card dark:text-navy-800" />
            <foreignObject x="119" y="3" width="10" height="10">
              <LogoTikTok className="w-full h-full" />
            </foreignObject>
            <text x="124" y="21" fill="currentColor" className="text-foreground dark:text-white" stroke="none" fontSize="4.5" fontWeight="500" textAnchor="middle">
              TikTok Ads
            </text>
          </g>
          {/* Site */}
          <g>
            <circle cx="170" cy="8" r="8" fill="currentColor" className="text-card dark:text-navy-800" />
            <foreignObject x="165" y="3" width="10" height="10">
              <Globe className="w-full h-full text-foreground dark:text-white" strokeWidth={2.5} />
            </foreignObject>
            <text x="170" y="21" fill="currentColor" className="text-foreground dark:text-white" stroke="none" fontSize="4.5" fontWeight="500" textAnchor="middle">
              Web
            </text>
          </g>
        </g>
        <defs>
          {/* 1 -  user list */}
          <mask id="db-mask-1">
            <path
              d="M 31 10 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 10"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          {/* 2 - task list */}
          <mask id="db-mask-2">
            <path
              d="M 77 10 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 10"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          {/* 3 - backlogs */}
          <mask id="db-mask-3">
            <path
              d="M 124 10 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 10"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          {/* 4 - misc */}
          <mask id="db-mask-4">
            <path
              d="M 170 10 v 15 q 0 5 -5 5 h -60 q -5 0 -5 5 v 10"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          {/* Blue Grad */}
          <radialGradient id="db-blue-grad" fx="1">
            <stop offset="0%" stopColor={lightColor || "#00A6F5"} />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
      </svg>
      {/* Main Box */}
      <div className="absolute bottom-10 flex w-full flex-col items-center">
        {/* bottom shadow */}
        <div className="absolute -bottom-4 h-[100px] w-[62%] rounded-lg bg-electric-500/10 dark:bg-electric-500/5" />
        {/* box title */}
        <div className="absolute -top-3 z-20 flex items-center justify-center rounded-lg border border-border bg-card dark:bg-navy-800 px-2 py-1 sm:-top-4 sm:py-1.5">
          <SparklesIcon className="size-3 text-electric-500 dark:text-electric-400" />
          <span className="ml-2 text-[10px] text-foreground dark:text-white font-medium">
            {title ? title : "Plataformas → Dados → Crescimento"}
          </span>
        </div>
        {/* box outter circle */}
        <div className="absolute -bottom-8 z-30 grid h-[60px] w-[60px] place-items-center rounded-full border-t bg-card dark:bg-navy-800">
          <Logo className="w-8 h-8" />
        </div>
        {/* box content */}
        <div className="relative z-10 flex h-[150px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background shadow-md">
          {/* Badges */}
          <div className="absolute bottom-10 left-4 z-10 h-8 rounded-full bg-card dark:bg-navy-800 px-3 text-xs border border-border flex items-center gap-2 shadow-md">
            <Users className="w-4 h-4 text-electric-500 dark:text-electric-400" strokeWidth={2.5} />
            <span className="text-foreground dark:text-white font-semibold hidden sm:inline">Público</span>
          </div>
          <div className="absolute top-10 left-1/2 -translate-x-1/2 z-10 h-8 rounded-full bg-card dark:bg-navy-800 px-3 text-xs border border-border flex items-center gap-2 shadow-md">
            <BarChart3 className="w-4 h-4 text-electric-500 dark:text-electric-400" strokeWidth={2.5} />
            <span className="text-foreground dark:text-white font-semibold hidden sm:inline">Dados</span>
          </div>
          <div className="absolute bottom-10 right-4 z-10 h-8 rounded-full bg-card dark:bg-navy-800 px-3 text-xs border border-border flex items-center gap-2 shadow-md">
            <TrendingUp className="w-4 h-4 text-electric-500 dark:text-electric-400" strokeWidth={2.5} />
            <span className="text-foreground dark:text-white font-semibold hidden sm:inline">ROI</span>
          </div>
          {/* Circles */}
          <m.div
            className="absolute -bottom-14 h-[100px] w-[100px] rounded-full border-t border-border bg-electric-500/5 dark:bg-electric-500/10"
            animate={{
              scale: [0.98, 1.02, 0.98, 1, 1, 1, 1, 1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <m.div
            className="absolute -bottom-20 h-[145px] w-[145px] rounded-full border-t border-border bg-electric-500/5 dark:bg-electric-500/10"
            animate={{
              scale: [1, 1, 1, 0.98, 1.02, 0.98, 1, 1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <m.div
            className="absolute -bottom-[100px] h-[190px] w-[190px] rounded-full border-t border-border bg-electric-500/5 dark:bg-electric-500/10"
            animate={{
              scale: [1, 1, 1, 1, 1, 0.98, 1.02, 0.98, 1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <m.div
            className="absolute -bottom-[120px] h-[235px] w-[235px] rounded-full border-t border-border bg-electric-500/5 dark:bg-electric-500/10"
            animate={{
              scale: [1, 1, 1, 1, 1, 1, 0.98, 1.02, 0.98, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
