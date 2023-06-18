import { fetchCars } from "@utils";
import { HomeProps } from "@types";
import { fuels, yearsOfProduction } from "@constants";
import { CarCard, ShowMore, SearchBar, CustomFilter, Hero } from "@components";
import BoockCar from "@components/BookCar";
import PlanTrip from "@components/PlanTrip";
import CarsCatalog from "./masini/(CarsCatalog)/CarsCatalog";

export default async function Home({ searchParams }: HomeProps) {
   //  const allCars = await fetchCars({
   //    manufacturer: searchParams.manufacturer || "",
   //    year: searchParams.year || 2022,
   //    fuel: searchParams.fuel || "",
   //    limit: searchParams.limit || 10,
   //    model: searchParams.model || "",
   //  });

   const allCars: any = [
      {
         city_mpg: 19,
         class: "minivan",
         combination_mpg: 22,
         cylinders: 6,
         displacement: 3.5,
         drive: "fwd",
         fuel_type: "gas",
         highway_mpg: 28,
         make: "honda",
         model: "odyssey",
         transmission: "a",
         year: 2022,
      },
      {
         city_mpg: 21,
         class: "midsize car",
         combination_mpg: 24,
         cylinders: 4,
         displacement: 2.5,
         drive: "awd",
         fuel_type: "gas",
         highway_mpg: 29,
         make: "kia",
         model: "stinger awd",
         transmission: "a",
         year: 2022,
      },
      {
         city_mpg: 22,
         class: "midsize car",
         combination_mpg: 25,
         cylinders: 4,
         displacement: 2.5,
         drive: "rwd",
         fuel_type: "gas",
         highway_mpg: 32,
         make: "kia",
         model: "stinger rwd",
         transmission: "a",
         year: 2022,
      },
      {
         city_mpg: 17,
         class: "midsize car",
         combination_mpg: 20,
         cylinders: 6,
         displacement: 3.3,
         drive: "awd",
         fuel_type: "gas",
         highway_mpg: 24,
         make: "kia",
         model: "stinger awd",
         transmission: "a",
         year: 2022,
      },
      {
         city_mpg: 18,
         class: "midsize car",
         combination_mpg: 20,
         cylinders: 6,
         displacement: 3.3,
         drive: "rwd",
         fuel_type: "gas",
         highway_mpg: 25,
         make: "kia",
         model: "stinger rwd",
         transmission: "a",
         year: 2022,
      },
      {
         city_mpg: 19,
         class: "minivan",
         combination_mpg: 22,
         cylinders: 6,
         displacement: 3.5,
         drive: "fwd",
         fuel_type: "gas",
         highway_mpg: 26,
         make: "kia",
         model: "carnival",
         transmission: "a",
         year: 2022,
      },
      {
         city_mpg: 19,
         class: "small sport utility vehicle",
         combination_mpg: 22,
         cylinders: 6,
         displacement: 3.5,
         drive: "fwd",
         fuel_type: "gas",
         highway_mpg: 26,
         make: "acura",
         model: "mdx fwd",
         transmission: "a",
         year: 2022,
      },
      {
         city_mpg: 26,
         class: "small sport utility vehicle",
         combination_mpg: 29,
         cylinders: 4,
         displacement: 2.5,
         drive: "fwd",
         fuel_type: "gas",
         highway_mpg: 33,
         make: "hyundai",
         model: "tucson fwd",
         transmission: "a",
         year: 2022,
      },
      {
         city_mpg: 25,
         class: "small sport utility vehicle",
         combination_mpg: 26,
         cylinders: 4,
         displacement: 1.5,
         drive: "fwd",
         fuel_type: "gas",
         highway_mpg: 28,
         make: "mitsubishi",
         model: "eclipse cross 2wd",
         transmission: "a",
         year: 2022,
      },
      {
         city_mpg: 26,
         class: "small sport utility vehicle",
         combination_mpg: 27,
         cylinders: 4,
         displacement: 1.5,
         drive: "fwd",
         fuel_type: "gas",
         highway_mpg: 29,
         make: "mitsubishi",
         model: "eclipse cross es 2wd",
         transmission: "a",
         year: 2022,
      },
   ];

   const isDataEmpty =
      !Array.isArray(allCars) || allCars.length < 1 || !allCars;

   return (
      <main className="overflow-hidden">
         <Hero />

         <BoockCar />

         <CarsCatalog />

         <PlanTrip />
      </main>
   );
}
