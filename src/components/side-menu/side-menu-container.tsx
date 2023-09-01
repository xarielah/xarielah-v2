import { Link, useLocation } from "react-router-dom";
import sideMenuLinks from "../../lib/json/sidemenu.json";

const SideMenuContainer = ({ toggle }: SideMenuContainerProps) => {
  const location = useLocation();

  return (
    <aside className="flex flex-col gap-3">
      {sideMenuLinks.map((item: SideMenuItem) => (
        <Link
          onClick={toggle ? toggle : undefined}
          className={`rounded-sm text-2xl ease-in-out duration-200 font-bold hover:dark:bg-slate-700 hover:bg-gray-200 px-2 w-max py-1 ${
            location.pathname === item.href
              ? "dark:bg-purple-800 bg-purple-600 text-white rounded-xl hover:bg-purple-800"
              : ""
          }`}
          to={item.href}
          key={item.label}
        >
          {item.label}
        </Link>
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
