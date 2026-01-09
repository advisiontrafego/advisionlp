"use client";
import React, { useEffect, useState, memo, useMemo } from "react";
import { Logo } from "@/components/logos/Logo";
import { useTheme } from "next-themes";
import { TrendingUp, Globe } from "lucide-react";
import LogoGoogleAds from "@/components/logos/LogoGoogleAds";
import LogoMetaAds from "@/components/logos/Logometaads";
import LogoTikTok from "@/components/logos/LogoTikTok";


type IconType = "metaads" | "googleads" | "tiktok" | "escalabilidade" | "organico";

type GlowColor = "cyan" | "purple";

interface SkillIconProps {
  type: IconType;
}

interface SkillConfig {
  id: string;
  orbitRadius: number;
  size: number;
  speed: number;
  iconType: IconType;
  phaseShift: number;
  glowColor: GlowColor;
  label: string;
}

interface OrbitingSkillProps {
  config: SkillConfig;
  angle: number;
}

interface GlowingOrbitPathProps {
  radius: number;
  glowColor?: GlowColor;
  animationDelay?: number;
}


const iconComponents: Record<
  IconType,
  { component: () => React.JSX.Element; color: string }
> = {
  metaads: {
    component: () => <LogoMetaAds />,
    color: "#0081fb",
  },
  googleads: {
    component: () => <LogoGoogleAds />,
    color: "#4285F4",
  },
  tiktok: {
    component: () => <LogoTikTok />,
    color: "#F1204A",
  },
  escalabilidade: {
    component: () => (
      <div className="w-full h-full bg-linear-to-br from-electric-500 to-electric-600 rounded-full flex items-center justify-center">
        <TrendingUp className="w-6 h-6 text-white" strokeWidth={2.5} />
      </div>
    ),
    color: "#3449EA",
  },
  organico: {
    component: () => (
      <div className="w-full h-full bg-linear-to-br from-electric-600 to-electric-700 rounded-full flex items-center justify-center">
        <Globe className="w-6 h-6 text-white" strokeWidth={2.5} />
      </div>
    ),
    color: "#1830E7",
  },
};


const SkillIcon = memo(({ type }: SkillIconProps) => {
  const IconComponent = iconComponents[type]?.component;
  return IconComponent ? <IconComponent /> : null;
});
SkillIcon.displayName = "SkillIcon";

const getSkillsConfig = (scale: number): SkillConfig[] => [
  {
    id: "metaads",
    orbitRadius: 120 * scale,
    size: 52 * scale,
    speed: 1,
    iconType: "metaads",
    phaseShift: 0,
    glowColor: "cyan",
    label: "Meta Ads",
  },
  {
    id: "googleads",
    orbitRadius: 120 * scale,
    size: 52 * scale,
    speed: 1,
    iconType: "googleads",
    phaseShift: (2 * Math.PI) / 2.5,
    glowColor: "cyan",
    label: "Google Ads",
  },
  {
    id: "tiktok",
    orbitRadius: 120 * scale,
    size: 52 * scale,
    speed: 1,
    iconType: "tiktok",
    phaseShift: (4 * Math.PI) / 2.5,
    glowColor: "cyan",
    label: "TikTok Ads",
  },
  {
    id: "escalabilidade",
    orbitRadius: 210 * scale,
    size: 56 * scale,
    speed: -0.6,
    iconType: "escalabilidade",
    phaseShift: 0,
    glowColor: "purple",
    label: "Growth Marketing",
  },
  {
    id: "organico",
    orbitRadius: 210 * scale,
    size: 56 * scale,
    speed: -0.6,
    iconType: "organico",
    phaseShift: Math.PI,
    glowColor: "purple",
    label: "Tráfego Pago",
  },
];


