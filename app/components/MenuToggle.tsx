import { motion } from "framer-motion";

const Path = ({ isOpen, ...props }: any) => (
  <motion.path
    fill="pink"
    strokeWidth="3"
    stroke="white"
    strokeLinecap="round"
    initial="closed"
    animate={isOpen ? "open" : "closed"}
    {...props}
  />
);

export const MenuToggle = ({ toggle, isOpen }: any) => {
  return (
    <button
      className="flex justify-center items-center fixed left-[15px] top-[18px] w-12 h-12 rounded-full bg-pink-400"
      onClick={toggle}
    >
      <svg width="23" height="18" viewBox="0 0 23 18">
        <Path
          isOpen={isOpen}
          d="M 2 2.5 L 20 2.5"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          isOpen={isOpen} d="M 2 9.423 L 20 9.423" opacity="1"
          variants={{
            closed: { opacity: "1" },
            open: { opacity: "0" },
          }}
          initial="closed"
        />
        <Path
          isOpen={isOpen}
          d="M 2 16.346 L 20 16.346"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
        />
      </svg>
    </button>
  )
};
