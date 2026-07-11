import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeprovider";
import { ThemeBtn } from "@/components/ui/themebtn";
import Atmosphere from "@/components/atmosphere";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Sharan Suri",
  description: "Portfolio of Sharan Suri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body
        className={`${inter.variable} ${instrumentSerif.variable} font-sans antialiased w-screen md:w-full overflow-x-hidden`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <Atmosphere />
          <div className='fixed bottom-4 right-4 z-20'>
            <ThemeBtn />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
