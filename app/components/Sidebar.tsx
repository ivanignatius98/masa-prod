import { AnimatePresence } from "framer-motion";
import { Fragment, useState } from "react";
import { Menu } from "./Menu";
import { MenuToggle } from "./MenuToggle";

const Page = () => {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <AnimatePresence
        initial={false}
        mode="wait"
      >
        {isOpen && <Menu handleClose={() => setIsOpen(false)} />}
      </AnimatePresence>
      <MenuToggle isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
    </Fragment>
  )
};

export default Page;