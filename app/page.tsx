"use client";
import "./styles.css";
import { TitleTexts } from "@components/TitleTexts";
import HomeSectionLeft from "@components/HomeSectionLeft";
import Sidebar from "@components/Sidebar";

export default function App() {
  return (
    <div className="w-full">
      <div className="flex" style={{ height: "100svh" }}>
        <HomeSectionLeft />
        <main className="flex md:items-center flex-1 py-40 md:p-0">
          <TitleTexts />
        </main>
      </div>
      <Sidebar />
    </div >
  );
}
