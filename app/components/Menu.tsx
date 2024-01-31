import { motion } from "framer-motion";
import Backdrop from "./Backdrop";

const dropIn = {
  hidden: {
    transform: "translateX(-100%)",
  },
  visible: {
    transform: "translateX(0%)",
    transition: {
      ease: [0.08, 0.65, 0.53, 0.96],
      duration: 0.6,
    },
  },
  exit: {
    transform: "translateX(-100%)",
    transition: {
      at: "-0.1"
    },
  },
};
const container = {
  visible: {
    transition: {
      delayChildren: 0.1, // Delay before stagger starts
      staggerChildren: 0.05, // Stagger duration between children
    },
  }
}
const item = {
  hidden: {
    scale: 0.5,
    opacity: 0,
    filter: "blur(10px)"
  },
  visible: {
    scale: 1,
    opacity: 1,
    filter: "blur(0px)"
  }
}
interface itemProps {
  handleClose: () => void
}
export function Menu({ handleClose }: itemProps) {
  const menuItems: string[] = [
    "Portfolio",
    "About",
    "Contact",
    "Search",
  ]
  return (
    <Backdrop onClick={handleClose}>
      <motion.nav
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed w-[400px] top-0 left-0 bottom-0 w-400 bg-pink-400 pt-24 transform"
      >
        <motion.ul
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-2 p-4"
        >
          {menuItems.map((row) =>
            <motion.li variants={item} className="text-white font-bold p-2 text-5xl" >{row}</motion.li>
          )}
        </motion.ul>
      </motion.nav>
    </Backdrop>
  );
}
