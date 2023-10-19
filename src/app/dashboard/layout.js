"use client";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";

export default function Dashboard({ children }) {
  return (
    <div className=" bg-[#FBFBFB] main" dir="rtl">
      <Sidebar />
      <Header />
      <div className="">{children}</div>
    </div>
  );
}
