import { motion } from "framer-motion";
import { BsArrow90DegRight } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { SideMenuItem } from "./side-menu-container";
import { useState, useLayoutEffect } from "react";

const arrowVariants = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const itemVariants = {
  open: {
    x: 15,
  },
  closed: {
    x: -15,
  },
};

const SideMenuLink = ({ toggle, item }: SideMenuLinkProps) => {
  const location = useLocation();
  const [isPage, setIsPage] = useState<boolean>(
    location.pathname === item.href
  );

  useLayoutEffect(() => {
    setIsPage(location.pathname === item.href);
  }, [location.pathname]);

  return (
    <motion.div
      key={item.label}
      whileTap={{ y: isPage ? 0 : 4 }}
      animate={isPage ? "open" : "closed"}
      className="flex items-center"
      variants={itemVariants}
    >
      <motion.div
        animate={isPage ? "show" : "hide"}
        className="mt-2 mr-2"
        key={item.href}
        variants={arrowVariants}
      >
        <BsArrow90DegRight />
      </motion.div>
      <Link
        key={item.label}
        onClick={toggle ? toggle : undefined}
        className={`rounded-lg hover:shadow-xl whitespace-nowrap border-b-transparent hover:border-b-slate-700 dark:hover:border-b-slate-700 border-b-4 lg:text-xl ease-in-out duration-200 font-bold hover:dark:bg-purple-500 hover:bg-slate-500 hover:text-white px-4 w-max py-1 ${
          isPage ? "dark:bg-purple-600 bg-slate-600 text-white" : ""
        }`}
        to={item.href}
      >
        {item.label}
      </Link>
    </motion.div>
  );
};

interface SideMenuLinkProps {
  toggle?: () => void;
  item: SideMenuItem;
}

export default SideMenuLink;
