import footerLinks from "../../lib/json/footer.json";

const Footer = () => {
  const linkKeys = Object.keys(footerLinks) as (keyof FooterLinks)[];

  return (
    <footer className="bg-slate-800 p-6">
      <ul className="flex gap-3 w-max mx-auto">
        {linkKeys.map((key) => (
          <li key={key}>
            <a href={footerLinks[key].href} target="_blank">
              {footerLinks[key].label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export type FooterLinks = {
  LinkedIn: {
    label: string;
    href: string;
  };
  GitHub: {
    label: string;
    href: string;
  };
};

export default Footer;
