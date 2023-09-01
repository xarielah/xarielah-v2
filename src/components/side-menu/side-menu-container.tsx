import { Link } from "react-router-dom";
import { useState } from "react";

const SideMenuContainer = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  return (
    <aside className="flex flex-col gap-3">
      {menuLink.map((item) => (
        <Link
          className={`rounded-sm ease-in-out duration-200 hover:bg-slate-700 px-2 w-max py-1 ${
            currentPath === item.href ? "bg-slate-800" : ""
          }`}
          onClick={() => setCurrentPath(item.href)}
          to={item.href}
          key={item.label}
        >
          {item.label}
        </Link>
      ))}
    </aside>
  );
};

const menuLink: SideMenuItem[] = [
  {
    label: "Home Sweet Home",
    href: "/home",
    special: false,
  },
  {
    label: "About The Developer",
    href: "/about",
    special: false,
  },
  {
    label: "Projects Portfolio",
    href: "/portfolio",
    special: false,
  },
  {
    label: "Current Work",
    href: "/work",
    special: false,
  },
  {
    label: "Reach Out",
    href: "/contact",
    special: false,
  },
];

export type SideMenuItem = {
  label: string;
  href: string;
  special: boolean;
};

export default SideMenuContainer;
