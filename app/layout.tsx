// app/layout.tsx or app/page.tsx

import type { Metadata } from "next";
import { Lora } from "@next/font/google";
import "./globals.css";
import { Playfair_Display} from '@next/font/google';

// Define font styles
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], 
  variable: "--font-playfair", 
});

const lora = Lora({
  subsets: ["latin"], // Define the subsets you want
  variable: "--font-lora", // Custom CSS variable to reference Lora
  weight: ["500", "700"], // Choose the weights you want to use
  style: "italic"
});
import { Instrument_Serif } from '@next/font/google';

import { Poppins } from '@next/font/google';

const poppins = Poppins({
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'], 
  display: 'swap', 
  variable: "--font-poppins", 
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'], 
  weight: ['400' ],
  variable: "--font-instrument", 
});
import { Inter } from 'next/font/google';

// Initialize the font
const inter = Inter({
  subsets: ['latin'], 
  weight: ['400', '700'], 
  display: 'swap', 
  variable: "--font-inter", 
});


export const metadata: Metadata = {
  title: "DHG Wahl-O-Mat",
  description: "Mache das Quiz und finde heraus, welche Partei am ehesten deinen Meinungen entspricht!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${instrumentSerif.variable} ${inter.variable} ${poppins.variable} ${playfairDisplay.variable}  antialiased `}
     > 
        {children}
      </body>
    </html>
  );
}
