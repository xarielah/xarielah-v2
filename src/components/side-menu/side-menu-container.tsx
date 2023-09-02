import sideMenuLinks from "../../lib/json/sidemenu.json";
import SideMenuLink from "./side-menu-link";

const SideMenuContainer = ({ toggle }: SideMenuContainerProps) => {
  return (
    <aside className="flex flex-col gap-3">
      {sideMenuLinks.map((item: SideMenuItem) => (
        <SideMenuLink item={item} toggle={toggle} key={item.label} />
      ))}
    </aside>
  );
};

export type SideMenuItem = {
  label: string;
  href: string;
};

interface SideMenuContainerProps {
  toggle?: () => void;
}

export default SideMenuContainer;
