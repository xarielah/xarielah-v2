import SidePanel from "./side-panel";
import { motion, useCycle } from "framer-motion";
import { useRef } from "react";
import { useDimensions } from "../../hooks/use-dimensions";
import { LuMenu } from "react-icons/lu";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
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
      <button
        className="absolute top-[1.6rem] z-[101] left-[1.55rem] text-3xl"
        onClick={() => toggleOpen()}
      >
        <LuMenu />
      </button>
      <motion.div
        ref={containerRef}
        custom={height}
        animate={isOpen ? "open" : "closed"}
        variants={sidebar}
        className="absolute w-screen min-h-screen bg-white dark:bg-slate-700 z-[99] p-3"
      >
        <motion.div className="absolute min-w-screen min-h-screen bg-white dark:bg-slate-700 z-[99] p-12">
          <SidePanel toggle={() => toggleOpen()} />
        </motion.div>
      </motion.div>
    </>
  );
};

export default FloatingPanel;
