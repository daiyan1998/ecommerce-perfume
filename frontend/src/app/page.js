"use client";
import HomeScreen from "@/screens/HomeScreen";

export default function Home() {
  console.log("app/page", process.env.NODE_ENV);
  return (
    <>
      <HomeScreen />
    </>
  );
}