const OrbitingSkill = memo(({ config, angle }: OrbitingSkillProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { orbitRadius, size, iconType, label } = config;

  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;

  return (
    <div
      className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: isHovered ? 20 : 10,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative w-full h-full p-2 backdrop-blur-sm
          rounded-full flex items-center justify-center
          transition-all duration-300 cursor-pointer
          ${isHovered ? "scale-125 shadow-2xl" : "shadow-lg hover:shadow-xl"}
        `}
        style={{
          boxShadow: isHovered
            ? `0 0 30px ${iconComponents[iconType]?.color}40, 0 0 60px ${iconComponents[iconType]?.color}20`
            : undefined,
        }}
      >
        <SkillIcon type={iconType} />
        {isHovered && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900/95 backdrop-blur-sm rounded text-xs text-white whitespace-nowrap pointer-events-none">
            {label}
          </div>
        )}
      </div>
    </div>
  );
});
OrbitingSkill.displayName = "OrbitingSkill";

const GlowingOrbitPath = memo(
  ({
    radius,
    glowColor = "cyan",
    animationDelay = 0,
  }: GlowingOrbitPathProps) => {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    const isDark = mounted ? resolvedTheme === "dark" : false;

    const glowColors = {
      cyan: {
        primary: isDark ? "rgba(52, 73, 234, 0.4)" : "rgba(24, 48, 231, 0.4)",
        secondary: isDark ? "rgba(52, 73, 234, 0.2)" : "rgba(24, 48, 231, 0.2)",
        border: isDark ? "rgba(52, 73, 234, 0.3)" : "rgba(24, 48, 231, 0.3)",
      },
      purple: {
        primary: isDark ? "rgba(196, 122, 44, 0.4)" : "rgba(52, 73, 234, 0.4)",
        secondary: isDark
          ? "rgba(196, 122, 44, 0.2)"
          : "rgba(52, 73, 234, 0.2)",
        border: isDark ? "rgba(196, 122, 44, 0.3)" : "rgba(52, 73, 234, 0.3)",
      },
    };

    const colors = glowColors[glowColor] || glowColors.cyan;

    if (!mounted) {
      return (
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            width: `${radius * 2}px`,
            height: `${radius * 2}px`,
          }}
        />
      );
    }

    return (
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
          animationDelay: `${animationDelay}s`,
        }}
      >
        <div
          className="absolute inset-0 rounded-full animate-pulse"
          style={{
            background: `radial-linear(circle, transparent 30%, ${colors.secondary} 70%, ${colors.primary} 100%)`,
            boxShadow: `0 0 60px ${colors.primary}, inset 0 0 60px ${colors.secondary}`,
            animation: "pulse 4s ease-in-out infinite",
            animationDelay: `${animationDelay}s`,
          }}
        />
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: `1px solid ${colors.border}`,
            boxShadow: `inset 0 0 20px ${colors.secondary}`,
          }}
        />
      </div>
    );
  }
);
GlowingOrbitPath.displayName = "GlowingOrbitPath";


export default function OrtbitLogos() {
  const [time, setTime] = useState(0);
  const [scale, setScale] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;
      if (width < 480) setScale(0.75);
      else if (width < 640) setScale(0.9);
      else if (width < 768) setScale(1.05);
      else if (width < 1024) setScale(0.85);
      else setScale(1);
    };
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('orbit-logos-container');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      setTime((prevTime) => prevTime + deltaTime);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible]);

  const orbitConfigs = useMemo(() => [
    { radius: 120 * scale, glowColor: "cyan" as GlowColor, delay: 0 },
    { radius: 210 * scale, glowColor: "purple" as GlowColor, delay: 1.5 },
  ], [scale]);

  const skillsConfig = useMemo(() => getSkillsConfig(scale), [scale]);

  return (
    <main id="orbit-logos-container" className="w-full flex items-center justify-center">
      <div className="relative w-full max-w-[90vw] sm:max-w-[500px] md:max-w-[550px] lg:max-w-[600px] aspect-square flex items-center justify-center">

        <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-card border border-electric-100 dark:border-electric-500/50 rounded-full flex items-center justify-center z-10 relative shadow-2xl">
          
          <div className="relative z-10">
            <Logo className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" />
          </div>
        </div>

        {orbitConfigs.map((config) => (
          <GlowingOrbitPath
            key={`path-${config.radius}`}
            radius={config.radius}
            glowColor={config.glowColor}
            animationDelay={config.delay}
          />
        ))}


        {skillsConfig.map((config) => {
          const angle = time * config.speed + (config.phaseShift || 0);
          return (
            <OrbitingSkill key={config.id} config={config} angle={angle} />
          );
        })}
      </div>
    </main>
  );
}
