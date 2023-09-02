import SidePanel from "./side-panel";
import { motion, useCycle } from "framer-motion";
import { useRef } from "react";
import { useDimensions } from "../../hooks/use-dimensions";
import { LuMenu } from "react-icons/lu";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 500}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const FloatingPanel = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35, delay: 0.85 }}
        className="absolute top-[1.6rem] z-[101] left-[1.55rem] text-3xl"
        onClick={() => toggleOpen()}
      >
        <LuMenu />
      </motion.button>
      <motion.div
        ref={containerRef}
        custom={height}
        animate={isOpen ? "open" : "closed"}
        variants={sidebar}
        className="absolute w-screen min-h-screen bg-white dark:bg-slate-700 z-[99]"
      >
        <motion.div className="min-w-screen h-screen bg-white dark:bg-slate-900 z-[99] p-10 fixed flex items-center justify-center">
          <SidePanel toggle={() => toggleOpen()} />
        </motion.div>
      </motion.div>
    </>
  );
};

export default FloatingPanel;
