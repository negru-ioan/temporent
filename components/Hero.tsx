"use client";

import Image from "next/image";

import { CustomButton } from "@components";

const Hero = () => {
   const handleScroll = () => {
      const nextSection = document.getElementById("discover");

      if (nextSection) {
         nextSection.scrollIntoView({ behavior: "smooth" });
      }
   };

   return (
      <div className="hero">
         <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
               Închiriază mașina perfectă pentru tine!
            </h1>

            <p className="hero__subtitle">
               Simplifică-ți experiența de închiriere auto cu procesul nostru de
               rezervare fără efort!
            </p>

            <CustomButton
               title="Vezi Mașinile"
               containerStyles="bg-primary-blue text-white rounded-full mt-10"
               handleClick={handleScroll}
            />
         </div>
         <div className="hero__image-container">
            <div className="hero__image">
               <Image
                  src="/suv.png"
                  alt="hero"
                  fill
                  className="object-contain scale-110"
               />
            </div>

            <div className="hero__image-overlay" />
         </div>
      </div>
   );
};

export default Hero;
