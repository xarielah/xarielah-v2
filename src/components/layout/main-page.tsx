import { ReactNode } from "react";
import { motion } from "framer-motion";

const MainPage = ({
  title,
  content,
  author = "Ariel",
  children,
}: MainPageProps) => {
  return (
    <motion.article
      initial={{ y: 200, opacity: 0 }}
      exit={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="col-span-3 h-full px-6"
    >
      <div className="flex flex-col gap-3 mb-3">
        <h1 className="text-5xl">{title}</h1>
        <span>Author: {author}</span>
        <hr />
      </div>

      {content.split(/\r?\n/).map((para, i) => (
        <p key={i}>{para}</p>
      ))}

      <div>{children}</div>
    </motion.article>
  );
};

interface MainPageProps {
  title: string;
  content: string;
  author?: string;
  children?: ReactNode | ReactNode[];
}

export default MainPage;
