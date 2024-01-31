import { motion } from "framer-motion";

interface itemProps {
  children: JSX.Element
  onClick: () => void
}
const Backdrop = ({ children, onClick }: itemProps) => (
  <motion.div
    onClick={onClick}
    className="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center"
    style={{ background: "#000000e1" }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    {children}
  </motion.div>
);

export default Backdrop;