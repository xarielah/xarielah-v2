import { motion } from "framer-motion";
import coolBeans from "../../assets/memojis/cool-beans.png";
import SideMenuContainer from "../side-menu/side-menu-container";
import siteData from "../../lib/json/main.json";

const SidePanel = ({ toggle }: SidePanelProps) => {
  const content = siteData;

  return (
    <div className="flex flex-col gap-6">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        src={coolBeans}
        className="w-56 h-56 rounded-full bg-gray-400 overflow-visible"
      />
      <div className="flex flex-col">
        <h1 className="text-5xl">
          {content.lastDevName}, {content.firstDevName}
        </h1>
        <p className="text-gray-800 dark:text-slate-200">{content.title}</p>
      </div>
      <SideMenuContainer toggle={toggle} />
    </div>
  );
};

interface SidePanelProps {
  toggle?: () => void;
}

export default SidePanel;
