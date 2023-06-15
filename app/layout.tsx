import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
   title: "Temporent",
   description: "Discover world's best car showcase application",
   icons: {
      icon: "/logos.svg",
   },
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body className="relative">
            <NavBar />
            {children}
            <Footer />
         </body>
      </html>
   );
}
