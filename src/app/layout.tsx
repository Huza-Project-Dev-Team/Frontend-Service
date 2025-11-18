import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import '@fontsource/poppins';              
import '@fontsource/poppins/600.css';     
import '@fontsource/poppins/700.css';
import { UserProvider } from "@/contexts/UserContext";      



const poppins=Poppins({
  subsets:['latin'],
  weight:['400','600','700'],
  variable:'--font-poppins'
})

export const metadata: Metadata = {
  title: "HUZA",
  description: "HUZA is an application that helps to link people with problems and solutions",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
