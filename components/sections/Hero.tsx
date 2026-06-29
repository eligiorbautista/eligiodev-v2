import React, { useState } from "react";
import { USER_INFO } from "../../config/site";
import ProfileImageModal from "../ui/modals/ProfileImageModal";

const ArrowDownIcon: React.FC = () => (
  <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
  </svg>
);

const Hero: React.FC = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center py-28 sm:py-20 lg:py-24 relative"
      >
        {/* Background grid decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-px h-32 bg-accent/5" />
          <div className="absolute top-40 left-10 w-32 h-px bg-accent/5" />
          <div className="absolute bottom-32 right-10 w-px h-48 bg-accent/5" />
          <div className="absolute bottom-48 right-10 w-24 h-px bg-accent/5" />
        </div>

        <div className="grid lg:grid-cols-5 items-center gap-y-10 sm:gap-y-0 gap-x-6 sm:gap-10 lg:gap-12 relative z-10">
          {/* Text Content */}
          <div className="order-2 lg:order-1 lg:col-span-3 opacity-0 animate-fade-in-up text-left">
            {/* Role badge */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="font-mono text-xs sm:text-sm text-text-secondary/60 tracking-widest uppercase">
                {USER_INFO.title} · {USER_INFO.location}
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-text-main tracking-tight leading-none mb-4 sm:mb-6">
              {USER_INFO.name}
            </h1>

            {/* Decorative line */}
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <div className="w-12 sm:w-16 h-px bg-accent/40" />
              <span className="font-mono text-xs sm:text-sm text-accent/60 tracking-wider">
                AVAILABLE FOR WORK
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-main leading-snug mb-4 sm:mb-6 max-w-2xl">
              {USER_INFO.hero.headline}
            </h2>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-xl leading-relaxed mb-8 sm:mb-10">
              {USER_INFO.hero.subheadline_p1}{" "}
              <span className="text-accent font-medium">{USER_INFO.title}</span>{" "}
              {USER_INFO.hero.subheadline_p2}{" "}
              <span className="text-accent font-medium">
                {USER_INFO.location}
              </span>
              {USER_INFO.hero.subheadline_p3}
            </p>

            {/* CTA + Social proof */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center gap-3 font-mono text-sm sm:text-base bg-accent text-background px-6 py-3 sm:px-8 sm:py-4 hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all duration-300 btn-press"
                data-cursor-interactive
              >
                {USER_INFO.hero.cta}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </a>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-primary border-2 border-background flex items-center justify-center"
                    >
                      <div className="w-2 h-2 bg-accent/40 rounded-full" />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-text-secondary/60">
                  Trusted by 15+ clients
                </span>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 lg:col-span-2 flex items-center justify-center">
            <div
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] group cursor-pointer"
              onClick={() => setIsImageModalOpen(true)}
              data-cursor-interactive
            >
              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-accent/10" />
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-accent/10" />
              
              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-accent/30" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-accent/30" />
              
              <div className="absolute inset-0 border border-accent/20 overflow-hidden transition-all duration-500 group-hover:border-accent/40">
                <img
                  src={USER_INFO.hero.profileImageUrl}
                  alt="Eligio Bautista III"
                  className="w-full h-full object-cover transition-all duration-700 grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary/90 border border-accent/20 px-4 py-2 flex items-center gap-2 backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="font-mono text-xs text-text-secondary whitespace-nowrap">
                  Open for projects
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="font-mono text-xs text-text-secondary/40 tracking-wider">SCROLL</span>
          <ArrowDownIcon />
        </div>
      </section>
      <ProfileImageModal
        isOpen={isImageModalOpen}
        imageUrl={USER_INFO.hero.profileImageUrl}
        alt="Eligio Bautista III"
        onClose={() => setIsImageModalOpen(false)}
      />
    </>
  );
};

export default Hero;
