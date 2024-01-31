"use client";
import "./styles.css";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { MenuToggle } from "@components/MenuToggle";
import { Menu } from "@components/Menu";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {/* Sidebar */}
      <AnimatePresence
        initial={false}
        mode="wait"
      >
        {isOpen && <Menu handleClose={() => setIsOpen(false)} />}
      </AnimatePresence>
      <MenuToggle isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      {/* Sidebar End */}


    </div>
  );
}
