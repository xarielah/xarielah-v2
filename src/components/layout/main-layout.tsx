import { ReactNode } from "react";
import Navigation from "../header/navigation";
import Footer from "../footer/footer";
import SideMenuContainer from "../side-menu/side-menu-container";
import siteData from "../../../main-data.json";
import { AnimatePresence } from "framer-motion";

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
            <div className="w-56 h-56 rounded-full bg-gray-400"></div>
            <div className="flex flex-col">
              <h1 className="text-3xl">{content.devName}</h1>
              <h2 className="text-sm text-gray-300">{content.title}</h2>
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
