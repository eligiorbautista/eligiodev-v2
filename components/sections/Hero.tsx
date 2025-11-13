import React, { useState } from "react";
import { USER_INFO } from "../../config/site";
import PasswordModal from "../ui/modals/PasswordModal";
import Toast from "../ui/Toast";
import ProfileImageModal from "../ui/modals/ProfileImageModal";

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePasswordSubmit = (password: string) => {
    if (password === USER_INFO.resumePassword) {
      setIsModalOpen(false);
      const link = document.createElement("a");
      link.href = USER_INFO.resumeUrl;
      link.setAttribute("download", "Resume_BautistaEligio.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      setShowToast(true);
    }
  };

  return (
    <>
      <section
        id="home"
        className="min-h-screen grid lg:grid-cols-5 items-center gap-y-0 gap-x-6 sm:gap-10 lg:gap-12 py-28 sm:py-20 lg:py-24"
      >
        <div className="order-2 lg:order-1 lg:col-span-3 opacity-0 animate-fade-in-up text-left space-y-2.5 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-sans text-accent flex items-center">
            {USER_INFO.name}
            <span className="inline-block w-1 h-8 sm:h-10 md:h-14 ml-2 animate-blink border-r-4 border-transparent" />
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-text-main">
            {USER_INFO.hero.headline}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-3xl">
            {USER_INFO.hero.subheadline_p1}{" "}
            <span className="text-accent font-medium">{USER_INFO.title}</span>{" "}
            {USER_INFO.hero.subheadline_p2}{" "}
            <span className="text-accent font-medium">
              {USER_INFO.location}
            </span>
            {USER_INFO.hero.subheadline_p3}
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="inline-block font-mono text-sm sm:text-base bg-transparent border-2 border-accent text-accent px-5 py-2.5 sm:px-7 sm:py-3 hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all duration-300"
              data-cursor-interactive
            >
              {USER_INFO.hero.cta}
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block font-mono text-sm sm:text-base bg-transparent border-2 border-accent-secondary text-accent-secondary px-5 py-2.5 sm:px-7 sm:py-3 hover:bg-accent-secondary/10 focus:outline-none focus:ring-2 focus:ring-accent-secondary focus:ring-offset-2 focus:ring-offset-background transition-all duration-300"
              data-cursor-interactive
            >
              {USER_INFO.hero.resumeCta}
            </button>
          </div>
        </div>
        <div className="order-1 lg:order-2 lg:col-span-2 flex items-center justify-center mb-0 sm:mb-8 lg:mb-0">
          <div
            className="relative w-80 h-80 sm:w-[22rem] sm:h-[22rem] md:w-96 md:h-96 lg:w-[26rem] lg:h-[26rem] group opacity-0 animate-fade-in cursor-pointer"
            style={{ animationDelay: "300ms" }}
            onClick={() => setIsImageModalOpen(true)}
            data-cursor-interactive
          >
            {/* Outer glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 via-accent/10 to-transparent rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            {/* Inner image container */}
            <div className="absolute inset-2 rounded-lg overflow-hidden bg-background transition-transform duration-500 group-hover:scale-[1.02]">
              <img
                src={USER_INFO.hero.profileImageUrl}
                alt="Eligio Bautista III"
                className="w-full h-full object-cover transition-all duration-700 grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
      <PasswordModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handlePasswordSubmit}
      />
      <Toast
        message="Incorrect password. Please try again."
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
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
