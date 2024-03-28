"use client";
import "./globals.css";
import { Roboto } from "next/font/google";
import Header from "@/components/Header";
import { Provider } from "react-redux";
import store from "@/store";
import React from "react";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const roboto = Roboto({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

// const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const router = useRouter();
  return (
    <React.StrictMode>
      <html lang="en">
        <Provider store={store}>
          <body className={roboto.className}>
            <Toaster />
            <Header />
            {children}
          </body>
        </Provider>
      </html>
    </React.StrictMode>
  );
}
