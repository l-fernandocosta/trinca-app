import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Provider } from "./provider";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "trin.ca",
  description: "Hora do churras. ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <ClerkProvider>
        <Provider>
          <body className={inter.className}>
            {children}
            <Toaster />
          </body>
        </Provider>
      </ClerkProvider>
    </html>
  );
}
