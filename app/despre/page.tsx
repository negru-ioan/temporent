import PlanTrip from "@components/PlanTrip";

function AboutPage() {
   return (
      <div className="my-0 px-10 pt-24 max-width">
         <div className="flex flex-col sm:flex-row flex-center gap-10 max-width my-10 mx-auto">
            {/* <img
               src="https://blog.autoslash.com/wp-content/uploads/2020/10/Rent-A-Wreck-in-business-1024x576.jpg"
               width={500}
               height={500}
               alt="Rent A Wreck"
            /> */}
            <img
               src="https://www.investopedia.com/thmb/7YTosqM7hQHT8Wvb8a4WQF6GLUM=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1406077167-627c795e2562470a960028dd166d3a6c.jpg"
               className="w-full h-full md:w-[500px] md:h-[380px] lg:w-[600px] lg:h-[480px]"
               alt="Rent A Wreck"
            />
            <div className="flex flex-col max-w-lg">
               <h3 className="text-2xl pb-5">Despre noi</h3>
               <h2 className="text-4xl font-bold pb-5">
                  Pornești motorul și aventura va începe
               </h2>
               <p className="text-md text-gray-600 font-medium">
                  Bine ați venit la Temporent! Suntem aici să vă oferim o
                  experiență convenabilă și sigură atunci când vine vorba de
                  închirierea unei mașini. Indiferent dacă sunteți în călătorii
                  de afaceri, în vacanță sau aveți nevoie de o mașină temporară
                  pentru orice alt scop, avem soluții adaptate nevoilor dvs.
               </p>
               <div className="grid gap-4 mt-10 grid-cols-1 md:grid-cols-3">
                  <div className="flex-center flex-col">
                     <div className="w-28 h-20 p-2">
                        <img
                           src="car2.svg"
                           className="w-full h-full object-contain"
                           alt=""
                        />
                     </div>
                     <span className="flex items-center gap-4 max-sm:flex-col">
                        <h4 className="text-4xl font-bold">40</h4>
                        <p className="text-gray-700 text-sm font-bold">
                           Tipuri de masini
                        </p>
                     </span>
                  </div>
                  <div className="flex-center flex-col">
                     <div className="w-28 h-20">
                        <img
                           className="w-full h-full object-contain"
                           // src="https://static.thenounproject.com/png/884758-200.png"
                           src="car_repair.svg"
                           alt=""
                        />
                     </div>
                     <span className="flex items-center gap-4 max-sm:flex-col">
                        <h4 className="text-4xl font-bold">72</h4>
                        <p className="text-gray-700 text-sm font-bold">
                           Puncte de închiriere
                        </p>
                     </span>
                  </div>
                  <div className="flex-center flex-col">
                     <div className="w-28 h-20">
                        <img
                           className="w-full h-full object-contain"
                           // src="https://media.istockphoto.com/id/1150345341/vector/service-tools-icon-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=gNQtazNr09AvY21QdyxcSRvjauVaeXUqqK13STDQhxI="
                           src="gear.svg"
                           alt=""
                        />
                     </div>
                     <span className="flex max-sm:flex-col items-center gap-4">
                        <h4 className="text-4xl font-bold">34</h4>
                        <p className="text-gray-700 text-sm font-bold">
                           Ateliere de reparatii
                        </p>
                     </span>
                  </div>
               </div>
            </div>
         </div>
         <PlanTrip />
      </div>
   );
}

export default AboutPage;
