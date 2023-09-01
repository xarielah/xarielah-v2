import { useLayoutEffect, useState } from "react";
import { FaRegLightbulb, FaLightbulb } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const spanAnimationOptions = {
  initial: { x: 10, opacity: 1 },
  exit: { x: -30, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.2 },
};

const Navigation = () => {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  const doDark = () => {
    document.documentElement.classList.add("dark");
    setTheme("dark");
    window.localStorage.setItem("theme", "dark");
  };
  const doLight = () => {
    document.documentElement.classList.remove("dark");
    setTheme("light");
    window.localStorage.setItem("theme", "light");
  };

  const toggleTheme = () => (theme === "dark" ? doLight() : doDark());

  useLayoutEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      doDark();
    } else {
      doLight();
    }
  }, []);

  return (
    <nav className="px-6 py-2 my-4 flex justify-end min-h-[60px]">
      <button
        onClick={toggleTheme}
        className="text-2xl flex flex-col items-center justify-center gap-3"
        id="light-switch"
      >
        <div id="light-bulb">
          {theme === "light" ? <FaLightbulb /> : <FaRegLightbulb />}
        </div>
        <sub
          id="light-text"
          className="uppercase font-light text-[.5em] flex gap-1"
        >
          GO{" "}
          <span className="font-bold">
            <AnimatePresence mode="wait">
              {theme === "dark" ? (
                <Light key={"light"} />
              ) : (
                <Dark key={"dark"} />
              )}
            </AnimatePresence>
          </span>
        </sub>
      </button>
    </nav>
  );
};

const Light = () => {
  return <motion.div {...spanAnimationOptions}>light</motion.div>;
};

const Dark = () => {
  return <motion.div {...spanAnimationOptions}>dark</motion.div>;
};

export default Navigation;
