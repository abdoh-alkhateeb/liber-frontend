import type { Metadata } from "next";
import { Roboto_Serif } from "next/font/google";
import "./globals.css";
import SettingsButton from "@/components/buttons/SettingsButton";
import LogOutButton from "@/components/buttons/LogOutButton";

const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Liber",
  description: "Your hub for staying updated on all things university.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={robotoSerif.className}>
      <body className="bg-gray-50 text-gray-900">
        <header className="sticky top-0 z-10 flex items-center justify-between bg-white p-4 shadow">
          <h1 className="cursor-pointer text-5xl font-bold transition hover:scale-105 hover:text-blue-600">Liber</h1>
          <div className="flex gap-4">
            <SettingsButton />
            <LogOutButton />
          </div>
        </header>
        <main className="mx-auto max-w-4xl p-6">{children}</main>
      </body>
    </html>
  );
}
