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
<div className="flex flex-wrap gap-2 sm:gap-3 mt-4">
              {SKILLS.map((skill) => (
                <span 
                  key={skill} 
                  className="font-mono text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 border border-accent/30 text-text-secondary bg-primary/50 hover:bg-accent/10 hover:text-accent hover:border-accent/50 transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="md:col-span-2 flex justify-center md:justify-end mt-10 md:mt-0">
            <div
              className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[26rem] lg:h-[26rem] group cursor-pointer"
              onClick={() => setIsImageModalOpen(true)}
              data-cursor-interactive
            >
              <div className="absolute inset-2 rounded-lg overflow-hidden bg-primary border border-accent/20 transition-transform duration-500 group-hover:scale-[1.02]">
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
