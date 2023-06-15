import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const NavBar = () => (
   <header className="w-full  absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
         <Link href="/" className="flex justify-center items-center">
            <Image
               src="/logos.svg"
               alt="logo"
               width={90}
               height={16}
               className="object-contain"
            />
            <h3 className="font-extrabold text-2xl pl-4">Temporent</h3>
         </Link>

         <CustomButton
            title="Sign in"
            btnType="button"
            containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
         />
      </nav>
   </header>
);

export default NavBar;
