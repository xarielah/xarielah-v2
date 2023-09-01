import footerLinks from "../../lib/json/footer.json";
import { SlSocialLinkedin } from "react-icons/sl";
import { RiGithubFill } from "react-icons/ri";
import type { ReactNode } from "react";

type LinkToIconType = { [key in keyof FooterLinks]: ReactNode };

const LinkToIcon: LinkToIconType = {
  LinkedIn: <SlSocialLinkedin />,
  GitHub: <RiGithubFill />,
};

const Footer = () => {
  const linkKeys = Object.keys(footerLinks) as (keyof FooterLinks)[];

  return (
    <footer className="rounded-md mb-3 px-4 py-2 dark:text-white font-bold w-max mx-auto">
      <ul className="flex gap-6 w-max mx-auto text-2xl">
        {linkKeys.map((key) => (
          <li key={key}>
            <a
              className="flex flex-col items-center"
              href={footerLinks[key].href}
              target="_blank"
            >
              <div>{LinkToIcon[key]}</div>
              <div className="text-[.4em] font-light uppercase">
                {footerLinks[key].label}
              </div>
            </a>
          </li>
        ))}
      </ul>
      <div className="text-center font-light text-sm">xarielah &copy; 2023</div>
    </footer>
  );
};

type LinkProperties = {
  label: string;
  href: string;
};

/**
 * FooterLinks
 */
export type FooterLinks = {
  LinkedIn: LinkProperties;
  GitHub: LinkProperties;
};

export default Footer;
