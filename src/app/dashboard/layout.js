"use client";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";

export default function Dashboard({ children }) {
  return (
    <div className="flex flex-column" dir="rtl">
      <Sidebar />
      <Header />
      <div className="main">{children}</div>
    </div>
  );
}
