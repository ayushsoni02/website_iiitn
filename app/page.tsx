"use client"
import { useState, useEffect } from "react";
import { MainNav } from "@/components/navbar/main-nav";
import { NavSystem } from "@/components/navbar/nav-system";

export default function Home() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Function to check screen width
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 850);
    };

    checkScreenSize(); // Check initial size

    // Listen for resize events
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return <div>{isLargeScreen ? <NavSystem /> : <MainNav />}</div>;
}
