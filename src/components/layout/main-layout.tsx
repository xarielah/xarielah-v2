import { ReactNode } from "react";
import Navigation from "../header/navigation";
import Footer from "../footer/footer";
import { AnimatePresence } from "framer-motion";

import SidePanel from "./side-panel";
import FloatingPanel from "./floating-panel";

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <div className="block lg:hidden">
        <FloatingPanel />
      </div>
      <main className="max-w-6xl mx-auto grid grid-rows-2 min-h-screen overflow-hidden">
        <div className="row-span-2">
          <header>
            <Navigation />
          </header>
          <section className="grid grid-cols-4 grid-flow-row h-full">
            <div className="hidden lg:block">
              <SidePanel />
            </div>
            <AnimatePresence mode="wait">{children}</AnimatePresence>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
};

interface MainLayoutProps {
  children: ReactNode | ReactNode[];
}

export default MainLayout;
