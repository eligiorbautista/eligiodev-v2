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
        className="min-h-screen grid lg:grid-cols-5 items-center py-20"
      >
        <div className="lg:col-span-3 opacity-0 animate-fade-in-up text-left">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-sans text-accent mb-4 flex items-center">
            {USER_INFO.name}
            <span className="inline-block w-1 h-10 sm:h-12 md:h-16 ml-2 animate-blink border-r-4 border-transparent" />
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-text-main mb-6">
            {USER_INFO.hero.headline}
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mb-8">
            {USER_INFO.hero.subheadline_p1}{" "}
            <span className="text-accent font-medium">{USER_INFO.title}</span>{" "}
            {USER_INFO.hero.subheadline_p2}{" "}
            <span className="text-accent font-medium">
              {USER_INFO.location}
            </span>
            {USER_INFO.hero.subheadline_p3}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="inline-block font-mono text-lg bg-transparent border-2 border-accent text-accent px-8 py-3 hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all duration-300"
              data-cursor-interactive
            >
              {USER_INFO.hero.cta}
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block font-mono text-lg bg-transparent border-2 border-accent-secondary text-accent-secondary px-8 py-3 hover:bg-accent-secondary/10 focus:outline-none focus:ring-2 focus:ring-accent-secondary focus:ring-offset-2 focus:ring-offset-background transition-all duration-300"
              data-cursor-interactive
            >
              {USER_INFO.hero.resumeCta}
            </button>
          </div>
        </div>
        <div className="hidden lg:col-span-2 lg:flex items-center justify-center">
          <div
            className="relative w-64 h-64 lg:w-96 lg:h-96 group opacity-0 animate-fade-in cursor-pointer"
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
