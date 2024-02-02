import { motion } from "framer-motion";

export const TitleTexts = () => {
  const container = {
    visible: {
      transition: {
        delayChildren: 0.1, // Delay before stagger starts
        staggerChildren: 0.4, // Stagger duration between children
      },
    },
  };

  const item = {
    hidden: {
      height: "0",
    },
    visible: {
      height: "auto",
    },
  };
  const menuItems: string[] = ["WE BUILD", "DIGITAL", "FLAGSHIP", "STORES"];
  return (
    <div className="flex flex-col justify-end h-60 xl:h-[302px] pl-8">
      <div className="overflow-hidden">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={container}
          className="uppercase text-[8vmin] xl:text-[10vmin] leading-[0.8] tracking-tighter"
        >
          {menuItems.map((row, i) => (
            <motion.div
              key={i}
              variants={item}
              style={{ marginLeft: i == 2 ? 48 : 0 }}
            >
              {row}
            </motion.div>
          ))}
        </motion.h1>
      </div>
    </div>
  );
};
