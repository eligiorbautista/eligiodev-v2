import React, { useState } from "react";
import { USER_INFO, SECTION_TITLES } from "../../config/site";
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
        <SectionTitle number="01">{SECTION_TITLES.about}</SectionTitle>
        
        <div className="grid md:grid-cols-5 gap-8 lg:gap-10 items-center">
          {/* Text Content */}
          <div className="md:col-span-3 space-y-6">
            <div className="bg-primary/30 border border-accent/10 p-6 sm:p-7 lg:p-8 hover:border-accent/20 transition-all duration-300">
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                {USER_INFO.about.paragraph1}
              </p>
            </div>
          </div>
          
          {/* Profile Image */}
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
