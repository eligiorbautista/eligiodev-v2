import React, { useState } from "react";
import { USER_INFO, SKILLS, SECTION_TITLES } from "../../config/site";
import SectionTitle from "../ui/SectionTitle";
import ProfileImageModal from "../ui/modals/ProfileImageModal";

const About: React.FC = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24">
      <div
        className="opacity-0 animate-fade-in-up"
        style={{ animationDelay: "200ms" }}
      >
        <SectionTitle>{SECTION_TITLES.about}</SectionTitle>
        <div className="grid md:grid-cols-5 gap-8 lg:gap-10 items-center">
          <div className="md:col-span-3 text-base sm:text-lg text-text-secondary space-y-4">
            <p>{USER_INFO.about.paragraph1}</p>
            <p>{USER_INFO.about.paragraph2}</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 mt-4 text-sm sm:text-base md:text-lg">
              {SKILLS.map((skill) => (
                <li key={skill} className="flex items-center">
                  <span className="text-accent font-mono mr-3 text-lg sm:text-xl md:text-2xl">&gt;</span>
                  <span className="text-text-secondary font-mono">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2 flex justify-center md:justify-end mt-10 md:mt-0">
            <div
              className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[26rem] lg:h-[26rem] group cursor-pointer"
              onClick={() => setIsImageModalOpen(true)}
              data-cursor-interactive
            >
              {/* Outer glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 via-accent/10 to-transparent rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              {/* Inner image container */}
              <div className="absolute inset-2 rounded-lg overflow-hidden bg-background transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src={USER_INFO.about.profileImageUrl}
                  alt="Eligio Bautista III"
                  className="w-full h-full object-cover transition-all duration-700 grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProfileImageModal
        isOpen={isImageModalOpen}
        imageUrl={USER_INFO.about.profileImageUrl}
        alt="Eligio Bautista III"
        onClose={() => setIsImageModalOpen(false)}
      />
    </section>
  );
};

export default About;
