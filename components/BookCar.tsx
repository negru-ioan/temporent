"use client";

import { useState } from "react";
import { locations, manufacturers } from "@constants";
import Input from "./Input";
import { CustomButton } from "@components";
import Modal from "./Modal";

function BoockCar() {
   const [showModal, setShowModal] = useState(false);
   const [form, setForm] = useState({
      car_type: "",
      pick_up: "",
      drop_off: "",
      pick_time: "",
      drop_time: "",
   });

   return (
      <div className="flex justify-center flex-1 my-32 md:px-0 lg:px-10">
         <div className="w-full pt-10 pb-8 md:pb-0 px-4 mx-2 md:mx-8 sm:mx-14 sm:px-8 shadow-2xl">
            <h1 className="text-4xl font-extrabold pb-8 text-black-100 max-sm:pl-3">
               Închiriază o mașină
            </h1>
            <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-3 sm:grid-rows-3 gap-8 gap-y-12">
               <Input
                  values={manufacturers}
                  form={form}
                  setValue={setForm}
                  image="/car-logo.svg"
                  name="car_type"
                  placeholder="Tip mașină"
               />
               <Input
                  values={locations}
                  form={form}
                  setValue={setForm}
                  image="/location.svg"
                  name="pick_up"
                  placeholder="Locație"
               />
               <Input
                  values={locations}
                  form={form}
                  setValue={setForm}
                  image="/location.svg"
                  name="drop_off"
                  placeholder="Renuntează"
               />
               <div
                  className="search-manufacturer__input flex justify-between rounded-full"
                  style={{ paddingLeft: "18px" }}
               >
                  <div className="tooltip">
                     Preluare
                     <span className="tooltiptext">Data preluării</span>
                  </div>
                  <input
                     className="bg-light-white"
                     value={form.pick_time}
                     onChange={(e) =>
                        setForm({ ...form, pick_time: e.target.value })
                     }
                     type="date"
                  ></input>
               </div>

               <div
                  className="search-manufacturer__input flex justify-between rounded-full"
                  style={{ paddingLeft: "18px" }}
               >
                  <div className="tooltip">
                     Returnare
                     <span className="tooltiptext">Data returnării</span>
                  </div>
                  <input
                     className="bg-light-white"
                     value={form.drop_time}
                     onChange={(e) =>
                        setForm({ ...form, drop_time: e.target.value })
                     }
                     type="date"
                  ></input>
               </div>

               <CustomButton
                  title="Rezervează"
                  containerStyles="bg-primary-blue text-white rounded-full"
                  handleClick={() => setShowModal(!showModal)}
               />
               {showModal && <Modal formData={form} />}
            </div>
         </div>
      </div>
   );
}

export default BoockCar;
