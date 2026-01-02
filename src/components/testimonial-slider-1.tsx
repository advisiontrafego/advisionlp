"use client";

import * as React from "react";
import { useState } from "react";
import { m, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";


type Review = {
  id: string | number;
  name: string;
  affiliation: string;
  quote: string;
  LogoComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

interface TestimonialSliderProps {
  reviews: Review[];
  className?: string;
}

export const TestimonialSlider = ({
  reviews,
  className,
}: TestimonialSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [expandedQuotes, setExpandedQuotes] = useState<Record<number, boolean>>({});
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);

  const activeReview = reviews[currentIndex];


  React.useEffect(() => {
    if (isAutoplayPaused) return;
    
    const interval = setInterval(() => {
      setDirection("right");
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoplayPaused, reviews.length]);

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    setIsAutoplayPaused(true);
    setTimeout(() => setIsAutoplayPaused(false), 8000);
  };

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setIsAutoplayPaused(true);
    setTimeout(() => setIsAutoplayPaused(false), 8000);
  };

  const handleThumbnailClick = (index: number) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
    setIsAutoplayPaused(true);
    setTimeout(() => setIsAutoplayPaused(false), 8000);
  };

  const toggleExpanded = () => {
    setExpandedQuotes(prev => ({
      ...prev,
      [currentIndex]: !prev[currentIndex]
    }));
  };

  const isExpanded = expandedQuotes[currentIndex] || false;


  const thumbnailReviews = [
    reviews[(currentIndex + 1) % reviews.length],
    reviews[(currentIndex + 2) % reviews.length],
    reviews[(currentIndex + 3) % reviews.length],
  ];


  const imageVariants = {
    enter: (direction: "left" | "right") => ({
      y: direction === "right" ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { y: 0, opacity: 1 },
    exit: (direction: "left" | "right") => ({
      y: direction === "right" ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  const textVariants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? 50 : -50,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? -50 : 50,
      opacity: 0,
    }),
  };

  return (
    <div className={cn("relative w-full", className)}>

      <div className="md:hidden flex flex-col space-y-6">

        <div className="flex items-center gap-3">

          <span className="text-sm text-muted-foreground font-mono whitespace-nowrap">
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(reviews.length).padStart(2, "0")}
          </span>


          <div className="flex space-x-2 flex-1 justify-center max-w-35">
            {thumbnailReviews.map((review) => {
              const originalIndex = reviews.findIndex(
                (r) => r.id === review.id
              );
              const { LogoComponent } = review;
              return (
                <button
                  key={review.id}
                  onClick={() => handleThumbnailClick(originalIndex)}
                  className="overflow-hidden rounded-md w-10 h-12 opacity-70 hover:opacity-100 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background p-1"
                  aria-label={`View review from ${review.name}`}
                >
                  <LogoComponent className="w-full h-full object-contain fill-current text-foreground" />
                </button>
              );
            })}
          </div>


          <div className="flex items-center space-x-1.5">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-10 h-10 border-muted-foreground/50 "
              onClick={handlePrev}
              aria-label="Previous review"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="default"
              size="icon"
              className="rounded-full w-10 h-10 bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={handleNext}
              aria-label="Next review"
            >
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>


        <div className="relative overflow-hidden min-h-55 sm:min-h-45">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <m.div
              key={currentIndex}
              custom={direction}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              <p className="text-sm font-medium text-muted-foreground">
                {activeReview.affiliation}
              </p>
              <h3 className="text-lg font-semibold mt-1 text-foreground">
                {activeReview.name}
              </h3>
              <blockquote className={`mt-4 text-lg sm:text-xl font-medium leading-snug text-foreground ${!isExpanded ? 'line-clamp-6' : ''}`}>
                "{activeReview.quote}"
              </blockquote>
              {activeReview.quote.length > 200 && (
                <button
                  onClick={toggleExpanded}
                  className="mt-2 text-sm text-electric-500 hover:text-electric-600 dark:text-electric-400 dark:hover:text-electric-300 font-medium"
                >
                  {isExpanded ? 'Ver menos' : 'Ver mais'}
                </button>
              )}
            </m.div>
          </AnimatePresence>
        </div>


        <div className="relative h-40 sm:h-48 flex items-center justify-center overflow-hidden isolate">

          <div className="absolute top-0 left-0 right-0 h-8 bg-linear-to-b from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-linear-to-t from-background to-transparent z-10 pointer-events-none" />
          
          <AnimatePresence initial={false} custom={direction}>
            <m.div
              key={currentIndex}
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0 flex items-center justify-center p-4 rounded-lg"
            >
              <activeReview.LogoComponent className="w-full h-full object-contain fill-current text-foreground" />
            </m.div>
          </AnimatePresence>
        </div>
      </div>


      <div className="hidden md:grid grid-cols-12 gap-8">

        <div className="col-span-3 flex flex-col justify-between">
          <div className="flex flex-col space-y-4">

            <span className="text-sm text-muted-foreground font-mono">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(reviews.length).padStart(2, "0")}
            </span>

            <h2 className="text-sm font-medium tracking-widest uppercase [writing-mode:vertical-rl] rotate-180 text-muted-foreground">
              Reviews
            </h2>
          </div>


          <div className="flex space-x-2">
            {thumbnailReviews.map((review) => {
              const originalIndex = reviews.findIndex(
                (r) => r.id === review.id
              );
              const { LogoComponent } = review;
              return (
                <button
                  key={review.id}
                  onClick={() => handleThumbnailClick(originalIndex)}
                  className="overflow-hidden rounded-md w-20 h-24 opacity-70 hover:opacity-100 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background p-2"
                  aria-label={`View review from ${review.name}`}
                >
                  <LogoComponent className="w-full h-full object-contain fill-current text-foreground" />
                </button>
              );
            })}
          </div>
        </div>

        <div className="col-span-4 relative min-h-125 flex items-center justify-center overflow-hidden isolate">

          <div className="absolute top-0 left-0 right-0 h-12 bg-linear-to-b from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-background to-transparent z-10 pointer-events-none" />
          
          <AnimatePresence initial={false} custom={direction}>
            <m.div
              key={currentIndex}
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0 flex items-center justify-center p-8 rounded-lg"
            >
              <activeReview.LogoComponent className="w-full h-full object-contain fill-current text-foreground" />
            </m.div>
          </AnimatePresence>
        </div>


        <div className="col-span-5 flex flex-col justify-between pl-4 lg:pl-8">

          <div className="relative overflow-hidden pt-12 lg:pt-24 min-h-70 lg:min-h-50">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <m.div
                key={currentIndex}
                custom={direction}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              >
                <p className="text-sm font-medium text-muted-foreground">
                  {activeReview.affiliation}
                </p>
                <h3 className="text-xl font-semibold mt-1 text-foreground">
                  {activeReview.name}
                </h3>
                <blockquote className={`mt-6 text-2xl lg:text-3xl font-medium leading-snug text-foreground ${!isExpanded ? 'line-clamp-6' : ''}`}>
                  "{activeReview.quote}"
                </blockquote>
                {activeReview.quote.length > 200 && (
                  <button
                    onClick={toggleExpanded}
                    className="mt-3 text-sm text-electric-500 hover:text-electric-600 dark:text-electric-400 dark:hover:text-electric-300 font-medium"
                  >
                    {isExpanded ? 'Ver menos' : 'Ver mais'}
                  </button>
                )}
              </m.div>
            </AnimatePresence>
          </div>


          <div className="flex items-center space-x-2 mt-8">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 border-muted-foreground/50"
              onClick={handlePrev}
              aria-label="Previous review"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="default"
              size="icon"
              className="rounded-full w-12 h-12 bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={handleNext}
              aria-label="Next review"
            >
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
