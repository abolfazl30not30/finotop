import React from "react";
import Navbar from "@/components/dashboard/Navbar";
import Market from "@/components/dashboard/Market";

export default function page() {
  return (
    <div className=" bg-[#F5F5F5]">
      <Navbar />
      <Market />
    </div>
  );
}
