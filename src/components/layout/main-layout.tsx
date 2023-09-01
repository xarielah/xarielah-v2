import { ReactNode } from "react";
import Navigation from "../header/navigation";
import Footer from "../footer/footer";
import SideMenuContainer from "../side-menu/side-menu-container";
import siteData from "../../lib/json/main.json";
import { AnimatePresence, motion } from "framer-motion";

import coolBeans from "../../assets/memojis/cool-beans.png";

const MainLayout = ({ children }: MainLayoutProps) => {
  const content = siteData;
  return (
    <main className="max-w-6xl mx-auto grid grid-rows-2 min-h-screen overflow-hidden">
      <div className="row-span-2">
        <header>
          <Navigation />
        </header>
        <section className="grid grid-cols-4 grid-flow-row h-full">
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
              <p className="text-gray-800 dark:text-slate-200">
                {content.title}
              </p>
            </div>
            <SideMenuContainer />
          </div>
          <AnimatePresence mode="wait">{children}</AnimatePresence>
        </section>
      </div>
      <Footer />
    </main>
  );
};

interface MainLayoutProps {
  children: ReactNode | ReactNode[];
}

export default MainLayout;
