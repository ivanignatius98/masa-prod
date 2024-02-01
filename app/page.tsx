"use client";
import "./styles.css";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { MenuToggle } from "@components/MenuToggle";
import { Menu } from "@components/Menu";
import { motion } from "framer-motion";
import { TitleTexts } from "@components/TitleTexts";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full">
      <div className="flex" style={{ height: "calc(-4rem + 100svh)" }}>
        <motion.div
          className="flex-1 bg-white hidden md:block"
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                delay: 1.7
              }
            }
          }}
          initial="hidden"
          animate="visible"
        >
        </motion.div>
        <div className="flex md:items-center flex-1 py-40 md:p-0">
          <TitleTexts />
        </div>
      </div>

      {/* Sidebar */}
      <AnimatePresence
        initial={false}
        mode="wait"
      >
        {isOpen && <Menu handleClose={() => setIsOpen(false)} />}
      </AnimatePresence>
      <MenuToggle isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      {/* Sidebar End */}
    </div >
  );
}
