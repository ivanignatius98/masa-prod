"use client";
import "./styles.css";
import { TitleTexts } from "@components/TitleTexts";
import HomeSectionLeft from "@components/HomeSectionLeft";
import { motion } from "framer-motion";
import Sidebar from "@components/Sidebar";

export default function App() {
  return (
    <div className="w-full">
      <div className="flex" style={{ height: "100svh" }}>
        <HomeSectionLeft />
        <div className="flex md:items-center flex-1 ">
          <div className="flex flex-col justify-between w-full h-full pt-52 pb-20 pr-20">
            <TitleTexts />
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                  transition: {
                    delay: 1.7,
                  },
                },
              }}
              initial="hidden"
              animate="visible"
              className="ml-auto max-w-80"
            >
              <p className="text-2xl leading-none tracking-tighter">
                We believe buying decisions are driven by emotion.
              </p>
              <div className="mt-6 font-bold">ABOUT US</div>
            </motion.div>
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}
