import { motion } from "framer-motion";

export const TitleTexts = () => {
  const container = {
    visible: {
      transition: {
        delayChildren: 0.1, // Delay before stagger starts
        staggerChildren: 0.4, // Stagger duration between children
      },
    }
  }

  const item = {
    hidden: {
      height: "0",
    },
    visible: {
      height: "auto",
    }
  }
  const menuItems: string[] = [
    "WE BUILD",
    "DIGITAL",
    "FLAGSHIP",
    "STORES",
  ]
  return (
    <div className="flex flex-col justify-end h-60 lg:h-72 px-8">
      <div className="overflow-hidden">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className=" uppercase text-black font-semibold text-6xl lg:text-7xl  "
        >
          {menuItems.map((row, i) => (
            <motion.h1 key={i}
              variants={item}
            >
              {row}
            </motion.h1>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

