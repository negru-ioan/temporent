import Image from "next/image";

function PlanTrip() {
   return (
      <>
         <section className="plan-section bg-white py-28">
            <div className="container max-width px-0 sm:px-44">
               <div className="plan-container">
                  <div className="plan-container__title mx-auto text-center text-black">
                     <h3 className="text-xl sm:text-3xl font-medium">
                        Planificați-vă călătoria acum
                     </h3>
                     <h2 className="text-3xl sm:text-5xl font-semibold my-8">
                        Închiriați o mașină rapid și ușor
                     </h2>
                  </div>

                  <div className="plan-container__boxes grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-9 px-3 md:px-0">
                     <div className="plan-container__boxes__box">
                        <Image
                           src="/plan/icon1.png"
                           className="hue-rotate-[218deg]"
                           alt="icon_img"
                           width={200}
                           height={200}
                        />
                        <h3 className="text-3xl font-medium mt-4">
                           Alege o mașină
                        </h3>
                        <p className="text-base font-medium text-gray-700 mt-2">
                           Oferim o gamă variată de vehicule pentru toate
                           nevoile dumneavoastră de conducere. Avem mașina
                           perfectă pentru a satisface cerințele dumneavoastră.
                        </p>
                     </div>

                     <div className="plan-container__boxes__box">
                        <Image
                           src="/plan/icon2.png"
                           className="hue-rotate-[218deg]"
                           alt="icon_img"
                           width={200}
                           height={200}
                        />
                        <h3 className="text-3xl font-medium mt-4">
                           Contactează Operatorul
                        </h3>
                        <p className="text-base font-medium text-gray-700 mt-2">
                           Operatorii noștri competenți și prietenoși sunt mereu
                           pregătiți să vă ajute cu orice întrebări sau
                           nelămuriri aveți.
                        </p>
                     </div>

                     <div className="plan-container__boxes__box">
                        <Image
                           src="/plan/icon3.png"
                           className="hue-rotate-[218deg]"
                           alt="icon_img"
                           width={200}
                           height={200}
                        />
                        <h3 className="text-3xl font-medium mt-4">Condu!</h3>
                        <p className="text-base font-medium text-gray-700 mt-2">
                           Indiferent dacă te pregătești să străbați drumurile
                           deschise sau să explorezi locuri noi, noi te acoperim
                           cu gama noastră largă de mașini.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}

export default PlanTrip;
